import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <meta property="og:site_name" content="Banner Maker" />
          <meta property="og:url" content="https://banner.godori.dev" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Banner Maker" />
          <meta
            name="keywords"
            content="Banner,배너,Editor,Image,Banner Download,Banner Generator,Color Text"
          />
          <meta
            property="og:description"
            content="Create a simple banner and download it!"
          />
          <meta
            property="og:image"
            content="https://raw.githubusercontent.com/godori/banner-maker/master/public/banner-maker.png"
          />
          <title>Banner Maker</title>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-80202920-2"
          />
          <script>
            {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());gtag('config', 'UA-80202920-2');`}
          </script>
        </Helmet>
        <div className="header">
          <div className="headerTitle" onClick={() => window.location.reload()}>
            [ Banner Maker ]
          </div>
        </div>
      </>
    );
  }
}

export default Header;
