import React from "react";

const CardResponsible = (props) => {
  return(
    <>
      <div className="card">
        <div className='card-img-container'>
          <img src={props.img} alt="seo icon"/>
        </div>
        <p className="little-title roboto">{props.title}</p>
        <p className="poppins">{props.txt}</p>
      </div>
    </>
  )
}

export default CardResponsible