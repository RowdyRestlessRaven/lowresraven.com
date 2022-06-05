newsElement = document.getElementById('news');
designElement = document.getElementById('design');
soundElement = document.getElementById('sound');
contactElement = document.getElementById('contact');
navBar = document.getElementById('navbar');

navList = document.getElementsByClassName('nav-element');
elementList = document.getElementsByClassName('main-element');

// Fetch elements offset
function offsetGet (element) {
    return element.offsetTop;
}
elementsOffset = [offsetGet(newsElement), offsetGet(designElement), offsetGet(soundElement), offsetGet(contactElement)];

//Button light up function
window.onscroll = function () {
    for (let i = 0; i < navList.length; i++) {
        navList[i].classList.remove('active-btn');
        navBarOffset = offsetGet(navBar);
        if (navBarOffset >= elementsOffset[i] && navBarOffset < elementsOffset[i + 1]) {
            navList[i].classList.add('active-btn');
        } else if (navBarOffset >= elementsOffset[i] && i + 1 == 4) {
            navList[i].classList.add('active-btn');
        }
    }
}