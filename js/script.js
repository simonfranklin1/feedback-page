// Elements

const main = document.querySelector("main");
const ratingButtons = document.querySelectorAll(".rating-btn");
let rating = false;
const submitButton = document.querySelector("submit-button,button");
const thankYou = document.querySelector("#thank-you");

// functions 

const submitRating = () => {
    if(rating) {
        main.style.display = "none";
        thankYou.style.display = "flex";

        const ratingText = document.querySelector("#feedback");
        ratingText.innerHTML = `<p>You selected ${rating} out of 5</p>`
    } else {
        window.alert("Please, leave your feedback")
    }
} 

const removeSelectedRating = () => {
    const selecetedBtn = document.querySelector(".select");
    if(selecetedBtn) {
        selecetedBtn.classList.remove("select");
    }
}

// events

ratingButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        removeSelectedRating()

        btn.classList.add("select");
        rating = btn.innerText;
    })
})

submitButton.addEventListener("click", submitRating);