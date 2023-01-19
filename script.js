let modalTriger = document.querySelector('#burgerMenu')
let modalForm = document.querySelector('#navModal')
let modalContent = document.querySelector('#navModal > .navbar_list')
modalTriger.addEventListener('click', function(){
    document.body.style.overflowY = "hidden"
    modalForm.classList.toggle("active")
    setTimeout(function(){
        modalContent.classList.toggle('active')
    }, 10);
})
modalForm.addEventListener('click', function(e){
    if(e.target = modalForm){
        document.body.style.overflowY = "scroll"
        modalContent.classList.toggle('active')
        setTimeout(function(){
            modalForm.classList.toggle("active")  
        }, 300);
    }
})
const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        bulletElement: 'div',
    },
    spaceBetween: 20,
    slidesPerView: 3,
    slidesPerGroup: 3,
    loop: true, 
})
let allTriger = document.querySelector('#all')
let webDesTriger = document.querySelector('#webDes')
let uiDesTriger = document.querySelector('#uiDes')
let mockupTriger = document.querySelector('#mockUp')
let all = document.querySelectorAll('.works_item')
allTriger.addEventListener('click', function(){
    all.forEach(function(work){
        work.style.display = "block"
    })
})
webDesTriger.addEventListener('click', function(){
    all.forEach(function(work){
        if(work.dataset.category == "webDesign"){
            work.style.display = "block"
        }
        else{
            work.style.display = "none"
        }
    })
})
uiDesTriger.addEventListener('click', function(){
    all.forEach(function(work){
        if(work.dataset.category == "uiUxDesign"){
            work.style.display = "block"
        }
        else{
            work.style.display = "none"
        }
    })
})
mockupTriger.addEventListener('click', function(){
    all.forEach(function(work){
        if(work.dataset.category == "Mockups"){
            work.style.display = "block"
        }
        else{
            work.style.display = "none"
        }
    })
})