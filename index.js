
//This currentRating variable going to hold number of stars given by User
//It changes eachtime when user increases or decreases the stars
let currentRating = 0;
const allStars = document.querySelectorAll(".star");
const bottomTag = document.querySelector(".bottom_tag");

// Object mapping star ratings to messages and emojis
//These text contents are displayed based on star rating at bottomTag
const ratingMessages = {
    1: { message: "Could do better", emoji: "📉" },
    2: { message: "Decent performance", emoji: "👌" },
    3: { message: "Nice work!", emoji: "😊" },
    4: { message: "Great job!", emoji: "👍" },
    5: { message: "Fantastic!", emoji: "👏" }
};

//This forEach method attach each Event Listeners to Each Stars
allStars.forEach(star => {
    star.addEventListener('click', () => {
        //The following starValue help us to get which star is clicked
        //Like 4th star, 5th star etc...
        const starValue = parseInt(star.getAttribute('data-value'));

        // Update current rating
        currentRating = starValue;

        // Update star colors based on the current rating
        allStars.forEach(s => {
            const sValue = parseInt(s.getAttribute('data-value'));
            s.style.color = sValue <= currentRating ? "#ff8fab" : "white";
        });

        // Display message and emoji corresponding to the current rating
        const { message, emoji } = ratingMessages[currentRating];
        bottomTag.textContent = `${message} ${emoji}`;
    });
});