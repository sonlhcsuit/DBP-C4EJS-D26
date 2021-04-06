let products = document.querySelectorAll('.product')
let smallPromotion = document.getElementById('ps')

smallPromotion.addEventListener('mouseover',()=>{
    products.forEach(p=>{
        p.classList.toggle('hidden')
    })
})
smallPromotion.addEventListener('mouseleave',()=>{
    products.forEach(p=>{
        p.classList.toggle('hidden')

    })
})