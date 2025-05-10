//JavaScript to Load Product Data
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            const urlParams = new URLSearchParams(window.location.search);
            document.getElementById("productName").innerText = urlParams.get("name");
            document.getElementById("productDescription").innerText = urlParams.get("description");
            document.getElementById("productPrice").innerText = urlParams.get("price");
            document.getElementById("productImage").src = urlParams.get("image");
        });
    </script>

//
document.addEventListener("DOMContentLoaded", function() {
  const urlParams = new URLSearchParams(window.location.search);

  const name = urlParams.get("name");
  const description = urlParams.get("description");
  const price = urlParams.get("price");
  const image = urlParams.get("image");

  document.getElementById("productName").textContent = name;
  document.getElementById("productDescription").textContent = description;
  document.getElementById("productPrice").textContent = price;
  document.getElementById("productImage").src = image;

  // Update Buy Now button link
  const buyNowBtn = document.getElementById("buyNowBtn");
  const encodedImage = encodeURIComponent(image);
  const encodedName = encodeURIComponent(name);
  buyNowBtn.href = `checkout.html?name=${encodedName}&price=${price}&image=${encodedImage}`;
});

// Highlight the current page's nav link
const navLinks = document.querySelectorAll('.nav-link');
const currentUrl = window.location.href;
navLinks.forEach(link => {
  if (link.href === currentUrl) {
    link.classList.add('active');
  }
});