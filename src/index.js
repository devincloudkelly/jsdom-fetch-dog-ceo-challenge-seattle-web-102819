
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


document.addEventListener('DOMContentLoaded', function () {
    
    //fetches 4 random images to display on 
    fetch(imgUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        addImage(json)
        // console.log(json.message)
    })

    // fetches all breed data and displays in <ul>
    fetch(breedUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        addBreeds(json)
        // console.log(Object.keys(json.message)
    })

    //change color of dog breed once clicked
    const breedContainer = document.querySelector("#dog-breeds")
    breedContainer.addEventListener("click", function(event){
        console.log(event.target)
        event.target.style.color = "#8B2635"
    });

    //filter dog breeds based on the letter selected from dropdown
    const letterDropdown = document.querySelector("#breed-dropdown")
    letterDropdown.addEventListener("change", function(event) {
        let letterSelect = event.target.value
        let allBreeds = document.querySelectorAll("#dog-breeds li")
        allBreeds.forEach( breed => {
            console.log(breed.textContent.charAt(0))
            if (letterSelect == "all breeds") {
                breed.style.visibility = ""
            }
            else if (breed.textContent.charAt(0) != letterSelect) {
                breed.style.visibility = "hidden"
            } else {
                breed.style.visibility = ""
            }
        })
    })
})

function addImage(json) {
    const imageContainer = document.querySelector("#dog-image-container")
    // Object.keys

    json.message.forEach(image => {
        const dogImage = document.createElement("img")
        imageContainer.appendChild(dogImage) ;
        dogImage.src = image;
    });
}

function addBreeds(json) {
    const dogBreedContainer = document.querySelector("#dog-breeds")
    Object.keys(json.message).forEach(breed => {
        const dogBreed = document.createElement("li")
        dogBreed.textContent = breed
        dogBreedContainer.appendChild(dogBreed)
    })
}
