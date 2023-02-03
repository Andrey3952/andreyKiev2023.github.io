
// Зміні
var baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
var subUrl = location.search.substring(1);

// Функція зміни URL
function updateURL(a) {
    if (history.pushState) {
        var newUrl = baseUrl + '?' + a;
        history.pushState(null, null, newUrl);
    } else {
        console.warn('History API не поддерживается');
    }
}

//Функція приховання 
function Hide(a) {
    $(a).hide();
}

//Функція показу
function Show(a) {
    $(a).show();
}

// Функція перевірки URL
function Href(a) {
    if (a != '' && window.location.href == baseUrl + '?' + a + '#') {
        Hide('.mainPage');

        Show('.' + a);
    } else if (window.location.href == baseUrl + '?#' || window.location.href == baseUrl) {
        Hide('.Andrew_DescentPage');
        Hide('.dom_bylgakavaPage');
        Hide('.ez_v_tymanePage');
        Show('.mainPage');
    }
};


window.onload = () => {

    addEventListener("popstate", function (e) {
        BK();
    }, false);


    // Виклик Функцій
    Href(subUrl);  // Виклик функції перевірки URL


    //Показ "Андріївський Узвіз" 
    $('.Andrew_Descent').click(function (event) {
        Hide('.mainPage');
        Hide('.dom_bylgakavaPage');
        Show('.Andrew_DescentPage');
        Hide('.ez_v_tymanePage');
        Hide('.header_burger');
        updateURL('Andrew_DescentPage');

    });

    // Показ "Дім Листовничого"
    $('.dom_bylgakava').click(function (event) {
        Hide('.mainPage');
        Hide('.Andrew_DescentPage');
        Show('.dom_bylgakavaPage');
        Hide('.ez_v_tymanePage');
        Hide('.header_burger');
        updateURL('dom_bylgakavaPage');

    });

    // Показ "Пам'ятник Їжачку в тумані"
    $('.ez_v_tymane').click(function (event) {
        Hide('.mainPage');
        Hide('.Andrew_DescentPage');
        Hide('.dom_bylgakavaPage');
        Show('.ez_v_tymanePage');
        Hide('.header_burger');
        updateURL('ez_v_tymanePage');
    });

    // Кнопка "Назад"
    var BK = $('.BK').click(function (event) {
        Hide('.Andrew_DescentPage');
        Hide('.dom_bylgakavaPage');
        Show('.mainPage');
        Show('.header_burger');
        updateURL('');
    });

    // Відкривання меню
    $('.header_burger').click(function (event) {
        $('.header_burger,.header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    // Закривання меню
    $('.list_menuLi').click(function (event) {
        $('.header_burger,.header_menu').removeClass('active');
        $('body').removeClass('lock');
    });


















    // $('.IstorichniFoto').click(function (event) {
    //     $('.mainPage').toggleClass('activeKiev');
    //     $('.h1').toggleClass('activeKiev');
    //     $('.h1IstorichniFoto').toggleClass('activeKiev');
    //     $('.istorichniFotoPage').toggleClass('activeKievIFP');
    //     $('.header_burger').toggleClass('activeKiev');
    //     $(".header_menu").toggleClass('activeKiev');
    // });

    // $('.Andrew_DescentIFP').click(function (event) {
    //     $('.istorichniFotoPage').toggleClass('activeKievIFP');
    //     $('.Andrew_DescentIF').toggleClass('activeKievIFP');
    // });

    // $('.h1IstorichniFoto, .BIF').click(function (event) {
    //     $('.istorichniFotoPage').removeClass('activeKievIFP');
    //     $('.Andrew_DescentIF').removeClass('activeKievIFP');
    //     $('.FunicularIF').removeClass('activeKievIFP');
    //     $('.istorichniFotoPage').toggleClass('activeKievIFP');

    // });

    // $('.FunicularIFP').click(function (event) {
    //     $('.istorichniFotoPage').toggleClass('activeKievIFP');
    //     $('.FunicularIF').toggleClass('activeKievIFP');
    // });

    // $('.Kyiv').click(function (event) {
    //     $('.mainPage').removeClass('activeKiev');
    //     $('.h1').removeClass('activeKiev');
    //     $('.h1IstorichniFoto').removeClass('activeKiev');
    //     $('.istorichniFotoPage').removeClass('activeKievIFP');
    //     $('.header_burger').removeClass('activeKiev');
    // });



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


    let input = document.querySelector('#input');
    input.oninput = function () {
        let valu = this.value.trim();
        let value = valu.toUpperCase();
        let list = document.querySelectorAll('.header_list li');

        if (value != '') {
            list.forEach(elem => {
                if (elem.innerText.search(value) == -1) {
                    elem.classList.add('hide');
                }
            });
        } else {
            list.forEach(elem => {
                elem.classList.remove('hide');
            });
        }
        console.log(this.value);
    };




};



