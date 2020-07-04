import { GET_PHOTOS } from "../types";
export default (state, action) => {
  switch (action.type) {
    case GET_PHOTOS:
      return {
        ...state,
        photos: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
