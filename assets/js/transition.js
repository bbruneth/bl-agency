function pageTransition() {
    var tl = gsap.timeline();

    tl.to('ul.transition li', {duration: .5, scaleY: 1, transformOrigin: "bottom left", stagger: .2})
    tl.to('ul.transition li', {duration: .5, scaleY: 0, transformOrigin: "bottom left", stagger: .1, delay: .1})
}

function contentAnimation() {

}

function delay(n) {
    n = n || 2000;
    return new Promise(done => {
        setTimeout(() => {
            done();
        }, n);
    });
}

barba.init({

    sync: true,

    transitions: [{
        async leave(data) {
            const done = this.async();

            pageTransition();
            await delay(1500);
            done();
        },

        
    }]

})

barba.hooks.after(() => {
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
});