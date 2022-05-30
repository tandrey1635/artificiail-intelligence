
//телефон в шапке 

const headerImg = document.querySelector('.header__info')
const headerImgMobile = document.querySelector('.header__info-mobile')
const close = document.querySelector('.header__close')
     

headerImg.addEventListener('click', (e)=>{
    if (window.innerWidth < 767) {
        e.preventDefault()
    }
    headerImgMobile.classList.toggle('active')
})
close.addEventListener('click', ()=>{
    headerImgMobile.classList.toggle('active')
})




// аккордеон

const img = document.querySelectorAll('.knowledge__photo')

const knowledgeBlock = document.querySelectorAll('.knowledge__level')
const knowledgeMenu = document.querySelectorAll('.knowledge__menu')

knowledgeBlock[0].addEventListener('click',()=>{
    knowledgeMenu[0].classList.toggle('active')
    if (knowledgeMenu[0].classList.contains('active')) {
        img[0].style.cssText = 'transform: rotate(0deg)'
    }
    else{
        img[0].style.cssText = 'transform: rotate(180deg)'
    }    
})


knowledgeBlock[1].addEventListener('click',()=>{
    knowledgeMenu[1].classList.toggle('active')
    if (knowledgeMenu[1].classList.contains('active')) {
        img[1].style.cssText = 'transform: rotate(0deg)'
    }
    else{
        img[1].style.cssText = 'transform: rotate(180deg)'
    }   
})


knowledgeBlock[2].addEventListener('click',()=>{
    knowledgeMenu[2].classList.toggle('active')
    if (knowledgeMenu[2].classList.contains('active')) {
        img[2].style.cssText = 'transform: rotate(0deg)'
    }
    else{
        img[2].style.cssText = 'transform: rotate(180deg)'
    }   
})




//стрелка вверх

const arrowTop = document.querySelector('.arrow__text')
const arrowUp = document.querySelector('.arrow__up')

window.addEventListener('scroll', ()=>{
    if (window.pageYOffset >= 300) {
        arrowTop.classList.add('active')
    }
    else{
        arrowTop.classList.remove('active')
    }
    
   
})


// плавная прокрутка стрелки вверх

arrowUp.addEventListener('click', () => window.scrollTo({
    top: 0,
    behavior: 'smooth',
}));


// модалка

const modal = document.querySelector('.modal__dialog')
const smallModal = document.querySelector('.small__modal__dialog')

document.body.addEventListener('click', (e)=>{
    if (e.target.classList.contains('btn')) {
        modal.classList.add('active')
        document.body.style.overflow = 'hidden'
    }
    if (e.target.classList.contains('modal__close-photo')) {
        modal.classList.remove('active')
        document.body.style.overflow = ''
    }

    // модалка запрос отправлен
    if (e.target.classList.contains('modal__btn')) {
        smallModal.classList.add('active')
        modal.classList.remove('active')
        setTimeout(() => {
            smallModal.classList.remove('active')
            setTimeout(() => {
                document.body.style.overflow = ''
            },1000);
        },2000);  
    }
    
})




