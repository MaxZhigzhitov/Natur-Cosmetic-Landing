const activeRatings = document.getElementsByClassName("stars-active-wrapper");

getRating(activeRatings);

function getRating(ratings){
    for(i = 0; i < ratings.length; i++){
        let currentRating = ratings[i].getAttribute("data-rating");
        let ratingWidth = (currentRating/ 5) * 100;

        renderRating(ratings, i, ratingWidth);
    }
}

function renderRating(ratings, index, ratingWidth) {
    ratings[index].style.width = ratingWidth + "%";
}

