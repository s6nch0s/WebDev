var reg = document.getElementById('reg');
if(reg) reg.addEventListener('click', get);
function get() {
  var login = document.getElementById('login').value;
  var password = document.getElementById('password').value;
  var first = document.getElementById('first').value;
  var last = document.getElementById('last').value;
  var email = document.getElementById('email').value;
  document.getElementById('text').innerHTML = "Your registration is successfully finished, " + login + ".";
  const data = {"Login": login, "Password": password, "Name": first, "Surname": last, "email": email};
  console.log("Success : ", data);
}
const data = {"Login": login, "Password": password, "Name": first, "Surname": last, "email": email};
function post() {
  fetch('http://localhost:5001/api/user/add',{
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success :', data);
  })
  .catch((error) => {
    console.error('Error', error);
  });
}
