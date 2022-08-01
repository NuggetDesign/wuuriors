var ani = gsap.timeline({
    scrollTriger: {
        trigger: ".hero-section",
        start: "bottom bottom"
    }
});

ani.from(".building", { y: 150, opacity: 0, duration: 1 })
  .from(".hero-title", { y: 50, duration: .7 }, "-=.64")
  .from(".hero-desc", { y: 500, duration: .7 }, "-=.54")

var menuToggle = document.getElementById("menuToggle")
var menuBar = gsap.timeline();

var aniDesktop = gsap.timeline ({
	scrollTrigger: {
		trigger: ".hero-section",
	}
});

aniDesktop.from(".hero-title-desk", { y: 100, opacity: 0, duration: 1})
          .from(".hero-desc-desk", { x: 100, duration: .4 }, "-=.6")
		  .from(".banner", { y: -50, opacity: 0, duration: .7}, "-=.5")
		  
menuBar.to('.bar-1', 0.5,{
	attr:{d: "M8,2 L2,8"},
	x:1,
	ease: Power2.easeInOut
}, 'start')

menuBar.to('.bar-3', 0.5,{
	attr:{d: "M8,8 L2,2"},
	x:1,
	ease: Power2.easeInOut
}, 'start')

menuBar.reverse();


var tl = gsap.timeline({ paused: true});

tl.to('.fullpage-menu', {
	duration:0,
	display: "block",
	ease: 'Expo.easeInOut',
});

tl.from('.menu-bg span', {
	duration:0.7,
	x:"100%",
	ease: 'Expo.easeInOut'
});

tl.from('.main-menu li a', {
	duration:0.5,
	y:"100%",
	stagger: 0.2,
	ease: 'Expo.easeInOut'
} , "-=0.2");

tl.from('.social-links li', {
	duration:0.7,
	y:"-100%",
	opacity:0,
	stagger: 0.1,
	ease: 'Expo.easeInOut'
} , "-=0.2");

tl.reverse();

menuToggle.addEventListener('click', function(){
	menuBar.reversed(!menuBar.reversed());
	tl.reversed(!tl.reversed());
});

var navOne = document.querySelector('.link1')

navOne.addEventListener('click', function(){
	menuBar.reversed(!menuBar.reversed());
	tl.reversed(!tl.reversed());
});

var navTwo = document.querySelector('.link2')

navTwo.addEventListener('click', function(){
	menuBar.reversed(!menuBar.reversed());
	tl.reversed(!tl.reversed());
});

var navThree = document.querySelector('.link3')

navThree.addEventListener('click', function(){
	menuBar.reversed(!menuBar.reversed());
	tl.reversed(!tl.reversed());
});

var navFourth = document.querySelector('.link4')

navFourth.addEventListener('click', function(){
	menuBar.reversed(!menuBar.reversed());
	tl.reversed(!tl.reversed());
})

var navFifth = document.querySelector('.link5')

navFifth.addEventListener('click', function(){
	menuBar.reversed(!menuBar.reversed());
	tl.reversed(!tl.reversed());
})

var colors = ["black"];

//initially colorize each box and position in a row
gsap.set(".box-mobile", {
  backgroundColor: (i) => colors[i % colors.length],
  x: (i) => i * -145
});


gsap.to(".box-mobile", {
  duration: 70,
  ease: "none",
  x: "-=6235", //move each box 500px to right
  modifiers: {
    x: gsap.utils.unitize(x => parseFloat(x) % 6235) //force x value to be between 0 and 500 using modulus
  },
  repeat: -1
});

var colors = ["black"];

//initially colorize each box and position in a row
gsap.set(".box", {
  backgroundColor: (i) => colors[i % colors.length],
  x: (i) => i * 145
});


gsap.to(".box", {
  duration: 70,
  ease: "none",
  x: "+=6235", //move each box 500px to right
  modifiers: {
    x: gsap.utils.unitize(x => parseFloat(x) % 6235) //force x value to be between 0 and 500 using modulus
  },
  repeat: -1
});


var colors = ["black"];

//initially colorize each box and position in a row
gsap.set(".box-larger", {
  backgroundColor: (i) => colors[i % colors.length],
  x: (i) => i * 410
});


gsap.to(".box-larger", {
  duration: 180,
  ease: "none",
  x: "+=35260", //move each box 500px to right
  modifiers: {
    x: gsap.utils.unitize(x => parseFloat(x) % 35260) //force x value to be between 0 and 500 using modulus
  },
  repeat: -1
});







  



