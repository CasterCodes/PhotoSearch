import React, { useContext, useEffect } from "react";
import PhotosContext from "../../context/photos/PhotosContext";
import SinglePhoto from "./SinglePhoto";

const Photos = () => {
  const photosContext = useContext(PhotosContext);
  const { getPhotos, photos, loading } = photosContext;
  useEffect(() => {
    getPhotos();
    // eslint-disable-next-line
  }, []);
  return (
    <div className='after-banner'>
      {!loading &&
        photos !== null &&
        photos.hits.map((photo) => (
          <SinglePhoto photo={photo} key={photo.id} />
        ))}
    </div>
  );
};

export default Photos;
