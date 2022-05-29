elements = document.getElementsByClassName('element');

console.log(elements);
// progressive apparition

function timer(ms) {
    return new Promise(res => setTimeout(res, ms));
};

setTimeout(async function () {
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.opacity = '100%';
        await timer(150);
    };
}, 150);