import React from "react";
import ImageCard from "./ImageCard";

class ImageCardLists extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            imgs: [],
            maxWidth: props.MaxWidth
        }
    }

    componentDidMount(){
        fetch("https://api.nasa.gov/planetary/apod?api_key=YL44zoFXxMZ1ZZE0Ig2fxdmV1ieoJmwNa7XOkRdY&count=10") 
            .then(response => response.json())
            .then(newImages => {
                this.setState({imgs: newImages});
            })
            .catch(err => {
                console.log(err);
            });
    }


    render() {
        return (
            <div style={{width: "50%", marginLeft: "auto", marginRight: "auto"}}>
                {this.state.imgs.map(d => (
                    <ImageCard img={d}/>
                ))}
                Hi
            </div>
        )
    }
}

export default ImageCardLists