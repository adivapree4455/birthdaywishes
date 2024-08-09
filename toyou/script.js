anime.timeline({
    loop: true
})
.add ({
    targets: '.message .cube',
    scale: [2, 1],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 950,
    delay: (el, i) => 70*i
})
.add ({
    targets: '.message .cube',
    scale: [1, 0],
    opacity: 0,
    duration: 950,
    easing: 'easeInQuad',
    delay: (el, i) => 70*i
})