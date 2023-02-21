
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


const modalContainer = document.querySelector('.modal-container');
const modalOpen = document.querySelector('.modal-control');
const modalClose = modalContainer.querySelector('.modal-close-icon');

modalOpen.addEventListener('click', openModal)
modalClose.addEventListener('click', closeModal);
modalContainer.addEventListener('click', function(e){
    if(e.target == modalContainer){
        closeModal();
    }
});


function openModal(){
    modalContainer.classList.add('active');
}

function closeModal(){
    modalContainer.classList.remove('active');
}
