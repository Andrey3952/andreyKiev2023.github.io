$(document).ready(function () {
    $('.header_burger').click(function (event) {
        $('.header_burger,.header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.list_menuLi').click(function (event) {
        $('.header_burger,.header_menu').removeClass('active');
        $('body').removeClass('lock');
    });

});


window.onload = () => {
    const scrollBtn = document.querySelector('.isShowBtn')
    window.onscroll = () => {
        if (window.scrollY > 1000) {
            scrollBtn.classList.remove('isShowBtn_hide');
        } else if (window.scrollY < 700) {
            scrollBtn.classList.add('isShowBtn_hide');
        }
    }
    scrollBtn.onclick = () => {
        window.scrollTo(0, 0)
    }
}

