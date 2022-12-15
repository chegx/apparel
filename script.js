const inpObj = document.getElementById("email");

document.getElementById("btn").onclick = function() {

  if (!inpObj.checkValidity()) {
    document.body.classList.add("try");

    setTimeout(() => {
      document.body.classList.remove("try");
    }, 2000);

  } else if (inpObj.checkValidity()) {
    document.body.classList.add("thank");
  }

  document.getElementById('your-email').innerText = inpObj.value;

};

document.getElementById("accept-btn").onclick = function() {
  document.body.classList.remove("thank");
};
