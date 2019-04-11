import {
  GET_PRICING
} from "../actions/types";

const initialState = {
  prices: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    
    case GET_PRICING: {
      return {
        ...state,
        prices: action.payload
      };
    }
    default:
      return state;
  }
}
