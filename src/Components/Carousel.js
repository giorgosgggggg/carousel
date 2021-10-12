import React, { useState } from 'react'
import "./Carousel.css"
import { Images } from "../Helpers/CarouselData"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos"

function Carousel() {
    const [currImg, setCurrImg] = useState(0)
    return (
        <div className="carousel" >
            <div className="carouselInner"
                style={{ backgroundImage: `url(${Images[currImg].img} )` }} >
                <div className="left" onClick={() => {
                    currImg > 0 && setCurrImg(currImg - 1)
                }} >
                    <ArrowBackIosIcon style={{ fontSize: 30 }} />
                </div>
                <div className="center"   >
                    <h1>  {Images[currImg].title} </h1>
                    <p> {Images[currImg].subtitle} </p>
                </div>
                <div className="right" onClick={() => {


                    currImg < Images.length - 1 && setCurrImg(currImg + 1)
                }} >
                    <ArrowForwardIosIcon style={{ fontSize: 30 }} />
                </div>
            </div>

        </div>
    )
}

export default Carousel
