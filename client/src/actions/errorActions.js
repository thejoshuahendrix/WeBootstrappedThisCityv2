import axios from "axios";
import {
  GET_ERRORS,
    CLEAR_ERRORS
 
} from "../actions/types";

export const returnErrors = (message, status, id = null) =>{ 
    return {
        type: GET_ERRORS,
        payload: {message,status,id}
    }
}

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}