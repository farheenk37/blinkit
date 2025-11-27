import React from 'react'

export default function Banner() {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 d-flex ms-4 gap-5 my-3' >
            <div className='col-3'>
              <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg' height={'195px'} />
            </div>
            <div className='col-3'>
              <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg' height={'195px'} />
            </div>
            <div className='col-3 '>
              <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-03/babycare-WEB.jpg' height={'195px'} />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
