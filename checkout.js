

var cartitems = localStorage.getItem('product');
var count = document.getElementById("cart-count");
const cart = localStorage.getItem('cartitem');
count.innerText = cart;
function callApi() {
    var http = new XMLHttpRequest();
    http.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status == 200) {
          var response = JSON.parse(this.responseText);
  
          var main = document.getElementById('main');
          {          
            var leftproductdiv = document.createElement("div");
            var leftproduct1 = document.createElement("div");
            var prodimage = document.createElement("div");
            prodimage.className = "productcard";
            var proddetail = document.createElement("div");     
            proddetail.className = "Description";    
            var img = document.createElement("img");
            img.className = "checkout-product-img";
            img.src = response.preview;
            prodimage.appendChild(img);
            proddetail.class ="detail";
            proddetail.innerText = response.name;
            var price = document.createElement("span");
            var qty = document.createElement("span");
            qty.innerText = "X" + cart;
            price.className = "other"
            qty.className = "other"
            price.innerText = "Amount: Rs " + response.price;
            proddetail.append(qty);
            proddetail.append(price);
            leftproduct1.appendChild(prodimage);
            leftproduct1.appendChild(proddetail);
            leftproduct1.className = "summary";
            main.appendChild(leftproduct1);
            var rightamountdiv = document.createElement("div");
            
            var amountsum = document.createElement("h3");
            var amountdiv = document.createElement("h5");
            var price = response.price;
            var extra = document.createElement("span");
            extra.innerText = "Amount: Rs ";
            amountdiv.appendChild(extra);
            amountdiv.innerText = "Amount: Rs " + parseInt(price)*parseInt(cart);
            console.log(price);
            console.log(cart);
            console.log(amountdiv.innerText);
            amountsum.appendChild(amountdiv);
            rightamountdiv.innerText = "Total Amount";
            rightamountdiv.id = "amount";
            amountsum.className = "amount";
            rightamountdiv.appendChild(amountsum);
            var extra = document.createElement("span");
            var button = document.createElement("button");
            button.innerText = "Place Order";
            rightamountdiv.appendChild(button);
            main.appendChild(rightamountdiv);
          }
          button.onclick = function(){
            window.location = "/OrderConfirmation.html";
          }

        }
      }
      else console.log("Request failed");
  
    }
    const x = localStorage.getItem('product');
    http.open('GET', `https://5d76bf96515d1a0014085cf9.mockapi.io/product/${x}`, true);
    http.send();
  }
  
  callApi();

