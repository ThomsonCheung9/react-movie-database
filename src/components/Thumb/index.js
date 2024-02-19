import React from "react";
import { Link } from "react-router-dom";

//Styles
import { Image } from "./Thumb.styles";

const Thumb = ({image, movieId, clickable}) => (
    <div>
        {clickable ? (
            <Link to={`/${movieId}`}>
                <Image src={image} alt="move-thumb" />
            </Link>
        ) : (
            <Image src={image} alt="move-thumb" />
        )
        }
        
    </div>
);

export default Thumb;