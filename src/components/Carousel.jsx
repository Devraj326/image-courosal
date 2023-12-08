import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
    constructor(){
        super()
        this.state = {
            count:0
        }
    }

    increase = () =>{
        if(this,this.state.count<2){
            this.setState({count:this.state.count +1})
        }
        
    }

    decrese = () =>{
        if(this,this.state.count>0){
            this.setState({count:this.state.count -1})
        }
    }


  render(){
    console.log(images);
    return(
        <div className="carousel">
        <div className="left" onClick={this.decrese}><ArrowBackIosIcon/></div>
        <div className="carouselInner">
            <img src={images[this.state.count].img} alt="" />
        </div>
        <div className="center">
            <h1>{images[this.state.count].title}</h1>
            <p>{images[this.state.count].subtitle}</p>
        </div>
        <div className="right" onClick={this.increase}><ArrowForwardIosIcon/></div>
        </div>
    )
  }

}
export default Carousel;