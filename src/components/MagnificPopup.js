import React, { useEffect } from 'react';
import Head from 'next/head';

const MagnificPopup = () => {
  useEffect(() => {
    $(document).ready(function () {
      $('.video-play').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        iframe: {
          patterns: {
            youtube: {
              index: 'youtube.com/',
              id: 'v=',
              src: 'https://www.youtube.com/embed/Y4UwssndcPA',
            },
          },
          srcAction: 'iframe_src',
        },
      });
    });
  }, []);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.usebootstrap.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />

        <link
          href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro@663d232/css/all.css"
          rel="stylesheet"
          type="text/css"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.css"
        />
      </Head>

      <div className="magnific-wrapper">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h2 className="head-text">Magnific Popup</h2>
            </div>
            <div className="col-lg-8">
              <div
                className="magnific-box position-relative"
                style={{
                  backgroundImage:
                    'url(https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
                }}
              >
                <a className="video-play" href="https://www.youtube.com/embed/Y4UwssndcPA">
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MagnificPopup;
