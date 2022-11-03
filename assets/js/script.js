let meme = document.getElementById("meme");
let title = document.getElementById("title");
let memeBtn = document.getElementById("meme-btn");

//API URL
let url = "https://meme-api.herokuapp.com/gimme/";

//Array of subreddits of choice
let subreddits = ["dankmemes", "me_irl", "wholesomememes", "historymemes", "memes"];

//function to generate random meme
let generateMeme = () => {
    //choose a random subreddit from the subreddit array
    //let randomSubreddit = subreddits[Math.floor(Math.random() * 3)];
    let randomSubreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
    fetch(url + randomSubreddit).then((resp) => resp.json()).then((data) => {
        let memeImg =  new Image();
        //displays meme image and title only after the image loads
        memeImg.onload = () => {
            meme.src = data.url;
            title.innerHTML = data.title;
        };
        memeImg.src = data.url;
    });
};

//call the generateMeme() on button click and on window load
memeBtn.addEventListener("click", generateMeme);
window.addEventListener("load", generateMeme);