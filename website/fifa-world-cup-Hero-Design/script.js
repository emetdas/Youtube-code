document.addEventListener('DOMContentLoaded', () => {
    let menu = document.querySelector('.nav_menu');
    let menu_toggle = document.querySelector('.mobile-menu-icon');
    let menu_toggle_icon = document.querySelector('.mobile-menu-icon ion-icon');
    menu_toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        menu.classList.contains('active') ?
            menu_toggle_icon.setAttribute('name', 'close-outline') :
            menu_toggle_icon.setAttribute('name', 'menu-outline');
    });
    // count-down-start
    let days = document.querySelector('.days');
    let hours = document.querySelector('.hours');
    let minutes = document.querySelector('.minutes');
    let seconds = document.querySelector('.seconds');
    const start = new Date('2022-11-20 16:00:00Z').getTime();

    function time() {
        requestAnimationFrame(time);
        const current = new Date().getTime();
        const remaining = start - current;
        let totalDay = Math.floor(remaining / 1000 / 60 / 60 / 24);
        let totalHour = Math.floor((remaining / 1000 / 60 / 60) % 24);
        let totalMin = Math.floor((remaining / 1000 / 60) % 60);
        let totalSec = Math.floor((remaining / 1000) % 60);
        days.innerText = `${totalDay < 10 ? '0' + totalDay : totalDay}`;
        hours.innerText = `${totalHour < 10 ? '0' + totalHour : totalHour}`;
        minutes.innerText = `${totalMin < 10 ? '0' + totalMin : totalMin}`;
        seconds.innerText = `${totalSec < 10 ? '0' + totalSec : totalSec}`;
        if (remaining < 0) {
            document.querySelector('.worldcup-count-down').innerHTML = `
         <h3 class="running">World Cup Running</h3>   
         `;
            cancelAnimationFrame(time);
        }
    }
    time();
    // count-down-end
});