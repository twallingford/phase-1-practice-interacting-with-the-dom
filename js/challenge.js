const counter = document.querySelector("#counter");
let intervalCounter = setInterval(timer, 1000);
const incrementButton = document.querySelector("#plus");
const decrementButton = document.querySelector("#minus");
const pauseButton = document.querySelector("#pause");
const heartButton = document.querySelector("#heart");
const submitButton = document.querySelector("#comment-form");
const restartButton = document.querySelector("#restart");
const commentList = document.querySelector("#list");
const likesList = document.querySelector(".likes");
const commentInput = document.querySelector("#comment-input");
let paused = false;
const likesCounter = {}

function pausing() {
    if(paused === true){
        pauseButton.innerText = "pause";
        paused = false;
        incrementButton.disabled = false;
        decrementButton.disabled = false;
        heartButton.disabled = false;
        submitButton.disabled = false;
}
    else{
        pauseButton.innerText = "resume";
        paused = true;
        incrementButton.disabled = true;
        decrementButton.disabled = true;
        heartButton.disabled = true;
        submitButton.disabled = true;
    }
}

function addLike() {
    let currentCounter = counter.innerText;
    console.log(currentCounter)
    if(Object.keys(likesCounter).includes(currentCounter) === true){
        let count = likesCounter[currentCounter] + 1;
        likesCounter[currentCounter] = count;
        likesList.innerText = counter.innerText + " has been liked " + likesCounter[currentCounter] + " times!";
    }
    else{
        likesCounter[currentCounter] = 1;
        likesList.innerText = counter.innerText + " has been liked " + likesCounter[currentCounter] + " times!";
    }
}

function submitComment(event){ 
    event.preventDefault();
    const addP = document.createElement('p');
    addP.innerText = commentInput.value;
    commentList.appendChild(addP);
    console.log(commentList);
    console.log(commentInput.value)
}

function timer(){
    if(paused === false){
        counter.innerText++;
    }
    else{
        counter.innerText;
    }
}

incrementButton.addEventListener("click", () => counter.innerText++)
decrementButton.addEventListener("click", () => counter.innerText--)
pauseButton.addEventListener("click", pausing)
restartButton.addEventListener("click", () => {
    counter.innerText = 0;
    pauseButton.innerText = "pause";
    paused = false;
    incrementButton.disabled = false;
    decrementButton.disabled = false;
    heartButton.disabled = false;
    submitButton.disabled = false;
})
heartButton.addEventListener("click", addLike)
submitButton.addEventListener("submit", submitComment)
