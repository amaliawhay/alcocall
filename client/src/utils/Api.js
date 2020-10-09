import axios from "axios";

export default {
  getNonAlcohol: function () {
    return axios.get(
      `https://www.thecocktaildb.com/api/json/${process.env.REACT_APP_COCKTAILS_API_KEY}/filter.php?a=Non_Alcoholic`
    );
  },
  getRandom: function () {
    return axios.get(
      `https://www.thecocktaildb.com/api/json/${process.env.REACT_APP_COCKTAILS_API_KEY}/random.php`
    );
  },
  getIngs: function (ing) {
    return axios.get(
      `https://www.thecocktaildb.com/api/json/${process.env.REACT_APP_COCKTAILS_API_KEY}/filter.php?i=${ing}`
    );
  },
  getId: function (id) {
    return axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id
    );
  }
};
