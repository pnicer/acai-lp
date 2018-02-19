const init = () => {
  let navbar = $(".top-bar");
  if (window.innerWidth <= 991) {
    navbar.addClass('smaller');
  }
  window.addEventListener('scroll', function (e) {
    let distanceY = window.pageYOffset || document.documentElement.scrollTop;
    let shrinkOn = 80;
    if (distanceY > shrinkOn) {
      navbar.addClass('smaller');
    } else {
      if (navbar.hasClass("smaller") && window.innerWidth > 767) {
        navbar.removeClass("smaller");
      }
    }
  });
};
window.onload = init();


$(window).resize(function () {
  let distanceY = window.pageYOffset || document.documentElement.scrollTop;
  let header = $(".top-bar");
  if (window.innerWidth <= 991) {
    header.addClass('smaller');
  } else if (window.innerWidth > 991 && distanceY < 50) {
    header.removeClass('smaller');
  }
});

const toggleMenu = () => {
  let navbar = $(".top-bar__menu");
  if (navbar.hasClass('hidden-xs hidden-sm')) {
    navbar.removeClass('hidden-xs hidden-sm');
  } else {
    navbar.addClass('hidden-xs hidden-sm');
  }
};

// Smooth Scrolling
$(document).ready(function () {
  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    var navbar = $(".top-bar__menu");
    if (!navbar.hasClass('hidden-xs')) {
      navbar.addClass('hidden-xs');
    }
    if ($(this).hasClass('.linkInMenuBar')) {
      toggleMenu();
    }
    $(document).off("scroll");

    $('.linkInMenuBar').each(function () {
      $(this).removeClass('top-bar__menu--active');
    });
    $(this).addClass('top-bar__menu--active');

    var target = this.hash,
      menu = target;
    $target = $(target);
    var minusPx = 140;
    if (window.innerWidth <= 767) {
      minusPx = 70;
    } else {
      minusPx = 45;
    }
    $('html, body').stop().animate({
      scrollTop: $target.offset().top - 45
    }, 200, 'swing', function () {
      $(document).on("scroll", onScroll);
    });
    return false;
  });
});

function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $('#links a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top - 100 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('#links .top-bar__menu--item a').removeClass("top-bar__menu--active");
      currLink.addClass("top-bar__menu--active");
    }
    else {
      currLink.removeClass("top-bar__menu--active");
    }
  });
}
