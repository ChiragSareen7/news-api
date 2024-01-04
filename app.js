// Progression 1: create a function and fetch the api using axios
function date(){
const dataa=document.getElementById("data");

axios
.get('https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=afc5e6f9aeec2c5288c799355610b0be')

.then((res)=>{
  console.log(res);
  const data=res.data.articles;

  data.forEach((article)=>{
    let getarticle=document.createElement('div');
    getarticle.setAttribute('id','article');
    getarticle.setAttribute('class','article');

    const title=document.createElement('h2');
    const content=document.createElement('p');
    const image=document.createElement('img');

    title.innerText=article.title;
    content.innerText=article.content;
    image.setAttribute('src',article.image)
    
    getarticle.append(title,image,content);

    dataa.append(getarticle);

  })
}).catch((error)=>{
  console.log(error)
})
}
date();