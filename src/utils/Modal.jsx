import React from 'react'
import close from '../assets/close.svg'

const Modal = ({children, state, switchState}) => {
  return (
    <>
      {state &&
        <div className='overlay'>
            <div className='modal-container'>
                <button className='button-close' onClick={() =>switchState(false) }><img src={close}/></button>
                {children}
            </div>
        </div>  
      }  
    </>
  )
}

export default Modal