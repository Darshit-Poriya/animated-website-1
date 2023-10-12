var cursor = document.querySelector("#cursor"); /* FOR MOVING THE MAIN CURSOR */
var blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {   /* DETS = Events happens while moving mouses */
    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y + "px"
    blur.style.left = dets.x - 250 + "px" /* TO MAKE BLUR POINT AT THE CENTER WITH CURSOR */
    blur.style.top = dets.y - 250 + "px"
})

// TO MAKE EFFECT ON NAVVAR WHILE HOVER OVER IT 
var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) { // WE CAN USE THIS AS AN ARRAY TO PERFORM DIFFERENT FUNCTION
    elem.addEventListener("mouseenter", function () {
        cursor.style.scale = 4;
        cursor.style.border = "1px solid white";
        cursor.style.backgroundColor = "transparent";
        cursor.style.transition = "all ease-in 0.2s";
    })
    elem.addEventListener("mouseleave", function () {
        cursor.style.scale = 1;
        cursor.style.border = "0px solid #95C11E";
        cursor.style.backgroundColor = "#95C11E";
        cursor.style.transition = "all ease 0s";
    })

})

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
        trigger: "#nav",
        scoller: "body",
        markers: false,
        start: "top -10%",
        end: "top -11%",
        scrub: 1 // Used to for smooth animation 
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scoller: "body",
        markers: false,
        start: "top -25%",
        end: "top -80%",
        scrub: 2
    }
})

gsap.from("#about-us img,#about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    stagger: 0.5, // TO MAKE ANIMATION ONE BY ONE
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top 45%",
        scrub: 4,
    }
})

gsap.from(".card", {
    scale: 0.8,
    // opacity:0,
    duration: 1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        // markers:false,
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    },
});

gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroll: "body",
        markers: false,
        start: "top 55%",
        end: "top 50%",
        scrub: 4
    }
})

gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroll: "body",
        markers: false,
        start: "top 55%",
        end: "top 50%",
        scrub: 4
    }
})

gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroll: "body",
        markers: false,
        start: "top 75%",
        end: "top 70%",
        scrub: 2
    }
})