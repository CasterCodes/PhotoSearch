import React, { useContext, useEffect } from "react";
import PhotosContext from "../context/photos/PhotosContext";
import SinglePhoto from "./photos/SinglePhoto";
const Searched = ({ match }) => {
  const photosContext = useContext(PhotosContext);
  const { photos, loading, searchPhotos } = photosContext;
  useEffect(() => {
    searchPhotos(match.params.search_word);
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <div className='search-header'>
        <h2> You searched for {match.params.search_word}</h2>
        <p>{photos !== null && photos.total} images found</p>
      </div>
      <div className='after-banner'>
        {!loading &&
          photos !== null &&
          photos.hits.map((photo) => (
            <SinglePhoto photo={photo} key={photo.id} />
          ))}
      </div>
    </div>
  );
};

export default Searched;
