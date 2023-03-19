document.getElementById("login").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("uname").value;
  var password = document.getElementById("pass").value;

  if (username === "admin" && password === "1234") {
    alert("Login Successful!");
  } else {
    alert("Incorrect username or password. Please try again.");
  }
});

const citySelect = document.getElementById("city");
const storeSection = document.getElementById("store-section");
const storeInput = document.getElementById("store");
const storeSelect = document.getElementById("store-list");
const orderSection = document.getElementById("order-section");

citySelect.addEventListener("change", function() {
  if (citySelect.value !== "") {
    storeSection.style.display = "block";
  } else {
    storeSection.style.display = "none";
    orderSection.style.display = "none";
  }
});

storeInput.addEventListener("input", function() {
  let filter = storeInput.value.toUpperCase();
  let options = storeSelect.options;

  for (let i = 0; i < options.length; i++) {
    let option = options[i];
    let txtValue = option.textContent || option.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      option.style.display = "";
    } else {
      option.style.display = "none";
    }
  }
});

storeSelect.addEventListener("change", function() {
if (storeSelect.value !== "") {
orderSection.style.display = "block";
} else {
orderSection.style.display = "none";
}
});    


