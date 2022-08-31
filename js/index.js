document.querySelector(".name input").onblur = function () {
  let userName = document.querySelector(".name input").value;
  let userValid1 = false;
  if (userName === "") {
    ////////ta3deel
    document.querySelector(".TheFieldIsRequired").classList.add("active")
    console.log(document.querySelector(".TheFieldIsRequired").classList.add("active"))
  } else {
    document.querySelector(".TheFieldIsRequired").classList.remove("active")
    document.querySelector(".TheFieldIsRequired").classList.add("notActive")
    document.querySelector(".userNameOnCard").innerHTML = userName

    // eb3at llcard
  }
};
document.querySelector(".number input").onblur = function () {  
  let userNumber = document.querySelector(".number input").value;
  let userValid2 = false;
  let userNumberCheck = /\d{4}\s\d{4}\s\d{4}\s\d{4}/.test(userNumber);
  if (!userNumberCheck) {
    document.querySelector(".wrongPattern").classList.add("validPattern");
  } else {
    // eb3at llcard
    document.querySelector(".wrongPattern").classList.remove("validPattern");
    document.querySelector(".wrongPattern").classList.add("notValidPattern");
    document.querySelector(".textOnCard h2").innerHTML = userNumber

  }
};
