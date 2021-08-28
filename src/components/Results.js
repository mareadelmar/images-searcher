import React, { Component } from "react";
import CardImage from "./CardImage";

class Results extends Component {
    displayImages = () => {
        const images = this.props.images;
        if (images.length === 0) return;
        console.log(this.props.images);

        return (
            <div className="col-12 p-5 row">
                {images.map((item) => {
                    return <CardImage img={item} key={item.id} />;
                })}
            </div>
        );
    };

    render() {
        return <React.Fragment>{this.displayImages()}</React.Fragment>;
    }
}

export default Results;
