function GetReq(){
  let data;
  document.getElementById('text').innerHTML = "Done"
  fetch('https://pokeapi.co/api/v2/pokemon')
  .then(response => { return response.json()})
  .then(json => {data = json})
  .then(() => console.log(data))
  // .then(() => console.log(JSON.stringify(data)))
}
// function GetReq(){
//     fetch('https://crossorigin.me/C:/Users/Asus/Desktop/WebDev/data.json')
//     .then(response => { return response.json()})
//     .then(json => {data = json})
//     .then(() => console.log(data))
// }

// const fetchData = () =>{
//   const fetchedData = fetch('https://pokeapi.co/api/v2/pokemon')
//   .then(response => response.json())
//   .then(json => {
//     return json;
//     console.log('data', data);
//   })
//   return fetchedData;
// }
// var data = fetchData();
// console.log('fetched', data.then(lol => lol));
// document.getElementById('text').innerHTML = data;
// var gdata = data.then(result => { return result})
// console.log("good data",gdata);
