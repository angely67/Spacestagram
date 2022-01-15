import React from "react";
import ImageCard from "./ImageCard";
import {Button, Card} from "@shopify/polaris";

class ImageCardLists extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            imgs: [],
            maxWidth: props.maxWidth
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


    render() {
        return (
            <div style={{width: this.state.maxWidth+"px", marginLeft: "auto", marginRight: "auto"}}>
                {this.state.imgs.map(d => (
                    <ImageCard key={d.url} img={d}/>
                ))}
                <Card style={{width: "100%", margin: "0", padding: "0"}}>
                <Button fullWidth onClick={() => this.fetchNewImgs()}>Load More</Button>
                </Card>
            </div>
        )
    }
}

export default ImageCardLists