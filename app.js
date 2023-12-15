// Progression 1: create a function and fetch the api using axios
function date(){


axios
.get('https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=afc5e6f9aeec2c5288c799355610b0be')

.then((res)=>{
  console.log(res);
  const data=res.data.articles;
  // data.forEach((article)=>{
  //   let getarticle=document
  // })
}).catch((error)=>{
  console.log(error)
})
}
date();