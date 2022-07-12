const navResponse = () => {
    const burger = window.document.querySelector('header i');
    const nav = window.document.getElementById('mobile');

    burger.addEventListener('click',() => {
        if(nav.style.display === 'none') {
            nav.style.display = 'block';
        } else {
            nav.style.display = 'none';
        }
    });

}

navResponse();