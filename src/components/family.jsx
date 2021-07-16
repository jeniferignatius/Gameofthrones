export const Family = (props) => {
    return (
      <div id='family' className='text-center'>
        <div className='container'>
          <div className='col-md-8 col-md-offset-2 section-title'>
            <h2>Her Family</h2>
            <p>
            Fiona has a beautiful family. All family members loved her very much and every saturday we have family calls. We enjoy there and we wish family members birthdays and anniversary.
            </p>
          </div>
          <div id='row'>
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className='col-md-3 col-sm-6 team'>
                    <div className='thumbnail'>
                      {' '}
                      <img src={d.img} alt='...' className='team-img' />
                      <div className='caption'>
                        <h4>{d.name}</h4>
                        <p>{d.job}</p>
                      </div>
                    </div>
                  </div>
                ))
              : 'loading'}
          </div>
        </div>
      </div>
    )
  }
