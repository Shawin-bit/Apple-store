//Targeting elements 
const $container = document.getElementById('container')
const $addRed = document.getElementById('add-red')
const $addGreen = document.getElementById('add-green')
const $addBlue = document.getElementById('add-blue')

// Variables
const itemInfo = {
    title: 'Apple',
    price: 9.99,
    description: 'Richess Apple, crispy and fine with apple-like curves.',
    quanitity: 10
}
let itemCount = 0

// Functions
function capitalize(inputString) {
    console.log(inputString[0].toUpperCase() + inputString.substring(1))
}

capitalize('red')

function addItem() {
    const color = event.target.dataset.color


    const itemElement = `
        <div id='item-${itemCount}' class='item'>
            <p>${capitalize(color)} ${itemInfo.title}</p>
            <p>${itemInfo.price}</p>
            <p>${itemInfo.description}</p>
            <p>${itemInfo.quantity} remaining</p>
        </div>
    `


    $container.insertAdjacentHTML('beforeend', itemElement)

    const $icon = document.createElement('i')
     $icon.classList.add('fa', 'fa-apple')
     $icon.style.fontSize ='100px'
     //change color
     $icon.style.color = color

    const $item = document.getElementById(`item-${itemCount}`)
     $item.insertBefore($icon, $item.firstElementChild)

    itemCount++

}


// Event Listeners
$addRed.addEventListener('click', addItem)
$addGreen.addEventListener('click', addItem)
$addBlue.addEventListener('click', addItem)
