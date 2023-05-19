import Card from "../utils/Card"
import cards from "../utils/cards"


const Techs = () => {

  return (
    <>
      <h1 className="card-tech">Tecnologias que utilizo</h1>
      <div className="card-container-tech">
        <div className='card-container'>     
            {cards.productData.map((props, id) => (
                <Card key={id} {...props}/>
            ))}
        </div>
      </div>
    </>
  )
}

export default Techs