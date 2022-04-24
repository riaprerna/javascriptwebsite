var anchor;
function callApi() {
    var http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status == 200) {
                var response = JSON.parse(this.responseText);

                var one = document.getElementsByClassName("card");

                for (var i = 0; i < response.length; i++) {
                    var thirddiv = document.createElement("div");
                    anchor = document.createElement("a");
                    anchor.href = "/ProductPage0.html"
                    anchor.className = "img";
                    thirddiv.className = "details";
                    var productimage = document.createElement("img");
                    productimage.className = "product";
                    productimage.src = response[i].preview;
                    var title = document.createElement("h3");
                    var desc = document.createElement("h4");
                    var price = document.createElement("h5");
                    title.innerText = response[i].name;
                    desc.innerText = response[i].brand;
                    price.innerText = response[i].price;
                    anchor.append(productimage);
                    thirddiv.append(title);
                    thirddiv.append(desc);
                    thirddiv.append(price);
                    one[i].append(anchor);
                    one[i].append(thirddiv);

                    // for(var j =0; j<anch.length;j++)
                    // {
                    // anch[j].onclick = function (event) {
                    //     console.log(anchor[j].id);
                    //     sessionStorage.setItem("item", event.target);

                    // }
                }
                var anch = document.getElementsByClassName('img');
                for (var i = 0; i < anch.length; i++) {
                    anch[i].id = response[i].id;

                }

                for (var i = 0; i < anch.length; i++) {

                    //console.log(anch[i].id);
                    anch[i].onclick = function (event) {
                        //console.log(event.path[1].id)
                        localStorage.setItem("item", event.path[1].id);
                       // console.log(sessionStorage.getItem("item"));
                    }

                }
            }

        }
        else console.log("Request failed");

    }
    
    http.open('GET', "https://5d76bf96515d1a0014085cf9.mockapi.io/product", true);
    http.send();
}

callApi();
var count = document.getElementById("cart-count");
const cart = localStorage.getItem('cartitem');
count.innerText = cart;
var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
} 