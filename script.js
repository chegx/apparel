const inpObj = document.getElementById("email");

document.querySelector(".btn").onclick = function() {

  if (!inpObj.checkValidity()) {
    document.body.classList.add("try");

    setTimeout(() => {
      document.body.classList.remove("try");
    }, 2000);

  } else if (inpObj.checkValidity()) {
    document.body.classList.add("thank");
  }

  document.querySelector('.your-email').innerText = inpObj.value;
    
};

document.querySelector(".accept-btn").onclick = function() {
  document.body.classList.remove("thank");
};
