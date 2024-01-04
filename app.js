let joke = document.querySelector("#joke");
let btn = document.querySelector("#btn");
let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,sexist&type=single";


async function getJoke() {
   let res = await fetch(url);
   let data = await res.json();
   
   return data.joke;
}


btn.addEventListener("click", async () => {
   let randomJoke = await getJoke();

   joke.innerHTML = randomJoke;
})