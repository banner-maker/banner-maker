import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

export const Header: React.FC = () => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <meta property='fb:app_id' content='1572330226230304' />
      <meta property='og:site_name' content='Banner Maker' />
      <meta property='og:url' content='https://banner.godori.dev' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content='Banner Maker' />
      <meta
        name='keywords'
        content='Banner Maker,Banner Generator,Editor,Image,Banner Download,Color Text,배너'
      />
      <meta
        property='og:description'
        content='Create a simple banner and download it.'
      />
      <meta
        property='og:image'
        content='https://raw.githubusercontent.com/godori/banner-maker/master/public/banner-maker.png'
      />
      <title>Banner Maker</title>
      <script
        async
        src='https://www.googletagmanager.com/gtag/js?id=UA-80202920-2'
      />
      <script>
        {`<!-- Google Tag Manager -->
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-T562NCX');
          <!-- End Google Tag Manager -->`}
      </script>
    </Helmet>
    <HeaderWrapper>
      <HeaderTitle onClick={() => window.location.reload()}>
        [Banner Maker]
      </HeaderTitle>
    </HeaderWrapper>
  </>
)

const HeaderWrapper = styled.div`
  position: fixed;
  top: 10px;
  right: 15px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
`
const HeaderTitle = styled.div`
  font-size: 1.5em;
  margin: 20px;
  color: #fff;
  cursor: pointer;
  &:hover {
    color: #ccc;
  }
`
