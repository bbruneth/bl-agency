let texto1 = document.querySelector('.texto1');
let texto2 = document.querySelector('.texto2');
let texto3 = document.querySelector('.texto3');

function rotateWords() {
    texto1.classList.add('is-visible');

    setTimeout(() => {
        texto1.classList.remove('is-visible');
        texto1.classList.add('is-hidden');
        texto2.classList.add('is-visible');
        texto3.classList.remove('is-hidden');
    }, 2000);

    setTimeout(() => {
        texto1.classList.remove('is-hidden');
        texto2.classList.remove('is-visible');
        texto2.classList.add('is-hidden');
        texto3.classList.add('is-visible');
    }, 4000);

    setTimeout(() => {
        texto2.classList.remove('is-hidden');
        texto3.classList.remove('is-visible');
        texto3.classList.add('is-hidden');
    }, 6000);
}

rotateWords();

setInterval(rotateWords, 6000);