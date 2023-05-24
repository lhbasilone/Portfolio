import Card from "../utils/Card"
import cards from "../utils/cards"
import {motion} from "framer-motion"




const Techs = () => {

  return (
    <>
      <motion.h1 className="card-tech"
      whileInView={{
        scale:[0, 1.5, 1 ],
        opacity:[0, 0.3, 0.8, 1],
      }}
      transition={{duration: 0.5}}
      >
        Tecnologías que utilizo
      </motion.h1>
      <motion.div className="card-container-tech"
        whileInView={{opacity:[0.4, 0.7, 1 ]}}
      >
        <div className='card-container'>     
            {cards.productData.map((props, id) => (
                <Card key={id} {...props}/>
            ))}
        </div>
      </motion.div>
    </>
  )
}

export default Techs