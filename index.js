const commentary = document.querySelectorAll('.commentary');

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