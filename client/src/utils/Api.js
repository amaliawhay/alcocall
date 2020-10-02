import axios from "axios";

export default {
  getVodka: function () {
    return axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=vodka"
    );
  },
  getWhiskey: function () {
    return axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=whiskey"
    );
  },
  getGin: function () {
    return axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=gin"
    );
  },
  getRum: function () {
    return axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=rum"
    );
  },
  getTequila: function () {
    return axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=tequila"
    );
  },
  getNonAlcohol: function () {
    return axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
    );
  },
  getRandom: function () {
    return axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
  }
};
