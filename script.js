document.querySelector("input").onclick = function() {
  document.querySelector("body").classList.add("remove");
};

document.querySelector(".btn").onclick = function() {

  var adress = document.querySelector("input").value;
  document.querySelector(".your-email").innerHTML = adress;

  if (adress.includes("@") && adress.includes(".") && adress.length > 5 && !adress.includes(" ")) {
    document.querySelector("body").classList.add("thank");
    document.querySelector(".btn").disabled = true;
    document.querySelector(".btn").classList.add("thank");

  } else {
    document.querySelector("body").classList.add("try");
    setTimeout(() => {
      document.querySelector("body").classList.remove("try")
    }, 20000);
  }

};

document.querySelector(".accept-btn").onclick = function() {
  document.querySelector("body").classList.remove("thank");
  document.querySelector(".btn").disabled = false;
  document.querySelector(".btn").classList.remove("thank");
};
