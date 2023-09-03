
    window.addEventListener('scroll', () => {
        const header = document.querySelector('[data-scroll="header"]');
        const scrollY = window.scrollY;

        if (scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });


  