import axios from "axios";

export default {
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
  getIngs: function () {
    return axios.get(
      "https://www.thecocktaildb.com/api/json/{REACT_APP_COCKTAILS_API_KEY}/filter.php?i="
    );
  },
};
