import {Card} from '@shopify/polaris';
import React from "react";
import { RiHeartLine, RiHeartFill, RiFileCopyLine, RiFileCopyFill } from 'react-icons/ri';

class ImageCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            img: props.img,
            isLiked: false,
            isCopied: false
        }
    }

    likePicture = () => {
        this.setState(prevState => ({
            isLiked: !prevState.isLiked
          }));
      }

      copyPicture = () => {
        this.setState({isCopied: true});
          navigator.clipboard.writeText(this.state.img.url);
      }

    render() {
        return (
            <Card style={{width: "100%", margin: "0", padding: "0"}}>
                
                <img src={this.state.img.url} width="100%" alt="NASA Images"></img>
                <div style={{padding: "10px"}}>
                <h1>{this.state.img.title}</h1>
                <h2>{this.state.img.date}</h2>
                <span>{this.state.img.explanation}</span>
                <br/>
               {!this.state.isLiked ? <RiHeartLine style={{color: "red", fontSize: "3em"}} onClick={() => this.likePicture()} /> 
         : <RiHeartFill style={{color: "red", fontSize: "3em"}} onClick={() => this.likePicture()} />}

         {!this.state.isCopied ? <RiFileCopyLine style={{color: "black", fontSize: "3em"}} onClick={() => this.copyPicture()} /> 
         : <RiFileCopyFill style={{color: "green", fontSize: "3em"}} onClick={() => this.copyPicture()} />}
                </div>
      </Card>
        )
    }
}

export default ImageCard