const form = document.getElementById("form");
const customer_id = document.getElementById("customer_id");
const name = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");

//add event

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
});

const sendData = (srate, count) => {
  if (srate === count) {
    swal("Welcome! Your are logged in");
  }
};

const successMsg = () => {
  let formcon = document.getElementsByClassName("form-control");
  var count = formcon.length - 1;
  for (var i = 0; i < formcon.length; i++) {
    if (formcon[i].className === "form-control success") {
      var srate = 0 + i;
      sendData(srate, count);
    } else {
      return false;
    }
  }
};

var rgx = /^[A-Z]$/;
var rgxname = /^([A-Z])([a-z]{2,15})$/;
//regular expression
var regxemail = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\.-]+).([a-z]{2,20})$/;
//mobile regular expression
var regxmobile = /^[6-9][0-9]{9}$/;
//define validate funtion
const validate = () => {
  const customer_idval = customer_id.value.trim();
  const nameval = name.value.trim();
  const phoneval = phone.value.trim();
  const emailval = email.value.trim();

  if (nameval === "") {
    setErrormsg(name, "name is required");
  } else if (rgxname.test(nameval)) {
    if (rgx.test(nameval[0])) {
      setSuccessMsg(name);
    } else {
      setErrormsg(name, "1st letter must be capital");
    }
  } else {
    setErrormsg(name, "not valid name");
  }

  //validate customer_id
  if (customer_idval === "") {
    setErrormsg(customer_id, "customer id is required");
  } else if (customer_idval.length != 5) {
    setErrormsg(customer_id, "id should be of length 5");
  } else {
    setSuccessMsg(customer_id);
  }

  if (emailval === "") {
    setErrormsg(email, "email is required");
  } else if (!regxemail.test(emailval)) {
    setErrormsg(email, "not valid email");
  } else {
    setSuccessMsg(email);
  }

  if (phoneval === "") {
    setErrormsg(phone, "phone number is required");
  } else if (!regxmobile.test(phoneval)) {
    setErrormsg(phone, "not valid phone number");
  } else {
    setSuccessMsg(phone);
  }
  successMsg();
};

function setErrormsg(input, errormsgs) {
  const formcontrol = input.parentElement;
  const small = formcontrol.querySelector("small");
  formcontrol.className = "form-control error";
  small.innerText = errormsgs;
}

function setSuccessMsg(input) {
  const formcontrol = input.parentElement;
  formcontrol.className = "form-control success";
}
