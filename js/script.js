$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, .menu, .header__social').toggleClass('active');
        $('body').toggleClass('lock');
        $('.menu').toggleClass('open');
    });
    $('.menu__link').click(function (event) {
        $('.header__burger, .menu, .header__social').removeClass('active');
        $('body').removeClass('lock');
    });

    $('.question__block--title, support__block--title').click(function (event) {
        if ($('.question__block').hasClass('one')) {
            $('.question__block--title').not($(this)).removeClass('active');
            $('.question__block--text').not($(this).next()).slideUp(300);

        }
        $(this).toggleClass('active').next().slideToggle(300);

    });
});

// ==========================================================================================
$(document).ready(function () {
    const blocksToShow = 4; 
    let visibleBlocks = blocksToShow;

    function showNextBlocks() {
        $('.advantages__item.advantages__item--hidden').slice(0, blocksToShow).slideDown();
        visibleBlocks += blocksToShow;

        if (visibleBlocks >= $('.advantages__item.advantages__item--hidden').length + blocksToShow) {
            $('#showMoreButton').hide();
        }
    }

    $('#showMoreButton').on('click', showNextBlocks);

    if (visibleBlocks >= $('.advantages__item').length) {
        $('#showMoreButton').hide();
    }
});



// ==========================================================================================
const tabsBtn = document.querySelectorAll(".support__tab-btn");
const tabsItems = document.querySelectorAll(".support__inner");

tabsBtn.forEach(onTabClick);

document.querySelector('.support__tab-btn').click();

function onTabClick(item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('active')) {
            tabsBtn.forEach(function (item) {
                item.classList.remove('active');
            });

            tabsItems.forEach(function (item) {
                item.classList.remove('active');
            });

            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}


