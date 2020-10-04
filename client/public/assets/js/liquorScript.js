$(document).ready(function () {
  function r(r) {
    $.ajax({
      url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + r,
      method: "GET"
    }).then(function (s) {
      $("#" + r + "Input").on("click", function () {
        $("#select").empty();
        for (var r = 0; r < s.drinks.length; r++) {
          var n = $("<option>");
          n.attr("value", s.drinks[r].idDrink),
            n.addClass("option"),
            n.text(s.drinks[r].strDrink),
            $("#select").append(n);
        }
      });
    });
  }
  r("vodka"),
    r("whiskey"),
    r("gin"),
    r("rum"),
    r("tequila"),
    $.ajax({
      url:
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic",
      method: "GET"
    }).then(function (s) {
      $("#Non_AlcoholicInput").on("click", function () {
        $("#select").empty();
        for (var r = 0; r < s.drinks.length; r++) {
          var n = $("<option>");
          n.attr("value", s.drinks[r].idDrink),
            n.addClass("option"),
            n.text(s.drinks[r].strDrink),
            $("#select").append(n);
        }
      });
    }),
    $("#select").on("change", function () {
      $("#alcoholDisplay").empty(),
        (drinkNum = $(this).val()),
        console.log(drinkNum),
        $.ajax({
          url:
            "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" +
            drinkNum,
          method: "GET"
        }).then(function (r) {
          console.log(r), console.log(r);
          var n = $("<h2>");
          n.attr("id", "drinkName"),
            n.text(r.drinks[0].strDrink),
            $("#alcoholDisplay").prepend(n);
          var s = $("<img>");
          s.attr("src", r.drinks[0].strDrinkThumb + "/preview"),
            $("#drinkName").after(s),
            console.log(r.drinks[0].strDrinkThumb);
          var e = $("<ul>");
          null === r.drinks[0].strMeasure1
            ? e.text(r.drinks[0].strIngredient1)
            : e.text(
                r.drinks[0].strMeasure1 + " " + r.drinks[0].strIngredient1
              ),
            $("#alcoholDisplay").append(e);
          var t = $("<ul>");
          (null === r.drinks[0].strMeasure2 &&
            null === r.drinks[0].strIngredient2) ||
            (null === r.drinks[0].strMeasure2
              ? t.text(r.drinks[0].strIngredient2)
              : t.text(
                  r.drinks[0].strMeasure2 + " " + r.drinks[0].strIngredient2
                ),
            $("#alcoholDisplay").append(t));
          var i = $("<ul>");
          (null === r.drinks[0].strMeasure3 &&
            null === r.drinks[0].strIngredient3) ||
            (null === r.drinks[0].strMeasure3
              ? i.text(r.drinks[0].strIngredient3)
              : i.text(
                  r.drinks[0].strMeasure3 + " " + r.drinks[0].strIngredient3
                ),
            $("#alcoholDisplay").append(i));
          var l = $("<ul>");
          (null === r.drinks[0].strMeasure4 &&
            null === r.drinks[0].strIngredient4) ||
            (null === r.drinks[0].strMeasure4
              ? l.text(r.drinks[0].strIngredient4)
              : l.text(
                  r.drinks[0].strMeasure4 + " " + r.drinks[0].strIngredient4
                ),
            $("#alcoholDisplay").append(l));
          var d = $("<ul>");
          (null === r.drinks[0].strMeasure5 &&
            null === r.drinks[0].strIngredient5) ||
            (null === r.drinks[0].strMeasure5
              ? d.text(r.drinks[0].strIngredient5)
              : d.text(
                  r.drinks[0].strMeasure5 + " " + r.drinks[0].strIngredient5
                ),
            $("#alcoholDisplay").append(d));
          var a = $("<ul>");
          (null === r.drinks[0].strMeasure6 &&
            null === r.drinks[0].strIngredient6) ||
            (null === r.drinks[0].strMeasure6
              ? a.text(r.drinks[0].strIngredient6)
              : a.text(
                  r.drinks[0].strMeasure6 + " " + r.drinks[0].strIngredient6
                ),
            $("#alcoholDisplay").append(a));
          var u = $("<ul>");
          (null === r.drinks[0].strMeasure7 &&
            null === r.drinks[0].strIngredient7) ||
            (null === r.drinks[0].strMeasure7
              ? u.text(r.drinks[0].strIngredient7)
              : u.text(
                  r.drinks[0].strMeasure7 + " " + r.drinks[0].strIngredient7
                ),
            $("#alcoholDisplay").append(u));
          var k = $("<ul>");
          (null === r.drinks[0].strMeasure8 &&
            null === r.drinks[0].strIngredient8) ||
            (null === r.drinks[0].strMeasure8
              ? k.text(r.drinks[0].strIngredient8)
              : k.text(
                  r.drinks[0].strMeasure8 + " " + r.drinks[0].strIngredient8
                ),
            $("#alcoholDisplay").append(k));
          var o = $("<ul>");
          (null === r.drinks[0].strMeasure9 &&
            null === r.drinks[0].strIngredient9) ||
            (null === r.drinks[0].strMeasure9
              ? o.text(r.drinks[0].strIngredient9)
              : o.text(
                  r.drinks[0].strMeasure9 + " " + r.drinks[0].strIngredient9
                ),
            $("#alcoholDisplay").append(o));
          var p = $("<ul>");
          (null === r.drinks[0].strMeasure10 &&
            null === r.drinks[0].strIngredient10) ||
            (null === r.drinks[0].strMeasure10
              ? p.text(r.drinks[0].strIngredient10)
              : p.text(
                  r.drinks[0].strMeasure10 + " " + r.drinks[0].strIngredient10
                ),
            $("#alcoholDisplay").append(p));
          var c = $("<ul>");
          (null === r.drinks[0].strMeasure11 &&
            null === r.drinks[0].strIngredient11) ||
            (null === r.drinks[0].strMeasure11
              ? c.text(r.drinks[0].strIngredient11)
              : c.text(
                  r.drinks[0].strMeasure11 + " " + r.drinks[0].strIngredient11
                ),
            $("#alcoholDisplay").append(c));
          var g = $("<ul>");
          (null === r.drinks[0].strMeasure12 &&
            null === r.drinks[0].strIngredient12) ||
            (null === r.drinks[0].strMeasure12
              ? g.text(r.drinks[0].strIngredient12)
              : g.text(
                  r.drinks[0].strMeasure12 + " " + r.drinks[0].strIngredient12
                ),
            $("#alcoholDisplay").append(g));
          var I = $("<ul>");
          (null === r.drinks[0].strMeasure13 &&
            null === r.drinks[0].strIngredient13) ||
            (null === r.drinks[0].strMeasure13
              ? I.text(r.drinks[0].strIngredient13)
              : I.text(
                  r.drinks[0].strMeasure13 + " " + r.drinks[0].strIngredient13
                ),
            $("#alcoholDisplay").append(I));
          var h = $("<ul>");
          (null === r.drinks[0].strMeasure14 &&
            null === r.drinks[0].strIngredient14) ||
            (null === r.drinks[0].strMeasure14
              ? h.text(r.drinks[0].strIngredient14)
              : h.text(
                  r.drinks[0].strMeasure14 + " " + r.drinks[0].strIngredient14
                ),
            $("#alcoholDisplay").append(h));
          var M = $("<ul>");
          (null === r.drinks[0].strMeasure15 &&
            null === r.drinks[0].strIngredient15) ||
            (null === r.drinks[0].strMeasure15
              ? M.text(r.drinks[0].strIngredient15)
              : M.text(
                  r.drinks[0].strMeasure15 + " " + r.drinks[0].strIngredient15
                ),
            $("#alcoholDisplay").append(M));
          var x = $("<p>");
          x.attr("id", "ins"),
            x.text(r.drinks[0].strInstructions),
            $("#alcoholDisplay").append(x),
            console.log(x),
            console.log(r.drinks[0].strInstructions);
          var v = $("<p>");
          v.text("Serve in a " + r.drinks[0].strGlass + ". Cheers!"),
            $("#alcoholDisplay").append(v),
            console.log(v),
            console.log(r.drinks[0].strGlass);
        });
    });
});
