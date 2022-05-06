import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const signin = (formData, history) => async (dispatch) => {
  try {
    //log in the user

    history.push("/");
  } catch (err) {
    console.log(err);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    //sign up the user

    history.push("/");
  } catch (err) {
    console.log(err);
  }
};