import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
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
