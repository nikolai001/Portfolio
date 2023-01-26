const ageElement = document.querySelector('#age');

const date = new Date()
const birthDate = new Date(2000,0,18)

let year = date.getFullYear() - birthDate.getFullYear()
const month = date.getMonth() - birthDate.getMonth()

function getAge() {
    if (month < 0 || (month === 0 && date.getDate() < birthDate.getDate())) {
        year--;
    }    
    return year;
}

ageElement.innerHTML = getAge()