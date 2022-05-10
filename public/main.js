export const createMainContent = () => {
    // Create h1
    const h1 = document.createElement("h1");
    h1.innerText = "Catstagram";

    // Create img
    const img = document.createElement("img");
    img.style.margin = "20px";
    img.style.maxWidth = "750px";

    const container = document.querySelector(".container");
    container.appendChild(h1);
    container.appendChild(img);

    fetchImage();
};

const fetchImage = async () => {
    // Fetch image from API and set img url
    try {
        const kittenResponse = await fetch("https://api.thecatapi.com/v1/images/search?size=small");
        // Converts to JSON
        const kittenData = await kittenResponse.json();
        // console.log(kittenData);
        const kittenImg = document.querySelector("img");
        kittenImg.src = kittenData[0].url;
    } catch (e) {
        console.log("Failed to fetch image", e);
    }
};

export const secondImage = async () => {
  const button = document.querySelector('button');
  let score = document.querySelector('#score');
  const commentBox = document.getElementById('commentBox');
button.addEventListener('click', e => {
  fetchImage();

  score.innerText = '0'
  commentBox.innerHTML = '';

});
}

export const upvote = async () => {
  const  button = document.getElementById('upvote');
  button.addEventListener('click', e => {

  let score = document.querySelector('#score');
  score.innerText++;
  //  = Number(score.innerText) + 1;
});
}

export const downvote = async () => {
  const  button = document.getElementById('downvote');
  button.addEventListener('click', e => {

    let score = document.querySelector('#score');
    score.innerText--;
    //  = Number(score.innerText) - 1;
});
}


// export const vote = async () => {
//   let score = 0;
//   let up = await upvote();
//   let down = await downvote();

//   if(up) {
//     score++;
//   }else {
//     score--;
//   }

//   return score;
// }

export const addComment = async () => {
  const button = document.getElementById('submit');
  const input = document.getElementById('input');
  const commentBox = document.getElementById('commentBox');

  button.addEventListener('click', e => {
    e.preventDefault();
    // console.log(input.value);
    const comment = document.createElement('p');
    comment.innerText = input.value;
    commentBox.appendChild(comment);
    input.value = '';
  });
}
