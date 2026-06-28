function toggleMenu(){
  document.getElementById("navLinks").classList.toggle("active");
}

function shopNow(){
  document.getElementById("collections").scrollIntoView({
    behavior:"smooth"
  });

  alert("🔥 Welcome to Foot Flair! Start shopping now.");
}

function goToCollections(){
  document.getElementById("collections").scrollIntoView({
    behavior:"smooth"
  });

  document.getElementById("message").innerHTML =
  "👟 Taking you to our premium shoe collection!";
}

function newCollection(){
  document.getElementById("message").innerHTML =
  "🚀 New Foot Flair collection is launching soon!";
}

function buyShoe(shoeName){
  alert("You selected " + shoeName + " 👟");
}

function aboutMessage(){
  alert("Foot Flair creates stylish, comfortable and bold sneakers.");
}

function sendMessage(event){
  event.preventDefault();

  let name = document.getElementById("name").value;

  alert("Thank you, " + name + "! Your message has been sent.");

  document.querySelector("form").reset();
}