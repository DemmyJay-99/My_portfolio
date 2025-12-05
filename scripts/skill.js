const categoryDivs = document.querySelectorAll('.skill-category');

categoryDivs.forEach((c)=>{
    const cards = c.querySelectorAll('.skill-card');
    const icon = c.querySelector('.skill-icon');
    const angleIcon = c.querySelector(".fa-angle-right")
    c.onclick = ()=>{
    cards.forEach((card )=>{
        const isOpen = card.classList.toggle("show")
        //    card.style.backgroundColor = isOpen ?  "#000" : "yellow";
           card.style.animationName = isOpen ?  "fadein" : "fadeout";
    })
    icon.classList.toggle('active')
    angleIcon.classList.toggle('active')
}
})