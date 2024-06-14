const commentary = document.querySelectorAll('.commentary');
const destinations = document.querySelector('.destinations');
const modal = document.querySelector('.modal');
const menubtn = document.querySelector('.menu');
const menuList = document.querySelector('.menu-list')

fetch('./destinations.json').then(res => res.json()).then(data => {
    const locais = data
    console.log(locais)
    destinations.innerHTML += locais.map(local => `<div key=${local.local} class='card'>
            <img src=${local.imagem} />
            <div class='info-tr'>
                <div>
                    <h4>${local.local}</h4>
                    <p><i class="fa-solid fa-location-dot"></i>${local.country}</p>
                </div>
                <p><i class="fa-solid fa-star"></i>${local.review}</p>
            </div>
        </div>`).join('')
        document.querySelectorAll('.card').forEach((card, index) => {
            card.addEventListener('click', ()=> toogleModal(locais[index]))
        })
    })


    
let i = 1
function prevCom() {
    commentary[i].classList.remove('active')
    i--
    if(i < 0){
        i = 2
    }
    commentary[i].classList.add('active');
    
}
function nextCom() {
    commentary[i].classList.remove('active')
    i++
    if(i > 2){
        i = 0
    }
    commentary[i].classList.add('active')
}


const toogleModal = (travel) => {
    if(modal.classList.contains('modalActive')){
        modal.classList.remove('modalActive')
        modal.innerHTML = ''
    } else {
        modal.classList.add('modalActive')
        openModal(travel)
    }
}


function openModal(local){
    if(modal.classList.contains('modalActive')){
        modal.innerHTML += `<div class="modal-content">
            <img src="${local.imagem}"/>
            <div class='info-tr'>
                <div>
                    <h3>${local.local}</h3>
                    <p><i class="fa-solid fa-location-dot"></i>${local.country}</p>
                </div>
                <p><i class="fa-solid fa-star"></i>${local.review}</p>
            </div>
            <p class='description'>${local.Description}</p>
            <div class='price'>
                <h3>${local.Value.toLocaleString('en-US', {style: "currency", currency: "USD"})}</h3>
                <p>10X of ${(local.Value / 10).toLocaleString('en-US', {style: 'currency', currency: 'USD'})}
                <div class='modals-btn'>
                    <button class='secondary cancel'>Cancel</button>
                    <button class='primary buy'><i class='fa-solid fa-cart-shopping'></i>Buy Now</button>
                </div>
            </div>
        </div>`
    }
    document.querySelector('.cancel').addEventListener('click', ()=> toogleModal())
}

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        toogleModal();
    }
});

menubtn.addEventListener('click', () => {
    menuList.classList.toggle('hidden')
})