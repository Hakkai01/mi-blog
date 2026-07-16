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

// Registrar ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

ScrollTrigger.refresh()

// Animacion de entrada para articulos
gsap.utils.toArray("article").forEach(function(article) {
    gsap.fromTo(article,
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
                trigger: article,
                start: "top 75%",
            }
        }
    )
})