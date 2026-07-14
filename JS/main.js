function entrar() {
    document.getElementById('bienvenida').classList.add('oculta');
}

// Animacion de entrada index
gsap.fromTo(".categoria-card", 
    {
        opacity: 0,
        y: 40
    },
    {
        duration: 2,
        opacity: 1,
        y: 0,
        stagger: 0.2,
        ease: "power2.out"
    }
)

gsap.fromTo(".hero-titulo",
    { opacity: 0, y: -20 },
    { duration: 2, opacity: 1, y: 0, ease: "power2.out" }
)

gsap.fromTo(".hero-sub",
    { opacity: 0 },
    { duration: 2, opacity: 1, delay: 0.4, ease: "power2.out" }
)