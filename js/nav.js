const menu_btn = document.getElementById('hamburger');
    const mobile_menu = document.getElementById('primary-navigation');
    document.onclick = function(e){
        if(e.target.id !== 'primary-navigation' && e.target.id !== 'hamburger')
        {
            menu_btn.classList.remove('is-active');
            mobile_menu.classList.remove('is-active');
        }
    }
    menu_btn.onclick = function(){
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    };