function toggleClass(el, c) {
    if (!el.classList.contains(c))
        el.classList.add(c);
    else el.classList.remove(c);
}

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('navbar-burger');
    const menu = document.getElementById('navbarMenuHeroA');
    const footer = document.getElementById('hero-foot');
    console.log(burger, menu, footer);
    burger.addEventListener('click', () => {
        // Toggle the is-active class on the burger and menu.
        toggleClass(burger, "is-active");
        toggleClass(menu, "is-active");
        // Toggle the is-hidden class on the hero footer.
        toggleClass(footer, "is-hidden");
    });
});