export function reveal() {
    let allReveal = document.querySelectorAll('.reveal');

    for(let i = 0; i < allReveal.length; i++ ) {
        let windowHeight = window.innerHeight;
        let revealTop = allReveal[i].getBoundingClientRect().top;
        let revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            allReveal[i].classList.add('active');
        } 
        
        // else {
        //     allReveal[i].classList.remove('acitve')
        // }
    }

}