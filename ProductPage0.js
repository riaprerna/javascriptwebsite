var itemcount = 0;
var count = document.getElementById("cart-count");
function callApi() {
  var http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status == 200) {
        var response = JSON.parse(this.responseText);

        var one = document.getElementsByClassName("card");
        {
          var section = document.getElementById("section");
          var firstdiv = document.createElement("div");
          var seconddiv = document.createElement("div");
          section.appendChild(firstdiv);
          section.appendChild(seconddiv);
          firstdiv.setAttribute("class", "left-column");
          var imgmain = document.createElement("img");
          imgmain.setAttribute("id", "productImg");
          imgmain.src = response.preview;
          firstdiv.appendChild(imgmain);

          seconddiv.setAttribute("class", "right-column");
          var productdiv = document.createElement("div");
          seconddiv.appendChild(productdiv);
          productdiv.setAttribute("class", "product-description");
          var h1 = document.createElement("h1");
          h1.innerText = response.name;
          var h4 = document.createElement("h4");
          h4.innerText = response.brand;
          productdiv.appendChild(h1);
          productdiv.appendChild(h4);
          var h3 = document.createElement("h3");
          h3.innerText = "Price: Rs ";
          var span = document.createElement("span");
          span.innerText = response.price;
          h3.appendChild(span);
          productdiv.appendChild(h3);

          var description = document.createElement("div");
          description.setAttribute("class", "description");
          var desch3 = document.createElement("h3");
          desch3.innerText = "Description";
          description.appendChild(desch3);
          var p = document.createElement("p");
          p.innerText = response.description;
          description.appendChild(p);
          productdiv.appendChild(description);

          var preview = document.createElement("div");
          preview.setAttribute("class", "product-preview");
          var ppreview = document.createElement("h3");
          ppreview.innerText = "Product Preview";
          preview.appendChild(ppreview);
          var prodimages = document.createElement("div");
          prodimages.setAttribute("class", "previewImg");

          var image1 = document.createElement("img");
          image1.src = response.photos[0];
          image1.setAttribute("class", "active");
          var image2 = document.createElement("img");
          image2.src = response.photos[1];
          var image3 = document.createElement("img");
          image3.src = response.photos[2];
          var image4 = document.createElement("img");
          image4.src = response.photos[3];
          var image5 = document.createElement("img");
          image5.src = response.photos[4];

          prodimages.appendChild(image1);
          prodimages.appendChild(image2);
          prodimages.appendChild(image3);
          prodimages.appendChild(image4);
          prodimages.appendChild(image5);

          preview.appendChild(prodimages);
          productdiv.appendChild(preview);

          image1.onclick = function () {
            image1.setAttribute("class", "active");
            imgmain.src = image1.src;
            image5.removeAttribute("class");
            image2.removeAttribute("class");
            image3.removeAttribute("class");
            image4.removeAttribute("class");
          }

          image2.onclick = function () {
            image2.setAttribute("class", "active");
            imgmain.src = image2.src;
            image1.removeAttribute("class");
            image5.removeAttribute("class");
            image3.removeAttribute("class");
            image4.removeAttribute("class");
          }
          image3.onclick = function () {
            image3.setAttribute("class", "active");
            imgmain.src = image3.src;
            image1.removeAttribute("class");
            image2.removeAttribute("class");
            image5.removeAttribute("class");
            image4.removeAttribute("class");
          }
          image4.onclick = function () {
            image4.setAttribute("class", "active");
            imgmain.src = image4.src;
            image1.removeAttribute("class");
            image2.removeAttribute("class");
            image3.removeAttribute("class");
            image5.removeAttribute("class");
          }
          image5.onclick = function () {
            image5.setAttribute("class", "active");
            imgmain.src = image5.src;

            image1.removeAttribute("class");
            image2.removeAttribute("class");
            image3.removeAttribute("class");
            image4.removeAttribute("class");
          }

          var btn = document.createElement("div");
          btn.setAttribute("class", "btn");
          var button = document.createElement("button");
          button.innerText = "Add to Cart";
          button.setAttribute("id", "add-to-cart");
          btn.appendChild(button)
          seconddiv.appendChild(btn)

        }
      
        var buttoncart = document.getElementById("add-to-cart");
        
        buttoncart.onclick = function () {
         // itemcount = localStorage.getItem('cartitem');
          
          itemcount = itemcount +1;
          localStorage.setItem("cartitem", itemcount);
          count.innerText =  itemcount;
          localStorage.setItem("product", localStorage.getItem('item'));
          var y = localStorage.getItem('product');
          console.log("Hi this product id is " +y);
        }
      }
    }
    else console.log("Request failed");

  }
  const x = localStorage.getItem('item');
 // var x = localStorage.getItem("item");
  http.open('GET', `https://5d76bf96515d1a0014085cf9.mockapi.io/product/${x}`, true);
  http.send();
}


callApi();
var count = document.getElementById("cart-count");
const cart = localStorage.getItem('cartitem');
count.innerText = cart;