$(document).ready(function () {
  var obj = [];
  $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product", function (data) {

    for (var i = 0; i < data.length; i++) {
      obj.push(data[i]);
    }

    for (var j = 0; j < obj.length; j++) {
      var Accessory = obj[j].isAccessory;
      if (Accessory) {
        $('#accessorys').append('<div id = "accessory'+[j]+'"></div>');
        $('#accessorys').css({"display":"flex","justify-content" : "center","pading": "0 4%;"});
        $('#accessory'+[j]+'').css("width", "18%");
        $('#accessory'+[j]+'').append('<a href=""></a>');
        $('#accessory'+[j]+'').append('<div id = "img'+[j]+'"></div>');
        $('#accessory'+[j]+'').css({"width": "18%", " margin-left": "0.5%", "margin-right": "0.5%", "margin-bottom": "16px", "box-sizing": "border-box","box-shadow": "0 2px 5px #ccc","border-radius": "5px"});
        $('#img'+[j]+'').append('<img src=' + obj[j].preview + '></img>');
        $('#img'+[j]+'').css("width", "100%");
        $('img').css("width", "100%");
        $('#accessory'+[j]+'').append('<div id = "details'+[j]+'"></div>');
        $('#details'+[j]+'').append('<h3>' + obj[j].name + '</h3>');
        $('#details'+[j]+'').append('<h4>' + obj[j].brand + '</h4>');
        $('#details'+[j]+'').append('<h5>' + obj[j].price + '</h5>');
      }
      else {
        $('#clothings').append('<div id = "clothing'+[j]+'"></div>');
        $('#clothings').css({"display":"flex","justify-content" : "center","pading": "0 4%;"});
        $('#clothing'+[j]+'').append('<div id = "img'+[j]+'"></div>');
        $('#clothing'+[j]+'').css({"width": "18%", " margin-left": "0.5%", "margin-right": "0.5%", "margin-bottom": "16px", "box-sizing": "border-box","box-shadow": "0 2px 5px #ccc","border-radius": "5px"});
        $('#img'+[j]+'').append('<img src=' + obj[j].preview + '></img>');
        $('#img'+[j]+'').css("width", "100%");
        $('img').css("width", "100%");
        $('#clothing'+[j]+'').append('<div id = "details'+[j]+'"></div>');
        $('#details'+[j]+'').append('<h3>' + obj[j].name + '</h3>');
        $('#details'+[j]+'').append('<h4>' + obj[j].brand + '</h4>');
        $('#details'+[j]+'').append('<h5>' + obj[j].price + '</h5>');
        
      }
      $('h3').css({ "display": "block","font-size": "1.17em", "margin-block-start": "1em", "margin-block-end": "1em", "margin-inline-start":" 0px", "margin-inline-end": "0px","font-weight": "bold"});
      $('h5').css({"margin-top": "10px", "text-align": "left", "font-size" : "15px", "letter-spacing" : "2px","color": "#009688"});
      $('body').css({"padding":"65px", "font-family":"Montserrat"});
      }

$('#clothings div').on('click', function(){
  URL("/ProductPage.html")
})


    }
)
  })



