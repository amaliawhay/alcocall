$(document).ready(function () {
  $("#button").on("click", function (event) {
    console.log("hit");
    $("#brewery").empty();
    event.preventDefault();

    var cityName = $("input").val();
    $.ajax({
      url:
        "https://api.openbrewerydb.org/breweries?by_city=" +
        cityName,
      method: "GET",
    }).then(function (response) {
      console.log(response);
      var breweriesList = $("<ul>");
      $("#brewery").append(breweriesList);

      $.each(response, function (index, brewery) {
        var breweries = $("<li>");
        breweries.text(brewery.name);
        $(breweriesList).append(breweries);
      });
    });
  });
});
