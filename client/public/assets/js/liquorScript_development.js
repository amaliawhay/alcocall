$(document).ready(function () {
  //This will be for the multiple ingredient list
  // function ingCall() {
  //   $.ajax({
  //     url: "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list",
  //     method: "GET"
  //   }).then(function (response) {
  //     for (var j = 0; j < response.drinks.length; j++) {
  //       console.log(
  //         "Here are the ingredients: " + response.drinks[j].strIngredient1
  //       );
  //       var addIngList = $("<option>");
  //       addIngList.addClass("option");
  //       addIngList.text(response.drinks[j].strIngredient1);
  //       $("#selectIng").append(addIngList);
  //     }
  //   });
  // }
  // ingCall();
  //Can I just pass 2 arguments into this function?
  function cocktailCall(liquor) {
    $.ajax({
      url:
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" +
        liquor,
      method: "GET",
    }).then(function (response) {
      $("#" + liquor + "Input").on("click", function () {
        $("#select").empty();
        for (var i = 0; i < response.drinks.length; i++) {
          var drinkList = $("<option>");
          drinkList.attr(
            "value",
            response.drinks[i].idDrink
          );
          drinkList.addClass("option");
          drinkList.text(response.drinks[i].strDrink);
          // console.log(response.drinks[i].strDrink);
          // drinkList.attr("data-drinkId", response.drinks[i].idDrink);
          $("#select").append(drinkList);
        }
      });
    });
  }
  cocktailCall("vodka");
  cocktailCall("whiskey");
  cocktailCall("gin");
  cocktailCall("rum");
  cocktailCall("tequila");
  // //-----------------------------------------------------------------------------------------
  $.ajax({
    url:
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic",
    method: "GET",
  }).then(function (response) {
    $("#Non_AlcoholicInput").on("click", function () {
      $("#select").empty();
      for (var i = 0; i < response.drinks.length; i++) {
        var drinkList = $("<option>");
        drinkList.attr("value", response.drinks[i].idDrink);
        drinkList.addClass("option");
        drinkList.text(response.drinks[i].strDrink);
        // drinkList.attr("data-drinkId", response.drinks[i].idDrink);
        $("#select").append(drinkList);
      }
    });
  });
  //-----------------------------------------------------------------------------------------
  $("#select").on("change", function () {
    // alert("hit");
    $("#alcoholDisplay").empty();
    drinkNum = $(this).val();
    console.log(drinkNum);

    $.ajax({
      url:
        "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" +
        drinkNum,
      method: "GET",
    }).then(function (response) {
      console.log(response);
      //-----------------------------------------------------------------------------------------------------

      console.log(response);
      //Gets drink name
      var drinkName = $("<h2>");
      drinkName.attr("id", "drinkName");
      drinkName.text(response.drinks[0].strDrink);
      $("#alcoholDisplay").prepend(drinkName);

      //Gets drink image
      var drinkImg = $("<img>");
      drinkImg.attr(
        "src",
        response.drinks[0].strDrinkThumb + "/preview"
      );
      $("#drinkName").after(drinkImg);
      console.log(response.drinks[0].strDrinkThumb);
      //------------------------------------------------------------------------------------------------------
      //Gets ingredients list
      //Ingredient 1
      var ing1 = $("<ul>");
      if (response.drinks[0].strMeasure1 === null) {
        ing1.text(response.drinks[0].strIngredient1);
        $("#alcoholDisplay").append(ing1);
      } else {
        ing1.text(
          response.drinks[0].strMeasure1 +
            " " +
            response.drinks[0].strIngredient1
        );
        $("#alcoholDisplay").append(ing1);
      }
      //------------------------------------------------------------------------------------------------------
      //Ingredient 2
      var ing2 = $("<ul>");
      if (
        response.drinks[0].strMeasure2 === null &&
        response.drinks[0].strIngredient2 === null
      ) {
      } else if (response.drinks[0].strMeasure2 === null) {
        ing2.text(response.drinks[0].strIngredient2);
        $("#alcoholDisplay").append(ing2);
      } else {
        ing2.text(
          response.drinks[0].strMeasure2 +
            " " +
            response.drinks[0].strIngredient2
        );
        $("#alcoholDisplay").append(ing2);
      }
      //------------------------------------------------------------------------------------------------------
      //Ingredient 3
      var ing3 = $("<ul>");
      if (
        response.drinks[0].strMeasure3 === null &&
        response.drinks[0].strIngredient3 === null
      ) {
      } else if (response.drinks[0].strMeasure3 === null) {
        ing3.text(response.drinks[0].strIngredient3);
        $("#alcoholDisplay").append(ing3);
      } else {
        ing3.text(
          response.drinks[0].strMeasure3 +
            " " +
            response.drinks[0].strIngredient3
        );
        $("#alcoholDisplay").append(ing3);
      }
      //------------------------------------------------------------------------------------------------------
      //Ingredient 4
      var ing4 = $("<ul>");
      if (
        response.drinks[0].strMeasure4 === null &&
        response.drinks[0].strIngredient4 === null
      ) {
      } else if (response.drinks[0].strMeasure4 === null) {
        ing4.text(response.drinks[0].strIngredient4);
        $("#alcoholDisplay").append(ing4);
      } else {
        ing4.text(
          response.drinks[0].strMeasure4 +
            " " +
            response.drinks[0].strIngredient4
        );
        $("#alcoholDisplay").append(ing4);
      }
      //------------------------------------------------------------------------------------------------------
      //Ingredient 5
      var ing5 = $("<ul>");
      if (
        response.drinks[0].strMeasure5 === null &&
        response.drinks[0].strIngredient5 === null
      ) {
      } else if (response.drinks[0].strMeasure5 === null) {
        ing5.text(response.drinks[0].strIngredient5);
        $("#alcoholDisplay").append(ing5);
      } else {
        ing5.text(
          response.drinks[0].strMeasure5 +
            " " +
            response.drinks[0].strIngredient5
        );
        $("#alcoholDisplay").append(ing5);
      }
      //------------------------------------------------------------------------------------------------------
      //Ingredient 6
      var ing6 = $("<ul>");
      if (
        response.drinks[0].strMeasure6 === null &&
        response.drinks[0].strIngredient6 === null
      ) {
      } else if (response.drinks[0].strMeasure6 === null) {
        ing6.text(response.drinks[0].strIngredient6);
        $("#alcoholDisplay").append(ing6);
      } else {
        ing6.text(
          response.drinks[0].strMeasure6 +
            " " +
            response.drinks[0].strIngredient6
        );
        $("#alcoholDisplay").append(ing6);
      }
      //------------------------------------------------------------------------------------------------------
      //Ingredient 7
      var ing7 = $("<ul>");
      if (
        response.drinks[0].strMeasure7 === null &&
        response.drinks[0].strIngredient7 === null
      ) {
      } else if (response.drinks[0].strMeasure7 === null) {
        ing7.text(response.drinks[0].strIngredient7);
        $("#alcoholDisplay").append(ing7);
      } else {
        ing7.text(
          response.drinks[0].strMeasure7 +
            " " +
            response.drinks[0].strIngredient7
        );
        $("#alcoholDisplay").append(ing7);
      }
      //------------------------------------------------------------------------------------------------------
      //Ingredient 8
      var ing8 = $("<ul>");
      if (
        response.drinks[0].strMeasure8 === null &&
        response.drinks[0].strIngredient8 === null
      ) {
      } else if (response.drinks[0].strMeasure8 === null) {
        ing8.text(response.drinks[0].strIngredient8);
        $("#alcoholDisplay").append(ing8);
      } else {
        ing8.text(
          response.drinks[0].strMeasure8 +
            " " +
            response.drinks[0].strIngredient8
        );
        $("#alcoholDisplay").append(ing8);
      }
      //------------------------------------------------------------------------------------------------------
      //Ingredient 9
      var ing9 = $("<ul>");
      if (
        response.drinks[0].strMeasure9 === null &&
        response.drinks[0].strIngredient9 === null
      ) {
      } else if (response.drinks[0].strMeasure9 === null) {
        ing9.text(response.drinks[0].strIngredient9);
        $("#alcoholDisplay").append(ing9);
      } else {
        ing9.text(
          response.drinks[0].strMeasure9 +
            " " +
            response.drinks[0].strIngredient9
        );
        $("#alcoholDisplay").append(ing9);
      }
      //------------------------------------------------------------------------------------------------------
      //Ingredient 10
      var ing10 = $("<ul>");
      if (
        response.drinks[0].strMeasure10 === null &&
        response.drinks[0].strIngredient10 === null
      ) {
      } else if (response.drinks[0].strMeasure10 === null) {
        ing10.text(response.drinks[0].strIngredient10);
        $("#alcoholDisplay").append(ing10);
      } else {
        ing10.text(
          response.drinks[0].strMeasure10 +
            " " +
            response.drinks[0].strIngredient10
        );
        $("#alcoholDisplay").append(ing10);
      }
      //------------------------------------------------------------------------------------------------------
      //Ingredient 11
      var ing11 = $("<ul>");
      if (
        response.drinks[0].strMeasure11 === null &&
        response.drinks[0].strIngredient11 === null
      ) {
      } else if (response.drinks[0].strMeasure11 === null) {
        ing11.text(response.drinks[0].strIngredient11);
        $("#alcoholDisplay").append(ing11);
      } else {
        ing11.text(
          response.drinks[0].strMeasure11 +
            " " +
            response.drinks[0].strIngredient11
        );
        $("#alcoholDisplay").append(ing11);
      }
      //------------------------------------------------------------------------------------------------------
      //Ingredient 12
      var ing12 = $("<ul>");
      if (
        response.drinks[0].strMeasure12 === null &&
        response.drinks[0].strIngredient12 === null
      ) {
      } else if (response.drinks[0].strMeasure12 === null) {
        ing12.text(response.drinks[0].strIngredient12);
        $("#alcoholDisplay").append(ing12);
      } else {
        ing12.text(
          response.drinks[0].strMeasure12 +
            " " +
            response.drinks[0].strIngredient12
        );
        $("#alcoholDisplay").append(ing12);
      }
      //------------------------------------------------------------------------------------------------------
      //Ingredient 13
      var ing13 = $("<ul>");
      if (
        response.drinks[0].strMeasure13 === null &&
        response.drinks[0].strIngredient13 === null
      ) {
      } else if (response.drinks[0].strMeasure13 === null) {
        ing13.text(response.drinks[0].strIngredient13);
        $("#alcoholDisplay").append(ing13);
      } else {
        ing13.text(
          response.drinks[0].strMeasure13 +
            " " +
            response.drinks[0].strIngredient13
        );
        $("#alcoholDisplay").append(ing13);
      }
      //------------------------------------------------------------------------------------------------------
      //Ingredient 14
      var ing14 = $("<ul>");
      if (
        response.drinks[0].strMeasure14 === null &&
        response.drinks[0].strIngredient14 === null
      ) {
      } else if (response.drinks[0].strMeasure14 === null) {
        ing14.text(response.drinks[0].strIngredient14);
        $("#alcoholDisplay").append(ing14);
      } else {
        ing14.text(
          response.drinks[0].strMeasure14 +
            " " +
            response.drinks[0].strIngredient14
        );
        $("#alcoholDisplay").append(ing14);
      }
      //------------------------------------------------------------------------------------------------------
      //Ingredient 15
      var ing15 = $("<ul>");
      if (
        response.drinks[0].strMeasure15 === null &&
        response.drinks[0].strIngredient15 === null
      ) {
      } else if (response.drinks[0].strMeasure15 === null) {
        ing15.text(response.drinks[0].strIngredient15);
        $("#alcoholDisplay").append(ing15);
      } else {
        ing15.text(
          response.drinks[0].strMeasure15 +
            " " +
            response.drinks[0].strIngredient15
        );
        $("#alcoholDisplay").append(ing15);
      }
      //------------------------------------------------------------------------------

      //Gets instructions
      var instructions = $("<p>");
      instructions.attr("id", "ins");
      instructions.text(response.drinks[0].strInstructions);
      $("#alcoholDisplay").append(instructions);
      console.log(instructions);
      console.log(response.drinks[0].strInstructions);

      //--------------------------------------------------------------------------------------------
      //Gets serving instructions
      var serve = $("<p>");
      serve.text(
        "Serve in a " +
          response.drinks[0].strGlass +
          ". Cheers!"
      );
      $("#alcoholDisplay").append(serve);
      console.log(serve);
      console.log(response.drinks[0].strGlass);

      //-----------------------------------------------------------------------------------------------------
    });
  });

  //-------------------------------------------------------------------------------
});
