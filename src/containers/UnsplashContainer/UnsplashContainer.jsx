import React, { useState, useEffect, useCallback, useRef } from 'react';
import ThumbnailList from 'components/unsplash/ThumbnailList';
import * as UnsplashAPI from 'lib/api/unsplash';
import SearchForm from "components/unsplash/SearchForm/SearchForm";
import ScrollContainer from "components/base/ScrollContainer";
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import { Icon }from 'antd';

const convertData = (record) => ({
  id: record.id,
  title: record.alt_description,
  url: record.urls.thumb,
  author: record.user.username
 });

const PER_PAGE = 30;

const UnsplashContainer = () => {
  const currentQuery = useRef('');
  const currentPage = useRef(1);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [images, setImages] = useState([]);
  const [selected, setSelected] = useState(null);

  const rootRef = useRef(null);
  const targetRef = useRef(null);

  const loadRandomImage = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await UnsplashAPI.getRandomPhotos({ count: 30 });
      currentQuery.current = '';
      setImages(data.map(convertData));
    } catch(e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  },[]);

  const loadImage = useCallback(async ({ query, page }) => {
    try {
      setLoading(true);
      const { data } = await UnsplashAPI.searchPhotos({ query, page, per_page: PER_PAGE});
      return data;
    } catch(e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, []);

  const searchImage = useCallback(async (query) => {
    if(!query) {
      await loadRandomImage();
      return;
    }
    currentQuery.current = query;
    currentPage.current = 1;
    const data = await loadImage({ query, page: 1, per_page: PER_PAGE });
    setImages(data.results.map(convertData));
  }, [loadImage, loadRandomImage]);

  const loadMoreImage = useCallback(async () => {
    if(images.length > 0) {
      currentPage.current++;
      const data = await loadImage({
        query: currentQuery.current,
        page: currentPage.current
      });
      setImages([...images, ...data.results.map(convertData)])
    }
  },[images, loadImage]);

  useIntersectionObserver({
    root: rootRef.current,
    target: targetRef.current,
    onIntersect: ([{isIntersecting}]) => {
      if(isIntersecting && !!currentQuery.current) {
        loadMoreImage();
      }
    }
  });

  useEffect(() => {
    loadRandomImage();
  }, [loadRandomImage]);


  return (
    <div>
      <SearchForm
        onSearch={searchImage}
        onRandom={loadRandomImage}
      />
      <ScrollContainer height={400} vertical ref={rootRef}>
        <ThumbnailList
          onClick={thumbnail => setSelected(thumbnail.id)}
          selected={selected}
          thumbnails={images}
        />
        {
          loading && (
            <Icon type="loading" />
          )
        }
        <div ref={targetRef} />
      </ScrollContainer>
    </div>
  )
};

export default UnsplashContainer;
