const inpObj = document.getElementById("email");

document.getElementById("btn").onclick = function () {

  if (!inpObj.checkValidity()) {
    document.getElementById("btn").disabled = true;
    document.body.classList.add("try");

    setTimeout(() => {
      document.getElementById("btn").disabled = false;
      document.body.classList.remove("try");
    }, 2000);

  } else if (inpObj.checkValidity()) {
    document.getElementById("btn").disabled = false;
  }
};

