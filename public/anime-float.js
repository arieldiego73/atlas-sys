const script = document.createElement("script");
script.src =
  "https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js";
script.onload = () => {
  anime({
    targets: ".anime-float-large",
    translateY: [
      { value: -10, duration: 3000 },
      { value: 0, duration: 3000 },
    ],
    easing: "easeInOutSine",
    loop: true,
    direction: "alternate",
  });

  anime({
    targets: ".anime-float-small",
    translateY: [
      {
        value: () => anime.random(-12, -3),
        duration: () => anime.random(3000, 400),
      },
      {
        value: () => anime.random(10, 0),
        duration: () => anime.random(2500, 1000),
      },
    ],
    easing: "easeInOutSine",
    loop: true,
    direction: "alternate",
  });
};
document.head.appendChild(script);
