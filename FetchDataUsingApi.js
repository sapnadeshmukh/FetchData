const axios =require('axios');
axios.get("http://api.themoviedb.org/3/search/movie?&api_key=3583464c166eb3446babdeabbc188153&query=raaz").then(resp =>{

  // console.log(resp.data)
  let a=resp.data["results"]
  // console.log(a)
  var i=1;
  for (i in a){
    console.log(a[i]["original_title"])
  }


});
