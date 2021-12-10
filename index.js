let cim = document.querySelector(".imageflex");
let cft=document.querySelector(".facts")
console.log(cim,cft);

function getimage()
{
   fetch("https://cataas.com/cat?json=true")
     .then((res) => res.json())
     .then((data) => {
       console.log(data);
       cim.innerHTML = `<img class="image-cat" src="https://cataas.com/${data.url}">`;
     });
}

function getfact()
{
    fetch("https://cat-fact.herokuapp.com/facts/random?amount=3")
      .then((res) => res.json())
    .then((data) => {
      data.forEach((fact) => {
        cft.innerHTML = `
        <p class="factofcat">${fact.text}</p>`;
      })});
};

getimage();
getfact();