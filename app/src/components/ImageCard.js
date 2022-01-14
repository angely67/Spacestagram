//import '@shopify/polaris/build/esm/styles.css';
import {Card} from '@shopify/polaris';
import React from "react";
//import Heart from "react-animated-heart";

class ImageCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ImgURL: props.ImgURL,
            IsLiked: false,
            MaxWidth: props.MaxWidth
        }
    }

    render() {
        return (
            <Card style={{width: this.state.MaxWidth, margin: "0", padding: "0"}}>
                <img src={this.state.ImgURL} width={"100%"} alt="NASA Images"/>
                   {/*} <Heart isClick={this.state.IsLiked} onClick={() => {
        this.setState(prevState => ({
            IsLiked: !prevState.IsLiked
          }))}
        } />*/}
      </Card>
        )
    }
}

export default ImageCard
