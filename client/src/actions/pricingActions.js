import axios from "axios";
import {
  GET_PRICING
} from "./types";

// Get All Pricing.
export const getPricing = () => dispatch => {
  // dispatch(setProfileLoading());
  console.log('in pricingActions');
  axios
    .get("/api/pricing/laserhair")
    .then(res =>
      dispatch({
        type: GET_PRICING,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PRICING,
        payload: {}
      })
    );
};


