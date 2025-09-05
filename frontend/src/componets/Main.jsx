import React from 'react'
import Button from './Button'
import Footer from './Footer'
import Header from './Header'

export const Main = () => {
  return (
    <>
    
      <div className='container'>
        <div className='p-5 text-center bg-light-dark rounded'>
          <h1 className='text-light'>Stock Prediction applicationn</h1>
          <p className='text-light lead'>This stock prediction application utilizes machine learning</p>
          <Button text = "Login" class="btn-outline-info" />

        </div>

      </div>
    </>
    
  )
}
