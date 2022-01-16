import {Card} from '@shopify/polaris';
import React from "react";
import { RiHeartLine, RiHeartFill, RiFileCopyLine, RiFileCopyFill } from 'react-icons/ri';

class ImageCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            img: props.img,
            isLiked: false,
            isCopied: false,
            imgOnly: this.props.options.imgOnly,
            noExplanation: this.props.options.noExplanation
        }
    }

    componentDidUpdate(prevProps) {
        if(prevProps.options !== this.props.options){
            this.setState({imgOnly: this.props.options.imgOnly,
            noExplanation: this.props.options.noExplanation});
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
                {!this.state.imgOnly ?
                <span>
                    <h1>{this.state.img.title}</h1>
                    <h2>{this.state.img.date}</h2>
                    {!this.state.noExplanation?
                    <span style={{fontSize: "1.2em"}}>{this.state.img.explanation}</span>
                    :null}
                    <br/>
                    </span>
                    : null}
                    {!this.state.isLiked ? 
                    <RiHeartLine title="Please Like Me :)" 
                    style={{color: "red", fontSize: "3em", cursor: "pointer"}} 
                    onClick={() => this.likePicture()} /> 
                    : <RiHeartFill title="Please Don't Dislike Me :(" 
                    style={{color: "red", fontSize: "3em", cursor: "pointer"}} 
                    onClick={() => this.likePicture()} />}

                    {!this.state.isCopied ? 
                    <RiFileCopyLine title="Copy Image URL to Clipboard" 
                    style={{color: "black", fontSize: "3em", cursor: "pointer"}} 
                    onClick={() => this.copyPicture()} /> 
                    : <RiFileCopyFill title="Copy Image URL to Clipboard" 
                    style={{color: "green", fontSize: "3em", cursor: "pointer"}} 
                    onClick={() => this.copyPicture()} />}
                </div>
                
            </Card>
        )
    }
}

export default ImageCard