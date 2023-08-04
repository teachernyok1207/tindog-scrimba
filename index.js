// Remember to import the data and Dog class!
import dogs from './data.js'
import getDogHtml from './Dog.js'

// Get All Dog Names and setting Waiting to false
let dogArray = ["rex","bella","teddy"]
let isWaiting = false

// Rending New Dog Function
function getNewDog(){
    const nextDogData = dogs[dogArray.shift()]
    return nextDogData ? new getDogHtml(nextDogData) : {}
}

// Taking Action for Like
function like(){
    if (!isWaiting){
        // Setting Dog as Liked and Swiped
        currentDog.setDogAsSwiped()
        currentDog.setDogAsLiked()
        
        // Displaying Like Badge
        document.getElementById("dog-remarks").src = "images/badge-like.png"
        
        // Setting to Next Dog
        setNextDog()
    }
}

// Taking Action for Nope
function nope(){
    if (!isWaiting){
        // Setting Dog as Swiped
        currentDog.setDogAsSwiped()
        
        // Displaying Like Badge
        document.getElementById("dog-remarks").src = "images/badge-nope.png"
        
        // Setting to Next Dog
        setNextDog()
    }
}


// Checking Buttons' Functions
document.getElementById('button-like').addEventListener("click", like)
document.getElementById('button-nope').addEventListener("click", nope)

function setNextDog(){
    isWaiting = true
    setTimeout(()=>{
        if (dogArray.length > 0){
            currentDog = getNewDog()
            render()
            isWaiting = false
        }else{
            lastDog()
        }
    },1000)
}

// Render Display Last Dog
function lastDog(){
    document.getElementById("tindog-div").innerHTML = 
    `
        <!-- Rendering Dog's Images -->
        <img id="dog-images" src="images/no-more-dogs.jpg">
    `
}

// Rendering Dog
function render(){
    document.getElementById("tindog-div").innerHTML = currentDog.setDogDetails()
}

let currentDog = getNewDog()
render()