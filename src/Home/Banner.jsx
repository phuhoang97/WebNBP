import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Button } from 'antd';
// import BannerSVGAnim from './component/BannerSVGAnim';
import BannerVideo from './component/BannerVideo';

function Banner(props) {
  return (
    <div className="banner-wrapper">
      <div class="bg_img  is-bgr is-ovlb">
        <video src="https://rikkeisoft.com/wp-content/uploads/2021/12/1.mp4" width="100%" height="650px" autoplay id="video1" muted="muted" type='video/mov' playsinline="" webkit-playsinline="" x5-playsinline=""></video>
      </div>
      <QueueAnim className="banner-title-wrapper" type={props.isMobile ? 'bottom' : 'right'}>
        <div key="line" className="title-line-wrapper">
          <div
            className="title-line"
            style={{ transform: 'translateX(-64px)' }}
          />
        </div>
        <h1 key="h1">Chúng tôi là</h1>
        <h1 key="content">
          Nhà cung cấp dịch vụ CNTT đáng tin cậy
        </h1>
        <h2 key="content">
          Chúng tôi luôn cố gắng làm tốt nhất để đem lại sự hài lòng cho khách hàng
        </h2>
        <div key="button" className="button-wrapper">
          <a href="http://preview.pro.ant.design" target="_blank" rel="noopener noreferrer">
            <Button type="primary">
              Liên hệ với chúng tôi
            </Button>
          </a>
        </div>
      </QueueAnim>
      {!props.isMobile && (
        <TweenOne animation={{ opacity: 1 }} className="banner-image-wrapper">
          {/* <BannerSVGAnim /> */}
          {/* <BannerVideo /> */}
        </TweenOne>
      )}
    </div>
  );
}

Banner.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default Banner;
