window.onload = () => {
    console.log(11111111111);
    var baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
    function updateURL(a) {
        if (history.pushState) {
            // var baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
            var newUrl = baseUrl + '?' + a;
            history.pushState(null, null, newUrl);

        }
        else {
            console.warn('History API не поддерживается');
        }
    }


    // var clickHide = function (a, b) {  // Функція приховування по кліку 
    //     $(a).click(function (event) {
    //         $(b).hide();
    //     });

    // };

    // var clickShow = function (a, b) {  //Функція показу по кліку 
    //     $(a).click(function (event) {
    //         $(b).show();
    //     });
    // };

    var Hide = function (a) {  //Функція приховання 
        $(a).hide();
    }

    var Show = function (a) {  //Функція показу 
        $(a).show();
    }

    var Href = function (a) {
        if (window.location.href == baseUrl + '?Andrew_DescentPage#') {
            console.log(1);
            Hide('.mainPage');
            Show('.Andrew_DescentPage');
        }
        else if (window.location.href == baseUrl + '?#') {
            Hide('.Andrew_DescentPage');
            Show('.mainPage');
        };

    }

    Href()


    //Показ "Андріївський Узвіз" 

    $('.Andrew_Descent').click(function (event) {
        Hide('.mainPage');
        Show('.Andrew_DescentPage');
        updateURL('Andrew_DescentPage');

    });

    // Кнопка "Назад"
    $('.BK').click(function (event) {
        Hide('.Andrew_DescentPage');
        Show('.mainPage');
        updateURL('');
    });
    // clickHide('', '.mainPage');
    // clickShow('.Andrew_Descent', '.Andrew_DescentPage');










    // CL('.h1', '.header_menu')

    $('.header_burger').click(function (event) {
        $('.header_burger,.header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });


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



