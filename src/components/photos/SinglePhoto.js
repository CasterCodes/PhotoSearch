import React from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { IconContext } from "react-icons";

const SinglePhoto = (props) => {
  const { photo } = props;
  return (
    <div className='image-container'>
      <Link to='#!'>
        <img src={photo.webformatURL} alt={photo.tags} className='image-link' />
      </Link>
      <div className='image-decription'>
        <p>
          By <strong>{photo.user}</strong>
        </p>
        <p>
          <IconContext.Provider
            value={{
              color: "yellow",
              className: "icon",
              size: "1.2em",
            }}
          >
            {" "}
            <FaRegHeart />
          </IconContext.Provider>
          <strong
            style={{ fontSize: "1.2em", margin: "0px 2px", marginTop: "-1px" }}
          >
            {photo.likes}
          </strong>
        </p>
        <p>
          {photo.views}{" "}
          <strong style={{ color: "yellow", margin: "0px 2px" }}>Views</strong>
        </p>
      </div>
    </div>
  );
};

export default SinglePhoto;
