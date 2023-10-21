
import Script from 'next/script';

const MagnificPopup = () => {
  return (
    <>
    
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
      <Script>
        {`
          $(document).ready(function() {
            console.log('Before magnificPopup');

            // Call the magnificPopup method directly on $('.video-play')
            $('.video-play').magnificPopup({
              type: 'iframe',
              disableOn: 700,
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

            console.log('After magnificPopup');
          });
        `}
      </Script>
    </>
  );
};

export default MagnificPopup;
