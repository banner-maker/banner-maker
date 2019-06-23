import React, { useState, useEffect } from 'react';
import ThumbnailList from 'components/unsplash/ThumbnailList';
import * as UnsplashAPI from 'lib/api/unsplash';
import SearchForm from "components/unsplash/SearchForm/SearchForm";
import ScrollContainer from "components/base/ScrollContainer";

const UnsplashContainer = () => {
  console.log('test');
  const [images, setImages] = useState([]);
  const [selected, setSelected] = useState(null);

  const fetchRandomImage = async () => {
    const { data } = await UnsplashAPI.getRandomPhotos({ count: 30 });
    setImages(data.map((record) => ({
      id: record.id,
      title: record.alt_description,
      url: record.urls.thumb,
      author: record.user.username
    })));
  };

  const searchImage = async (query) => {
    if(!query) {
      await fetchRandomImage();
      return;
    }
    const { data } = await UnsplashAPI.searchPhotos({ query });
    setImages(data.results.map((record) => ({
      id: record.id,
      title: record.alt_description,
      url: record.urls.thumb,
      author: record.user.username
    })));
  };

  useEffect(  () => {
    fetchRandomImage();
  }, []);


  return (
    <div>
      <SearchForm
        onSearch={searchImage}
        onRandom={fetchRandomImage}
      />
      <ScrollContainer height={400}>
        <ThumbnailList
          onClick={thumbnail => setSelected(thumbnail.id)}
          selected={selected}
          thumbnails={images}
        />
      </ScrollContainer>
    </div>
  )
};

export default UnsplashContainer;
