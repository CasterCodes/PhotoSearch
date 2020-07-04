import React, { useReducer } from "react";
import PhotoContext from "./PhotosContext";
import PhotoReducer from "./PhotoReducer";
import { GET_PHOTOS } from "../types";
let apikey;
if (process.env.NODE_ENV !== "production") {
  apikey = process.env.REACT_APP_API_KEY;
} else {
  apikey = process.env.API_KEY;
}
const PhotosState = (props) => {
  const initialState = {
    photos: null,
    loading: true,
  };
  const [state, dispatch] = useReducer(PhotoReducer, initialState);

  // get photos
  const getPhotos = async () => {
    const data = await fetch(
      `https://pixabay.com/api/?key=${apikey}&per_page=200`
    );
    const res = await data.json();

    dispatch({ type: GET_PHOTOS, payload: res });
  };

  // search photos
  const searchPhotos = async (search) => {
    const data = await fetch(
      `https://pixabay.com/api/?key=${apikey}&q=${search}&per_page=200`
    );
    const res = await data.json();

    dispatch({ type: GET_PHOTOS, payload: res });
  };

  return (
    <PhotoContext.Provider
      value={{
        photos: state.photos,
        loading: state.loading,
        getPhotos,
        searchPhotos,
      }}
    >
      {props.children}
    </PhotoContext.Provider>
  );
};

export default PhotosState;
