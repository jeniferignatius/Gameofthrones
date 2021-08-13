export const Card = (props) => {
    return (
      <div id='partsofcard'>
        <div className='container'>
          <div className='section-title text-center'>
            <h2>Parts of Card</h2>
          </div>
          <div className='row'>
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className='col-md-4'>
                    <div className='partsofcard'>
                      <div className='partsofcard-image'>
                        {' '}
                        <img src={d.img} alt='' />{' '}
                        <p>card</p>
                      </div>
                      <div className='partsofcard-content'>
                        <p>"{d.text}"</p>
                        <div className='partsofcard-meta'> - {d.name} </div>
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