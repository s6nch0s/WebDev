function GetReq(){
  document.getElementById('text').innerHTML = "Gay"
  fetch('https://localhost:5001/api/task')
  .then(response => response.json())
  .then(json => console.log(json))
}
