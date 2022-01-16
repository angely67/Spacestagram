import React from "react";
import ImageCard from "./ImageCard";
import {Button, Card, Checkbox} from "@shopify/polaris";
import { RiDeleteBinFill } from 'react-icons/ri';


class ImageCardLists extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            imgs: [],
            maxWidth: props.maxWidth,
            imgOnly: false,
            noExplanation: false
        }
    }

    fetchNewImgs(){
        fetch("https://api.nasa.gov/planetary/apod?api_key=YL44zoFXxMZ1ZZE0Ig2fxdmV1ieoJmwNa7XOkRdY&count=10&thumbs=true") 
            .then(response => response.json())
            .then(newSearches => {
                var newImages = [];
                newSearches.forEach(result => {
                    if(result.thumbnail_url){//video
                        var temp = result;
                        temp.url = temp.thumbnail_url;
                        newImages.push(temp);
                    }
                    else{
                        newImages.push(result);
                    }
                });

                this.setState(prevState => ({
                    imgs: prevState.imgs.concat(newImages)
                  }));
            })
            .catch(err => {
                console.log(err);
            });
    }

    componentDidMount(){
        this.fetchNewImgs();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.maxWidth !== this.props.maxWidth){
            this.setState({maxWidth: this.props.maxWidth});
        }
      }

      toggleImgOnlyOption = () => {
        this.setState(prevState => ({
            imgOnly: !prevState.imgOnly
          }));
      }

      toggleNoExplanationOption = () => {
        this.setState(prevState => ({
            noExplanation: !prevState.noExplanation
          }));
      }


    render() {
        var garbageBinColour = this.state.imgs.length === 0? "red":"black";
        return (
            <div style={{width: this.state.maxWidth+"px", marginLeft: "auto", marginRight: "auto"}}>
                <Checkbox label="Image Only" 
                checked={this.state.imgOnly} 
                onChange={this.toggleImgOnlyOption}/> &nbsp;

                {!this.state.imgOnly ? 
                <span>
                 <Checkbox label="No Explanation" 
                 checked={this.state.noExplanation} 
                 onChange={this.toggleNoExplanationOption}/> &nbsp;</span> : null}
                 

                <RiDeleteBinFill title="Clear All" id="deleteAll"
                    style={{color: garbageBinColour, fontSize: "2.5em", cursor: "pointer", marginBottom: "15px"} } 
                    onClick={() => this.setState({imgs:[]})} /> 

                {this.state.imgs.map(d => (
                    <ImageCard key={d.url} 
                    img={d} 
                    options={{imgOnly: this.state.imgOnly, noExplanation: this.state.noExplanation}}/>
                ))}
                <Card style={{width: "100%", margin: "0", padding: "0"}}>
                    <Button fullWidth onClick={() => this.fetchNewImgs()}>Load More</Button>
                </Card>
            </div>
        )
    }
}

export default ImageCardLists