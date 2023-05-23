import React from 'react'
import close from '../assets/close.svg'
import { motion} from 'framer-motion'


const variants = {
  hidden: { 
    opacity:0
  },
  visible:{
    opacity:1
  }
}

const variantsModal = {
  hidden: { 
    scale:0
  },
  visible:{
    scale:1,
    transition:{
      duration:0.1,
    }
  }
}



const Modal = ({children, state, switchState}) => {
  return (
    <>
      {state &&
        <motion.div className='overlay'
          initial="hidden"
          animate="visible"
          variants={variants}>
            <motion.div className='modal-container'
              initial={{ scaleX: 0}}
              animate={{ scaleX: 1 }}
              variants={variantsModal}>
                <button className='button-close' onClick={() =>switchState(false) }><img src={close}/></button>
                {children}
            </motion.div>
        </motion.div>  
      }  
    </>
  )
}

export default Modal