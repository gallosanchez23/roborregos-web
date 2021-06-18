import React, {useState} from 'react';
import './carousel.css';
import {images} from './carouselData';
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos';
import useWindowSize from '../../../hooks/useWindowSize'
import { SMALL_WIDTH } from '../../../constants';
import { makeStyles, withStyles } from '@material-ui/core/styles'
const ArrowForward = withStyles({
    root: {
      fontSize: '5vh !important',
      opacity: '1 !important',
      color: 'white !important',
    },
  })(ArrowForwardIcon)
const ArrowBack = withStyles({
    root: {
      fontSize: '5vh !important',
      opacity: '1 !important',
      color: 'white !important',
    },
  })(ArrowBackIcon)


function Carousel(){
    const { width } = useWindowSize()
    const [currImg,setCurrImg]=useState(0);
    if(width>SMALL_WIDTH){
        
        return (
        <div className="carousel">
            <div className="leftcarouselInner" >
                <div className="leftleft" onClick={()=>{
                    
                    currImg==0 && setCurrImg(3);
                    currImg>0 && setCurrImg(currImg-1);
                }}>
                    <ArrowBack />
                </div>
                <div className="leftright">
                    <div className="text-container">
                    <h1>{images[currImg].title}</h1>
                    <p>{images[currImg].subtitle}</p>
                    </div>

                </div>
                <div className="left3"></div>
            </div>
            <div className="rightcarouselInner" style={{backgroundImage: `url(${images[currImg].img})`}}>
                <div className="rightleft" >
                
                </div>
                <div className="rightright" onClick={()=>{
                    currImg==3 && setCurrImg(0);
                    currImg<3 && setCurrImg(currImg+1);
                }}>
                    <ArrowForward/>
                </div>
            </div>
        </div>
    )

    }
    else{
        return (
            <div className="smallcarousel" style={{backgroundImage: `url(${images[currImg].img})`}} >
                <div className="left" onClick={()=>{
                    currImg==0 && setCurrImg(3);
                    currImg>0 && setCurrImg(currImg-1);
                }}>
                    <ArrowBack/>
                </div>
                <div className="center">
                    <div className="SmallText-Container">
                        <h1>{images[currImg].title}</h1>
                        <p>{images[currImg].subtitle}</p>
                    </div>
                    

                </div>
                <div className="right" onClick={()=>{
                    currImg==3 && setCurrImg(0);
                    currImg<3 && setCurrImg(currImg+1);
                }}>
                    <ArrowForward/>
                </div>
            </div>

    )

    }
}

export default Carousel;