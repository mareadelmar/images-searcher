import React, { Component } from "react";
import CardImage from "./CardImage";
import Pagination from "./Pagination";

class Results extends Component {
    displayImages = () => {
        const images = this.props.images;
        if (images.length === 0) return;
        console.log(this.props.images);

        return (
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {images.map((item) => {
                        return <CardImage img={item} key={item.id} />;
                    })}
                </div>
                <Pagination
                    previousPage={this.props.previousPage}
                    nextPage={this.props.nextPage}
                />
            </React.Fragment>
        );
    };

    render() {
        return <React.Fragment>{this.displayImages()}</React.Fragment>;
    }
}

export default Results;
