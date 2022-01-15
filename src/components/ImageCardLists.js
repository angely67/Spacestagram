import React from "react";
import ImageCard from "./ImageCard";
import {Button, Card} from "@shopify/polaris";

class ImageCardLists extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            imgs: [],
            maxWidth: props.MaxWidth
        }
    }

    fetchNewImgs(){
        fetch("https://api.nasa.gov/planetary/apod?api_key=YL44zoFXxMZ1ZZE0Ig2fxdmV1ieoJmwNa7XOkRdY&count=10") 
            .then(response => response.json())
            .then(newImages => {
                this.setState(prevState => ({
                    imgs: prevState.imgs.concat(newImages)
                  }));
                //this.setState({imgs: newImages});
            })
            .catch(err => {
                console.log(err);
            });
    }

    componentDidMount(){
        this.fetchNewImgs();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.MaxWidth !== this.props.MaxWidth){
            this.setState({MaxWidth: this.props.MaxWidth});
        }
      }


    render() {
        return (
            <div style={{width: this.state.maxWidth, marginLeft: "auto", marginRight: "auto"}}>
                {this.state.imgs.map(d => (
                    <ImageCard img={d}/>
                ))}
                <Card style={{width: "100%", margin: "0", padding: "0"}}>
                <Button fullWidth onClick={() => this.fetchNewImgs()}>Load More</Button>
                </Card>
            </div>
        )
    }
}

export default ImageCardLists