import React from 'react';
import styles from './ThumbnailList.module.scss';
import CX from 'classnames';
import { Row, Col } from 'antd/lib/index';

const ThumbnailList = ({ thumbnails, selected, onClick }) => (
  <Row gutter={10}>
    {
      thumbnails.map((thumbnail) => (
        <Col span={6} key={thumbnail.id}>
          <div className={styles['thumbnail__item']}>
            <img
              src={thumbnail.urls.thumb}
              alt={thumbnail.alt_description}
              className={CX({[styles.active]: thumbnail.id === selected})}
              onClick={() => onClick(thumbnail)}
            />
            <span >By {thumbnail.user.username}</span>
          </div>
        </Col>
      ))
    }
  </Row>
);

export default ThumbnailList;
