import axios from "axios";
import {
  GET_SERVICES
} from "./types";

// Get All Services.
export const getServices = () => dispatch => {
  // dispatch(setProfileLoading());
  axios
    .get("/api/services/all")
    .then(res =>
      dispatch({
        type: GET_SERVICES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_SERVICES,
        payload: {}
      })
    );
};


