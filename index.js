const key = '1QhytuPLXBjfdZBNgwrfDUgEPuh7KCzt';

const apiUrl = 'https://api.giphy.com/v1/gifs/search';

function getEmotion(emoji) {
    var btnValue = emoji.value;
    console.log(btnValue);
    let url = apiUrl + '?api_key=' + key + '&q=' + btnValue + '&limit=12';


    fetch(url)
    .then((response) => response.json())
    .then(json => displayEmotion(json))
    .catch((error) => console.log(error));
    //console.log('hey from getEmotion() function');
}

function displayEmotion(emotion) {
    console.log(emotion);
    
    console.log(emotion.data[0].images.original.url);

    let results = document.querySelector('.results');

    while (results.firstChild) {
            results.removeChild(results.firstChild);
        }

    let gifOne = document.createElement('img');
    gifOne.src = emotion.data[0].images.original.url;
    gifOne.setAttribute('id', 'gif-One');

    
    results.appendChild(gifOne);
}