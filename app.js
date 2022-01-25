// run animations


barba.init({
    transitions:[
    {
        name:"default",
        leave(data){
            const done = this.async();
            let current = data.current.container;
            gsap.fromTo(current, {opacity: 1}, {opacity: 0, duration: 3, onComplete: done});
    },
        enter(data){
            const done = this.async();
            let next = data.next.container;
            gsap.fromTo(next, {opacity: 1}, {opacity: 1, duration: 3, onComplete: done});

        },
    },

    ],
});