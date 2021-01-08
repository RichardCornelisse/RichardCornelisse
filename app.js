const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

tl.to(".text", { y: "0%", duration: 1.7, stagger: -0.5 });
tl.to(".text", {delay: 3, opacity: 0, duration: 0.7, stagger: -0.2, ease: "power2.inOut"});
tl.to(".text", {display: "none"});
tl.to(".hide2", {display: "block"});
tl.to(".hide2", {opacity: 1, duration: 1.8, stagger: 0.3, ease: "power2.inOut"});
