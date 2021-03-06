import React from 'react'
const image = window.location.origin + "/fp.png"

const PageCover = React.forwardRef((props, ref) => {
    return (
      <div className="page front_cover"  ref={ref} data-density="hard">
        <div className="page-content" style={{backgroundImage:`url(${image})`, backgroundSize:"100%", backgroundPosition:"center"}}>
          <h2>{props.children}</h2>
          {/* <img src={image} alt="" /> */}
        </div>
      </div>
    );
  });

export default PageCover;