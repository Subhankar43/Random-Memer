const generateMemeBtn = document.querySelector(".content .generate-meme-btn");
const memeImage = document.querySelector(".content img");
const memeTitle = document.querySelector(".content .meme-title");
const memeAuthor = document.querySelector(".content .meme-author");

const updateDetails = (url, title, author) => {
  memeImage.setAttribute("src", url);
  memeTitle.innerHTML = title;
  memeAuthor.innerHTML = `Meme By : ${author}`;
};

const generateMeme = () => {
  fetch("https://meme-api.com/gimme/memes")
    .then((response) => response.json())
    .then((data) => {
      updateDetails(data.url, data.title, data.author);
    });
};

generateMemeBtn.addEventListener("click", generateMeme);
generateMeme();
