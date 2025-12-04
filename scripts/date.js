const date = new Date();
const year = date.getFullYear()
const span = document.getElementById('date');

(()=>{
    span.innerHTML = `&copy;` + ` ${year}` + ` All rights reserved`
})()
console.log(year)