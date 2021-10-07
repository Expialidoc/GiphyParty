console.log("Let's get this party started!");
//First create account and get the key in dashboard!
//key = "nM36br5iO0hoF1RVcagPPCVZT9zpyiNE";
const gifs = document.querySelector('.getGif');

function getGif(response){
  let newGif = document.createElement('img'); newGif.style.width = '33%';newGif.style.height = 'auto';

    gifs.append(newGif);
      if(response.data.length){
        let randInd = Math.floor(Math.random()*response.data.length);
        newGif.src = response.data[randInd].images.original.url;
      }
}

const form = document.querySelector('#form');
form.addEventListener("submit", async function (e) {
    e.preventDefault();
    let input = document.querySelector('#search'); 
    let descrip = input.value;

  input.value = '';
  const res = await axios.get('http://api.giphy.com/v1/gifs/search', {params:
  {q: descrip, api_key: 'nM36br5iO0hoF1RVcagPPCVZT9zpyiNE'}});
    getGif(res.data);
})

const btn = document.querySelector('#remove');
    btn.addEventListener("click", function(){
      while (gifs.firstChild) {
        gifs.removeChild(gifs.firstChild);
    }
})