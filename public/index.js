import { createMainContent, secondImage, upvote, downvote, addComment} from './main.js';

const initializePage = () => {
    // Create container
    const container = document.createElement("section");
    container.className = "container";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.marginTop = "20px";
    document.body.appendChild(container);

    const popularityScore = document.createElement('h3');
    popularityScore.innerHTML = 'Poularity Score: <span id="score" >0</span>';
    document.body.appendChild(popularityScore);

    const button = document.createElement('button');
    button.innerText = 'New Image';
    button.setAttribute('id', 'new-image');
    document.body.appendChild(button);

    const upvoteButton = document.createElement('button');
    upvoteButton.innerText = 'Upvote';
    upvoteButton.setAttribute('id', 'upvote');
    document.body.appendChild(upvoteButton);

    const downvoteButton = document.createElement('button');
    downvoteButton.innerText = 'Downvote';
    downvoteButton.setAttribute('id', 'downvote');
    document.body.appendChild(downvoteButton);

    const comment = document.createElement('form');
    comment.innerHTML = `
    <h3>Comments</h3>
    <input type="text" id="input">
    <button id="submit">Submit</button>`;
    document.body.appendChild(comment);

    const commentBox = document.createElement('div');
    commentBox.setAttribute('id', 'commentBox')
    commentBox.style.width = '400px';
    commentBox.style.height = '400px';
    commentBox.style.border = '3px solid black';
    commentBox.style.margin = '10px'
    document.body.appendChild(commentBox);
};

window.onload = () => {
    initializePage();
    createMainContent();
    secondImage();
    upvote();
    downvote();
    addComment();
};
