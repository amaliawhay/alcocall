//alert("Hi");
$(document).ready(function () {
  //console.log("ready!");
  $.ajax({
    url:
      "https://www.thecocktaildb.com/api/json/v1/1/random.php",
    method: "GET",
  }).then(function (response) {
    console.log(response);
    //start of drink name
    var randomDrinkName = $("<h2>");
    randomDrinkName.attr("id", "drinkName");
    randomDrinkName.text(response.drinks[0].strDrink);
    $("#ingList").prepend(randomDrinkName);
    //end of drink name

    //start of image
    var drinkPic = $("<img>");
    drinkPic.attr(
      "src",
      response.drinks[0].strDrinkThumb + "/preview"
    );
    drinkPic.addClass("center");
    $("#drinkName").after(drinkPic);
    console.log(response.drinks[0].strDrinkThumb);

    //Start of ingredients list
    //Ingredient 1
    var ing1 = $("<ul>");
    if (response.drinks[0].strMeasure1 === null) {
      ing1.text(response.drinks[0].strIngredient1);
      $("#ingList").append(ing1);
    } else {
      ing1.text(
        response.drinks[0].strMeasure1 +
          " " +
          response.drinks[0].strIngredient1
      );
      $("#ingList").append(ing1);
    }
    //--------------------------------------------------------------------
    //Ingredient 2
    var ing2 = $("<ul>");
    if (
      response.drinks[0].strMeasure2 === null &&
      response.drinks[0].strIngredient2 === null
    ) {
    } else if (response.drinks[0].strMeasure2 === null) {
      ing2.text(response.drinks[0].strIngredient2);
      $("#ingList").append(ing2);
    } else {
      ing2.text(
        response.drinks[0].strMeasure2 +
          " " +
          response.drinks[0].strIngredient2
      );
      $("#ingList").append(ing2);
    }
    //--------------------------------------------------------------------
    //Ingredient 3
    var ing3 = $("<ul>");
    if (
      response.drinks[0].strMeasure3 === null &&
      response.drinks[0].strIngredient3 === null
    ) {
    } else if (response.drinks[0].strMeasure3 === null) {
      ing3.text(response.drinks[0].strIngredient3);
      $("#ingList").append(ing3);
    } else {
      ing3.text(
        response.drinks[0].strMeasure3 +
          " " +
          response.drinks[0].strIngredient3
      );
      $("#ingList").append(ing3);
    }
    //--------------------------------------------------------------------
    //Ingredient 4
    var ing4 = $("<ul>");
    if (
      response.drinks[0].strMeasure4 === null &&
      response.drinks[0].strIngredient4 === null
    ) {
    } else if (response.drinks[0].strMeasure4 === null) {
      ing4.text(response.drinks[0].strIngredient4);
      $("#ingList").append(ing4);
    } else {
      ing4.text(
        response.drinks[0].strMeasure4 +
          " " +
          response.drinks[0].strIngredient4
      );
      $("#ingList").append(ing4);
    }
    //--------------------------------------------------------------------
    //Ingredient 5
    var ing5 = $("<ul>");
    if (
      response.drinks[0].strMeasure5 === null &&
      response.drinks[0].strIngredient5 === null
    ) {
    } else if (response.drinks[0].strMeasure5 === null) {
      ing5.text(response.drinks[0].strIngredient5);
      $("#ingList").append(ing5);
    } else {
      ing5.text(
        response.drinks[0].strMeasure5 +
          " " +
          response.drinks[0].strIngredient5
      );
      $("#ingList").append(ing5);
    }
    //--------------------------------------------------------------------
    //Ingredient 6
    var ing6 = $("<ul>");
    if (
      response.drinks[0].strMeasure6 === null &&
      response.drinks[0].strIngredient6 === null
    ) {
    } else if (response.drinks[0].strMeasure6 === null) {
      ing6.text(response.drinks[0].strIngredient6);
      $("#ingList").append(ing6);
    } else {
      ing6.text(
        response.drinks[0].strMeasure6 +
          " " +
          response.drinks[0].strIngredient6
      );
      $("#ingList").append(ing6);
    }
    //--------------------------------------------------------------------
    //Ingredient 7
    var ing7 = $("<ul>");
    if (
      response.drinks[0].strMeasure7 === null &&
      response.drinks[0].strIngredient7 === null
    ) {
    } else if (response.drinks[0].strMeasure7 === null) {
      ing7.text(response.drinks[0].strIngredient7);
      $("#ingList").append(ing7);
    } else {
      ing7.text(
        response.drinks[0].strMeasure7 +
          " " +
          response.drinks[0].strIngredient7
      );
      $("#ingList").append(ing7);
    }
    //--------------------------------------------------------------------
    //Ingredient 8
    var ing8 = $("<ul>");
    if (
      response.drinks[0].strMeasure8 === null &&
      response.drinks[0].strIngredient8 === null
    ) {
    } else if (response.drinks[0].strMeasure8 === null) {
      ing8.text(response.drinks[0].strIngredient8);
      $("#ingList").append(ing8);
    } else {
      ing8.text(
        response.drinks[0].strMeasure8 +
          " " +
          response.drinks[0].strIngredient8
      );
      $("#ingList").append(ing8);
    }
    //--------------------------------------------------------------------
    //Ingredient 9
    var ing9 = $("<ul>");
    if (
      response.drinks[0].strMeasure9 === null &&
      response.drinks[0].strIngredient9 === null
    ) {
    } else if (response.drinks[0].strMeasure9 === null) {
      ing9.text(response.drinks[0].strIngredient9);
      $("#ingList").append(ing9);
    } else {
      ing9.text(
        response.drinks[0].strMeasure9 +
          " " +
          response.drinks[0].strIngredient9
      );
      $("#ingList").append(ing9);
    }
    //--------------------------------------------------------------------
    //Ingredient 10
    var ing10 = $("<ul>");
    if (
      response.drinks[0].strMeasure10 === null &&
      response.drinks[0].strIngredient10 === null
    ) {
    } else if (response.drinks[0].strMeasure10 === null) {
      ing10.text(response.drinks[0].strIngredient10);
      $("#ingList").append(ing10);
    } else {
      ing10.text(
        response.drinks[0].strMeasure10 +
          " " +
          response.drinks[0].strIngredient10
      );
      $("#ingList").append(ing10);
    }
    //--------------------------------------------------------------------
    //Ingredient 11
    var ing11 = $("<ul>");
    if (
      response.drinks[0].strMeasure11 === null &&
      response.drinks[0].strIngredient11 === null
    ) {
    } else if (response.drinks[0].strMeasure11 === null) {
      ing11.text(response.drinks[0].strIngredient11);
      $("#ingList").append(ing11);
    } else {
      ing11.text(
        response.drinks[0].strMeasure11 +
          " " +
          response.drinks[0].strIngredient11
      );
      $("#ingList").append(ing11);
    }
    //--------------------------------------------------------------------
    //Ingredient 12
    var ing12 = $("<ul>");
    if (
      response.drinks[0].strMeasure12 === null &&
      response.drinks[0].strIngredient12 === null
    ) {
    } else if (response.drinks[0].strMeasure12 === null) {
      ing12.text(response.drinks[0].strIngredient12);
      $("#ingList").append(ing12);
    } else {
      ing12.text(
        response.drinks[0].strMeasure12 +
          " " +
          response.drinks[0].strIngredient12
      );
      $("#ingList").append(ing12);
    }
    //--------------------------------------------------------------------
    //Ingredient 13
    var ing13 = $("<ul>");
    if (
      response.drinks[0].strMeasure13 === null &&
      response.drinks[0].strIngredient13 === null
    ) {
    } else if (response.drinks[0].strMeasure13 === null) {
      ing13.text(response.drinks[0].strIngredient13);
      $("#ingList").append(ing13);
    } else {
      ing13.text(
        response.drinks[0].strMeasure13 +
          " " +
          response.drinks[0].strIngredient13
      );
      $("#ingList").append(ing13);
    }
    //--------------------------------------------------------------------
    //Ingredient 14
    var ing14 = $("<ul>");
    if (
      response.drinks[0].strMeasure14 === null &&
      response.drinks[0].strIngredient14 === null
    ) {
    } else if (response.drinks[0].strMeasure14 === null) {
      ing14.text(response.drinks[0].strIngredient14);
      $("#ingList").append(ing14);
    } else {
      ing14.text(
        response.drinks[0].strMeasure14 +
          " " +
          response.drinks[0].strIngredient14
      );
      $("#ingList").append(ing14);
    }
    //--------------------------------------------------------------------
    //Ingredient 15
    var ing15 = $("<ul>");
    if (
      response.drinks[0].strMeasure15 === null &&
      response.drinks[0].strIngredient15 === null
    ) {
    } else if (response.drinks[0].strMeasure15 === null) {
      ing15.text(response.drinks[0].strIngredient15);
      $("#ingList").append(ing15);
    } else {
      ing15.text(
        response.drinks[0].strMeasure15 +
          " " +
          response.drinks[0].strIngredient15
      );
      $("#ingList").append(ing15);
    }
    //end of ingredients list

    //start of instructions

    var instructions = $("<p>");
    instructions.attr("id", "ins");
    instructions.text(response.drinks[0].strInstructions);
    $("#insTitle").after(instructions);
    console.log(instructions);
    console.log(response.drinks[0].strInstructions);
    //end of instructions

    //start of serving instructions
    var serve = $("<p>");
    serve.text(
      "Serve in a " +
        response.drinks[0].strGlass +
        ". Cheers!"
    );
    $("#ins").append(serve);
    console.log(serve);
    console.log(response.drinks[0].strGlass);
    //end of instructions
  });
});
