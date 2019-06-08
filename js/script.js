// declare global variables
var button = document.getElementsByTagName('button')[0];
var deleteButton = document.getElementsByTagName('button')[1];
var begUrl = "http://www.reddit.com/search.json?q="
var endUrl = "+nsfw:no"
var searchTerm = '';
var fullUrl = '';
//var inputElement = document.querySelector('[name="input"]');
var show = document.getElementById('show');
var imageIndex = 0;

//
button.addEventListener('click', function (e) {
    // document.header.classList.remove('visible');
    // document.header.classList.add('invisible');
   // var inputBox = document.getElementsByName('input').value;
    var inputBox = document.getElementById('input').value;
    console.log(inputBox.value);
    var fullUrl = begUrl + inputBox + endUrl;
    console.log(fullUrl);
    searchTerm = inputBox.value;
    inputBox.value = '';
    fetch(fullUrl)
        .then(function (data) {
            return data.json();
        })
        .then(function (json) {
            var posts = json.data.children;
            var thumbArray = posts.map(function(post){
                return post.data.thumbnail;
            })
            show.src = thumbArray[0];
            handle = setInterval(function(){
                imageIndex++;
                show.src = thumbArray[imageIndex];
            }, 400)
        })
})


deleteButton.addEventListener('click', function(e){
    var inputBox = document.getElementById('input').value;
    inputBox.value = '';
    var element = document.getElementById('slideshow');
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
})
