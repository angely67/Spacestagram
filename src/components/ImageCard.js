//import '@shopify/polaris/build/esm/styles.css';
import {Card} from '@shopify/polaris';
import React from "react";
//import { RiHeart3Line, RiHeart3Fill } from 'react-icons/ri';

class ImageCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            img: props.img,
            isLiked: false
        }
    }

    likePicture = () => {
        this.setState({isLiked: !this.state.isLiked});
      }

    render() {
        return (
            <Card style={{width: "100%", margin: "0", padding: "0"}}>
                Hi
                {this.state.img.url}
             {/*   <img src={this.state.img.url} width={"100%"} alt="NASA Images"/>
                <div style={{padding: "10px"}}>
                <h1>{this.state.img.title}</h1>
                <h2>{this.state.img.date}</h2>
                <text>{this.state.img.explanation}</text>
                <br/>
         {!this.state.isLiked ? <RiHeart3Line className='heart'style={{color: "red", fontSize: "3em"}} onClick={() => this.likePicture()} /> 
         : <RiHeart3Fill className='heart' style={{color: "red", fontSize: "3em"}} onClick={() => this.likePicture()} />}
        </div>*/}

      </Card>
        )
    }
}

export default ImageCard