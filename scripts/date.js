const date = new Date();
const year = date.getFullYear()
const dateSpan = document.getElementById('date');

(()=>{
    dateSpan.innerHTML = `&copy;` + ` ${year}` + ` All rights reserved`
})()
console.log(year)