// const key = '1QhytuPLXBjfdZBNgwrfDUgEPuh7KCzt';

// document.addEventListener("DOMContentLoaded", getEmotion);

// function getEmotion() {
//     document.getElementById("submit").addEventListener("click", e => {
//         e.preventDefault();
//         let url = `https://api.giphy.com/v1/stickers/search?api_key${key}&limit=10&q=`;
//         let str = document.getElementById("feeling").value.trim();
//         url = url.concat(str);
//         console.log(url);
//         fetch(url)
//     .then(response => response.json())
//     .then(result 
//     .catch((error) => console.log(error));
//     });

    
// }



const key = '1QhytuPLXBjfdZBNgwrfDUgEPuh7KCzt';

const apiUrl = 'https://api.giphy.com/v1/gifs/search';

let searchEmotion = document.getElementById('feeling');

let btnGetEmotion = document.getElementById('submit');
    btnGetEmotion.addEventListener('click', getEmotion);


function getEmotion(e) {
    e.preventDefault();
    let url = apiUrl + '?api_key=' + key + '&q=' + searchEmotion.value + '&limit=10';


fetch(url)
    .then((response) => response.json())
    .then(json => displayEmotion(json))
    .catch((error) => console.log(error));
    console.log('hey from getEmotion() function');
}

function displayEmotion(emotion) {
    console.log(emotion);
    console.log(emotion.data[0].images.original.url);

    let gifOne = document.createElement('img');
    gifOne.src = emotion.data[0].images.original.url;
    gifOne.setAttribute('id', 'gif-One');

    let results = document.querySelector('.results');
    results.appendChild(gifOne);
}

// function displayEmotion(json) {
//     while (section.firstChild) {
//         section.removeChild(section.firstChild);
//     }

//     let gifs = json
// }

 
