var button;
var searchBox;
var show;
var splash;
var content;
var stopButton;
//this holds the users search phrase 
var searchTerm = '';
var firstPart = "http://www.reddit.com/search.json?q="
var lastPart = "+nsfw:no";
var imageIndex = 0;
var handle = null;


document.addEventListener('DOMContentLoaded', function(){
    button = document.getElementById('searchbutton');
    searchBox = document.getElementById('searchterm');
    show = document.getElementById('show');
    splash = document.getElementById('splash');  // div to hide the search bar
    content = document.getElementById('content'); //where the pictures appear 
    stopButton = document.getElementById('stop');


    button.addEventListener('click', function(e){
        searchTerm = searchBox.value;
        searchBox = '';
        url = firstPart + searchTerm + lastPart;
        fetch(url)
        .then(function(data){
            return data.json();
        })
        .then(function(json){
            //console.log(json.data.children[1].data.thumbnail);
            var newThumbs = json.data.children.map(function(thumb){
                return thumb.data.thumbnail;
            });
            show.src = newThumbs[0];
            handle = setInterval(function(){
                imageIndex++;
                show.src = newThumbs[imageIndex];
            }, 3000)
        })
    });
})