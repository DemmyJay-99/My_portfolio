const categoryDiv = document.getElementById('category');
const cards = document.querySelectorAll('.skill-card')

categoryDiv.onclick = ()=>{
    cards.forEach((card )=>{
        const isOpen = card.classList.toggle("show")
        //    card.style.backgroundColor = isOpen ?  "#000" : "yellow";
           card.style.animationName = isOpen ?  "fadein" : "fadeout";
    })
}