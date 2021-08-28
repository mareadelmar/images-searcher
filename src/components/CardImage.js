import React from "react";

const CardImage = ({ img }) => {
    const { previewURL, likes, largeImageURL, tags, views } = img;
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} className="card-img-top" />
                <div className="card-body">
                    <p className="card-text">{likes} likes</p>
                    <p className="card-text">{views} viewa</p>
                    <a
                        href={largeImageURL}
                        className="btn btn-primary btn-block"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Ver imagen
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CardImage;
