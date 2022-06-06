let newsElement = document.getElementById('news');
let designElement = document.getElementById('design');
let soundElement = document.getElementById('sound');
let contactElement = document.getElementById('contact');
let navBar = document.getElementById('navbar');

let navList = document.getElementsByClassName('nav-element');
let elementList = document.getElementsByClassName('main-element');
let newList = document.getElementsByClassName('new');

let designList = document.getElementsByClassName('grid-element');
let expandList = document.getElementsByClassName('expandcell');
let imageList = document.getElementsByClassName('img-btn');
let videoList = document.getElementsByClassName('video-btn');

////////////////////////////
////////// NAVBAR //////////
////////////////////////////

//Navbar buttons light up
function offsetGet (element) {
    return element.offsetTop;
};

window.onscroll = function () {
    let elementsOffset = [offsetGet(newsElement), offsetGet(designElement), offsetGet(soundElement), offsetGet(contactElement)];
    for (let i = 0; i < navList.length; i++) {
        navList[i].classList.remove('active-btn');
        let navBarOffset = offsetGet(navBar);
        if (navBarOffset >= elementsOffset[i] && navBarOffset < elementsOffset[i + 1]) {
            navList[i].classList.add('active-btn');
        } else if (navBarOffset >= elementsOffset[i] && i + 1 == 4) {
            navList[i].classList.add('active-btn');
        }
    }
};

//////////////////////////
////////// MAIN //////////
//////////////////////////

//Expanding grid
document.getElementById('see-all').onclick = function () {
    let collapsedItems = document.getElementsByClassName('collapsed');
    for (let i = 0; i < collapsedItems.length; i++) {
        collapsedItems[i].classList.toggle("visible");
    }
    if (this.classList.contains('active')) {
        this.innerHTML = 'see all >';
        this.classList.toggle('active');
        for (let i = 0; i < expandList.length; i++) {
            expandList[i].classList.remove('visible');
        }
        for (let i = 0; i < designList.length; i++) {
            designList[i].classList.remove('selected');
        }
    } else {
        this.innerHTML = '< see less';
        this.classList.toggle('active');
    }
};

//Item description expansion
function expandDesign () {
    for (let i = 0; i < designList.length; i++) {
        designList[i].onclick = function () {
            if (this.nextElementSibling.classList.contains('visible')) {
                for (let i = 0; i < expandList.length; i++) {
                    expandList[i].classList.remove('visible');
                }
                for (let i = 0; i < designList.length; i++) {
                    designList[i].classList.remove('selected');
                }
            } else {
                for (let i = 0; i < expandList.length; i++) {
                    expandList[i].classList.remove('visible');
                }
                for (let i = 0; i < designList.length; i++) {
                    designList[i].classList.remove('selected');
                }
                this.nextElementSibling.classList.toggle('visible');
                this.classList.toggle('selected');
            }  
        }
    }
};
expandDesign();
