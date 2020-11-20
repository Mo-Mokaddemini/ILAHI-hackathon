import React from 'react';

function CarouselImg ({src}) {

    let imgStyles= {

        width: 100+"%",
        height: 100+'%',
    }
    return <img src={src} alt="slide-img" style={imgStyles}></img>
}
export default CarouselImg;