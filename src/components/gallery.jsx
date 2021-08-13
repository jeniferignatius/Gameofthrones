export const Gallery = (props) => {
    return (
      <div id='portfolio' className='text-center'>
        <div className='container'>
          <div className='section-title'>
            <h2>Gallery</h2>
            <p>
              Game of throne images.
            </p>
          </div>
          <div className='row'>
            <div className='portfolio-items'>
              <div className='col-sm-6 col-md-4 col-lg-4'>
                <div className='portfolio-item'>
                  <div className='hover-bg'>
                    {' '}
                    <a
                      href='img/image1.jpg'
                      title='Project Title'
                      data-lightbox-gallery='gallery1'
                    >
                      <div className='hover-text'>
                        <h4>Season 1 of Game of thrones</h4>
                        <p>Season 1 spans a period of several months on a world where the seasons last for years at a time. The action begins in the unified Seven Kingdoms of Westeros as the long summer ends and winter draws near. Lord Eddard Stark is asked by his old friend, King Robert Baratheon, to serve as the King's Hand following the death of the previous incumbent, Eddard's mentor Jon Arryn. Eddard is reluctant, but receives intelligence suggesting that Jon was murdered. Eddard accepts Robert's offer, planning to use his position and authority to investigate the alleged murder.</p>
                      </div>
                      <img
                        src='img/image1.jpg'
                        className='img-responsive'
                        alt='Project Title'
                      />{' '}
                    </a>{' '}
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-4'>
                <div className='portfolio-item'>
                  <div className='hover-bg'>
                    {' '}
                    <a
                      href='img/image2.jpg'
                      title='Project Title'
                      data-lightbox-gallery='drawing2'
                    >
                      <div className='hover-text'>
                        <h4>The final episode of Telltale’s Game of Thrones is full of spoilers of some of the choices players had to make.</h4>
                      </div>
                      <img
                        src='img/image2.jpg'
                        className='img-responsive'
                        alt='Project Title'
                      />{' '}
                    </a>{' '}
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-4'>
                <div className='portfolio-item'>
                  <div className='hover-bg'>
                    {' '}
                    <a
                      href='img/image3.jpg'
                      title='Project Title'
                      data-lightbox-gallery='drawing3'
                    >
                      <div className='hover-text'>
                        <h4>House of the Dragon</h4>
                      </div>
                      <img
                        src='img/image3.jpg'
                        className='img-responsive'
                        alt='Project Title'
                      />{' '}
                    </a>{' '}
                  </div>
                </div>
              </div>
           
             
              
            </div>
          </div>
        </div>
      </div>
    )
  }