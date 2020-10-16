import {
  SET_CURRENT_USER,
  USER_LOADING,
} from "../actions/types";

const isEmpty = require("is-empty");

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
};
