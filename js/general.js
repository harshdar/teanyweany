$(document).ready(function(){
 	gsap.from(".vegitables-left-top", {offset: 300, rotation:360, duration: 2 , scale:0.5, transformOrigin:"left 50%"});
 	gsap.from(".vegitables-right-top", {rotation:360, duration: 2 , scale:0.5, transformOrigin:"right 50%"});
 	gsap.from(".vegitables-left-middle", {rotation:360, duration: 2 , scale:0.5, transformOrigin:"left 50%"});
 	gsap.from(".vegitables-right-middle", {rotation:360, duration: 2 , scale:0.5, transformOrigin:"right 50%"});
 	gsap.from(".vegitables-left-bottom", {rotation:360, duration: 2 , scale:0.5, transformOrigin:"left 50%"});
 	gsap.from(".vegitables-right-bottom", {rotation:360, duration: 2 , scale:0.5, transformOrigin:"right 50%"});
});