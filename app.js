console.log("Let's get this party started!");
//First create account and get the key in dashboard!
let key = "nM36br5iO0hoF1RVcagPPCVZT9zpyiNE";
async function getGif(descrip,key){
    const res = await axios.get('http://api.giphy.com/v1/gifs/search', {params:{q: descrip,api_key: key}});
//    api_key:nM36br5iO0hoF1RVcagPPCVZT9zpyiNE    
    const img = document.querySelector("#gif");
    document.querySelector('.getGif').append(img);
  img.src = res.data.images;
}

const form = document.querySelector('#form');
form.addEventListener("submit", function (e) {
  const input = document.querySelector('#search');
  e.preventDefault();
  getGif(input.value, key);//console.log(input.value);
  input.value = '';
})

const btn = document.querySelector('#remove');
const gifs = document.querySelectorAll('#gif');
    btn.addEventListener("click", function(){
        gifs.forEach(e => e.remove());
    })