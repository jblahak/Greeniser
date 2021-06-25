import React from 'react'

const BilanProd = (props) => {
  return(
    <>
      <p className='title'>Bilan de la production {props.title}</p>
      <div className="card-bilan-container">
        <div className="card-bilan">
          <p>{props.txt}</p>
          <p>{props.bilan}</p>
        </div>
        <div className="redcard"></div>
      </div>
    </>
  )
}

export default BilanProd