const $destination = document.getElementById('destinations_container');
const $review = document.getElementById('review_container')
const $menubtn = document.querySelector('.btn_menu')


async function fetchDestination() {
    try {
        const res = await fetch('./destinations.json')
        const data = await res.json()

        console.log(data)

        if (data) {
            $destination.innerHTML += data.map(local => `<div class="destination-card" data-aos="fade-up">
                <img src='${local.imagem}' class="destination-image" />
                <div class='destination-header'>
                    <h1 class="destination-title">${local.local}</h1>
                    <img src="https://flagsapi.com/${local.country}/flat/64.png" class='flag' />
                </div>
                <p class="destination-description">${local.Description}</p>
                <div class="destination-info">
                    <p class="review">⭐ ${local.review}</p>
                    <p class="value">U$ ${local.Value.toFixed(2)}</p>
                </div>
            </div>
            `).join('');
        }
    } catch (error) {
        console.error(error)
    }
}

async function fetchReviews () {
    try {
        const res = await fetch('./reviews.json')
        const data = await res.json()

        console.log(data)

        if(data) {
            $review.innerHTML += data.map(review => `<div class="review_card">
                    <div class='image_user'>
                        <img src='${review.img}' />
                    </div>
                    <div>
                        <h2 class='name'>${review.name}</h2>
                        <p class='rating'><i class='fa-solid fa-star'></i> ${review.rating}</p>
                        <p>${review.review}</p>
                    </div>
                </div>    
            `).join('')
        }
    } catch (error) {
        console.error(error)
    }
} 


$menubtn.addEventListener('click', () => {
    const menu = document.querySelector('.menu_list')
    menu.classList.toggle('ocult')
})


fetchDestination()
fetchReviews()