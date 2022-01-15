//import '@shopify/polaris/build/esm/styles.css';
import {Card} from '@shopify/polaris';
import React from "react";
import { RiHeartLine, RiHeartFill } from 'react-icons/ri';

class ImageCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            img: props.img,
            isLiked: false
        }
    }

    likePicture = () => {
        this.setState(prevState => ({
            isLiked: !prevState.isLiked
          }));
      }

    render() {
        return (
            <Card style={{width: "100%", margin: "0", padding: "0"}}>
                
                <img src={this.state.img.url} width="100%" alt="NASA Images"></img>
                <div style={{padding: "10px"}}>
                <h1>{this.state.img.title}</h1>
                <h2>{this.state.img.date}</h2>
                <text>{this.state.img.explanation}</text>
                <br/>
               {!this.state.isLiked ? <RiHeartLine style={{color: "red", fontSize: "3em"}} onClick={() => this.likePicture()} /> 
         : <RiHeartFill style={{color: "red", fontSize: "3em"}} onClick={() => this.likePicture()} />}
                </div>
      </Card>
        )
    }
}

export default ImageCard