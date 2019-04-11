import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import servicesReducer from "./servicesReducer";
import pricingReducer from "./pricingReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  services: servicesReducer,
  prices: pricingReducer
});
