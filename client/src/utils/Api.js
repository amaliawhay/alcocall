import axios from "axios";

export default {
  getVodka: function () {
    return axios.get(
      "https://www.thecocktaildb.com/api/json/{REACT_APP_COCKTAILS_API_KEY}/filter.php?i=vodka"
    );
  },
  getWhiskey: function () {
    return axios.get(
      "https://www.thecocktaildb.com/api/json/{REACT_APP_COCKTAILS_API_KEY}/filter.php?i=whiskey"
    );
  },
  getGin: function () {
    return axios.get(
      "https://www.thecocktaildb.com/api/json/{REACT_APP_COCKTAILS_API_KEY}/filter.php?i=gin"
    );
  },
  getRum: function () {
    return axios.get(
      "https://www.thecocktaildb.com/api/json/{REACT_APP_COCKTAILS_API_KEY}/filter.php?i=rum"
    );
  },
  getTequila: function () {
    return axios.get(
      "https://www.thecocktaildb.com/api/json/{REACT_APP_COCKTAILS_API_KEY}/filter.php?i=tequila"
    );
  },
  getNonAlcohol: function () {
    return axios.get(
      "https://www.thecocktaildb.com/api/json/{REACT_APP_COCKTAILS_API_KEY}/filter.php?a=Non_Alcoholic"
    );
  },
  getRandom: function () {
    return axios.get(
      "https://www.thecocktaildb.com/api/json/{REACT_APP_COCKTAILS_API_KEY}/random.php"
    );
  },
  getMultiIng: function () {
    return axios.get(
      "https://www.thecocktaildb.com/api/json/{REACT_APP_COCKTAILS_API_KEY}/filter.php?i=Dry_Vermouth,Gin,Anis"
    );
  },
};
