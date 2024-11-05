
function locoScroll(){
    gsap.registerPlugin(ScrollTrigger);

// Initialize Locomotive Scroll
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

// Sync ScrollTrigger with Locomotive Scroll
locoScroll.on("scroll", ScrollTrigger.update);

// Configure ScrollTrigger to work with Locomotive Scroll
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

}

// Remove the page4Animation function completely

// ******************************** ///////////////////////
// function locoScroll(){
//     gsap.registerPlugin(ScrollTrigger);

//     const locoScroll = new LocomotiveScroll({
//         el: document.querySelector("#main"),
//         smooth: true
//     });

//     locoScroll.on("scroll", ScrollTrigger.update);

//     ScrollTrigger.scrollerProxy("#main", {
//         scrollTop(value) {
//             return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//         },
//         getBoundingClientRect() {
//             return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//         },
//         pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
//     });

//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
//     ScrollTrigger.refresh();
// }

// // Initialize only necessary animations
// function initAnimations() {
//     locoScroll();
//     cursorEffect();
//     page2Animation();
//     // Remove page4Animation from initialization
//     sliderAnimation();
// }

// // Initialize
// initAnimations();


/////////// ******************************** ///////////////////////



locoScroll()

function cursorEffect() {
    const page1Content = document.querySelector("#page1-content");
    const cursor = document.querySelector('#cursor');

    page1Content.addEventListener("mousemove", function(dets) {
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y
        });
    });

    page1Content.addEventListener("mouseenter", function() {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1,
        });
    });

    page1Content.addEventListener("mouseleave", function() {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0,
        });
    });
}

cursorEffect();

// function page2Animation() {
//     gsap.from("#page2 *", {
//         opacity: 0,
//         y: 50,
//         stagger: 0.2,
//         duration: 1.5,
//         ease: "power3.out",
//         scrollTrigger: {
//             trigger: "#page2",
//             scroller: "#main",
//             start: "top 70%",
//             end: "bottom 30%",
//             markers: false, 
//             scrub: 1
//         }
//     });
// }

// page2Animation();

function page2Animation() {
    gsap.from("#page2 *", {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 80%",
            end: "bottom 50%",
            markers: false, // Set to true if you want to debug
            scrub: 1
        }
    });
}

page2Animation();


function page4Animation() {
    gsap.from("#page4 .section-title", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main",
            start: "top 70%",
            end: "bottom 30%",
            scrub: 1,
            markers: false
        }
    });

    // Both images and buttons will come up together
    gsap.from("#page4 .card-wrapper", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main",
            start: "top 70%",
            end: "bottom 30%",
            scrub: 1,
            markers: false
        }
    });
}

page4Animation();


// swiper js 

function sliderAnimation(){

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 0,  // Remove space between slides for a continuous effect
        loop: true,
        autoplay: {
            delay: 0,  // No delay between slides, autoplay will be continuous
            disableOnInteraction: false,
        },
        speed: 9000,  // Adjust speed for a slower transition
        effect: 'slide' // Use slide effect for smooth scrolling
    });
    

}

sliderAnimation()

// gsap animation for the loader

// used to make the asynchronus code work smoothly (asynchronus code synchronus)

var tl = gsap.timeline()

tl.from("#loader h3", {
    x:40,
    opacity:0,
    duration:1,
    stagger:0.1

})

tl.to("#loader",{
    opacity:0,
    x:-40,
    duration:1,
    stagger:0.1
})

tl.to("#loader",{
    opacity:0,

})

tl.from("#page1-content h1 span", {
    y:100,
    opacity:0,
    stagger:0.1,
    duration:0.5,
    delay: -0.5,
})

tl.to("#loader",{
    display:"none"

})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Add this to your script.js
function handleSignup() {
    const signupBtn = document.querySelector('.signup-btn');
    
    signupBtn.addEventListener('click', () => {
        // You can replace this with your actual signup logic
        const signupSection = document.querySelector('#page2');
        signupSection.scrollIntoView({ behavior: 'smooth' });
    });
}

// Add to your existing initialization code
handleSignup();


//////////////////////////////////////////////////////////

// page 3

function page3Animation() {
    const boxes = gsap.utils.toArray('.box');

    boxes.forEach((box, index) => {
        const icon = box.querySelector('.box-icon img');
        const content = box.querySelector('.box-content');

        gsap.set(icon, { scale: 0, opacity: 0 });
        gsap.set(content, { y: 50, opacity: 0 });

        gsap.to(box, {
            duration: 0.6,
            ease: 'power2.out',
            delay: index * 0.2,
            opacity: 1,
            y: 0,
            onStart: () => {
                gsap.to(icon, {
                    duration: 0.6,
                    ease: 'back.out(1.7)',
                    scale: 1,
                    opacity: 1,
                    delay: 0.2
                });
                gsap.to(content, {
                    duration: 0.6,
                    ease: 'power2.out',
                    y: 0,
                    opacity: 1,
                    delay: 0.4
                });
            }
        });

        box.addEventListener('mouseenter', () => {
            gsap.to(box, {
                duration: 0.3,
                ease: 'power2.out',
                y: -10,
                scale: 1.05
            });
            gsap.to(icon, {
                duration: 0.3,
                ease: 'power2.out',
                scale: 1.2,
                filter: 'brightness(0) invert(1)'
            });
        });

        box.addEventListener('mouseleave', () => {
            gsap.to(box, {
                duration: 0.3,
                ease: 'power2.out',
                y: 0,
                scale: 1
            });
            gsap.to(icon, {
                duration: 0.3,
                ease: 'power2.out',
                scale: 1,
                filter: 'none'
            });
        });
    });
}

page3Animation();