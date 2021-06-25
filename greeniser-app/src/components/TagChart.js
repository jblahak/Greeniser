import React from 'react'

const TagChart = (props) => {
  return(
    <>
      <div id={props.id} className="tag-chart">
        <p>{props.txt}</p>
      </div>
    </>
  )
}

export default TagChart