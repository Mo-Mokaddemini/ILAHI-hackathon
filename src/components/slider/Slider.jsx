import React, { useEffect , useState} from 'react';
import '../slider/slider.scss';
import CarouselImg from './CarouselImg';
import i1 from '../../assets/Anubis-carousel.jpg';
import i2 from '../../assets/carousel.jpg';
import i3 from '../../assets/godess.jpg';
import i4 from '../../assets/horus-carousel.jpg';
import i5 from '../../assets/Isis-carousel.jpg';
import i6 from '../../assets/carousel-anubis.jpg';


function Slider() {
   
    let sliderArr = [<CarouselImg src={i1}/>,<CarouselImg src={i2}/>,<CarouselImg src={i6}/>,<CarouselImg src={i3}/>,<CarouselImg src={i4}/>,<CarouselImg src={i5}/>];
    const [x, setX] = useState(0);

    const goLeft = () => {
         x=== 0 ? setX(-100 * (sliderArr.length-1)) : setX(x+100);
    }
    const goRight = () => {
         x=== -100*(sliderArr.length-1) ? setX(0) : setX(x-100);
    }
    const [text, setText] = useState("Loading...");

    useEffect(() => {
       
        const img1 = 
                x===0 ? setText("Fear the Gods wrath...") : "";
        const img2 =
                x===(-100) ?  setText("When they will come for you...") : "";
        const img3 =
               x===(-200) ? setText("It will be too late ...") : "";
        const img4 =
              x===(-300) ? setText("But there still can be hope...") : "";
        const img5 =
              x===(-400) ? setText("If you give your best offerings to Us...") : "";
        const img6 =
              x===(-500) ?  setText("We'll might forgive your thins.") : "";
        
    });
         
    
    return (
<div className="slider">
    {
        sliderArr.map((item, index)=> {
            return (
                <div key={index} className="slide" style= {{transform: `translateX(${x}%)`}}>
                        {item}
                        <div className="text-container">
            <p className="carousel-text">{text}</p>
                        </div>
                </div>
            )
        })
    }
    <button id="goLeft" onClick= {goLeft}> <i class="fas fa-chevron-left"></i></button>
    <button id="goRight" onClick= {goRight}><i class="fas fa-chevron-right"></i></button>

</div>
    );

}
export default Slider;