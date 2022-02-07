$(document).ready(function () {


  const cursor = document.querySelector('.cursor');

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  })


  $('.submenu-trigger > a, .layer-wrap').click(function() {
    $('.header').toggleClass('opened');
    $('.header-submenu').fadeToggle(300);
    $('.layer-wrap').fadeToggle(300);
  })



  if (mediaChecker('min', 992)) {
    $('.home__frame-image').height($('.section__scroll').outerHeight());
  } else {
    $('.home__frame-image').height('unset');
  }

  $('.mobile-submenu-trigger').click(function(){
    $('.submenu-mobile').slideToggle();
    $(this).toggleClass('opened');
  })

  $(".hamburder-wrapper").click(function () {
    if ($(".hamburger").hasClass("is-active")) {
      setTimeout(function () {
        $(".hamburger").toggleClass("is-active");
        $(".header__mobile").toggleClass("active");
        $(".main__screen").toggleClass("open__header");
        $("html").toggleClass("overflowed");
      }, 1500);
    } else {
      $(".hamburger").toggleClass("is-active");
      $(".header__mobile").toggleClass("active");
      $(".main__screen").toggleClass("open__header");
      $("html").toggleClass("overflowed");
    }
  });

  var video = $("video");

  video.each(function (i, e) {
    let video = $(e);
    let btn = $(e).parent().find(".video-btn");
    console.log(btn);

    btn.click(function () {
      if (video[0].paused) {
        video[0].play();
        video[0].controls = true;
        btn.hide();
      }
    });
    video.click(function (e) {
      e.preventDefault();
      if (!video[0].paused) {
        video[0].controls = false;
        video[0].pause();
        btn.show();
      }
    });

    video.on("ended", function () {
      btn.show();
    });
  });
  var header = document.querySelector(".header");
  var sticky = header.offsetTop;
  function stickHeader() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  // media actions
  }
  mediaActions();
  stickHeader();
  window.onscroll = function () {
    stickHeader();
    

  }
  
  window.onmousemove = function() {
    $('._changed').each(function() {
      let $object = $(this);
      let x       = $object[0].getBoundingClientRect().x;
      let y       = $object[0].getBoundingClientRect().y;

      let element_from_point = elementsFromPoint(x, y).find((el) => {
        return $(el).data("layer");
      });
      if (element_from_point) {
        let l = element_from_point.dataset.layer;
        if (l !== undefined) {
          if (l == 1) {
            $object.addClass("color-changed");
          } else {
            $object.removeClass("color-changed");
          }
        } else {
          $object.removeClass("color-changed");
        }
      } else {
        $object.removeClass("color-changed");
      }
    })
  }
  window.onresize = function () {
    mediaActions();
  };
  function mediaActions() {
    let margin = parseInt($(".container").css("margin-left")) + 20 + "px";

    if (mediaChecker("min", 992)) {
      $(".home__frame-content").css("margin-right", `${margin}`);
      $(".whyus__frame-content").css("margin-left", `${margin}`);
    } else {
      $(".home__frame-content").css("margin-right", `0`);
      $(".whyus__frame-content").css("margin-left", `0`);
      // $(".overflowed").removeClass("overflowed");
      // $(".main__screen").removeClass("open__header");
      // $(".hamburger").removeClass("is-active");
    }
    $('.submenu-inner').css('margin-left', `${$('.submenu-trigger')[0].getBoundingClientRect().left}px`)
    if (mediaChecker("max", 550)) {
      $(".whatwedo-image").css({
        "padding-top": `${$(".whatwedo-image img").height() - 100}px`,
      });
    } else {
      $(".whatwedo-image").css({
        "padding-top": `${$(".whatwedo-image img").height() - 200}px`,
      });
    }
    $(".n-found").css("height", `calc(100% - ${$(".header").height()}px)`);

    $(".header__mobile--inner").css({
      top: `${$(".header").height()}px`,
      height: `calc(100% - ${$(".header").height()}px)`,
    });
    if (mediaChecker('min', 992)) {
      $('.search-input').width(`${$('.select__wrapper').width()}`)
    }
    

    $('.fcfqm_describe-inner').css('margin-left', `${parseInt($('.container').css('margin-left')) - parseInt($('.h-container').css('margin-left'))}px`)









  }

  function mediaChecker(max_min, resolution, width = "width") {
    return window.matchMedia(`(${max_min}-${width}: ${resolution}px)`).matches;
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    if (anchor.getAttribute("href").length > 1) {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });      
    }

  });


  $(".table-btn, .cross, .layer-out").click(function (e) {
    e.preventDefault();
    $(".layer").fadeToggle();
  });

  let select = $(".select-item select");
  select.each(function (i, e) {
    new SlimSelect({
      select: e,
      showSearch: false,
    });
  });


  var blockAlignContL = document.querySelectorAll(".align_animation-containerL");
  var blockAlignContR = document.querySelectorAll(".align_animation-containerR");
  var blockAlignL = document.querySelectorAll(".align_animationL");
  var blockAlignR = document.querySelectorAll(".align_animationR");



if (mediaChecker('min', 768)) {


  if (blockAlignL) {
    for (var i = 0; i < blockAlignL.length; i++) {
          gsap.to(blockAlignL[i], {
            x: 0,
            ease: Power0.easeNone,
            scrollTrigger: {
              trigger: blockAlignContL[i],
              start: "-50%",
              end: "80%",
              scrub: true,
            },
          });  
    }
  }

  if (blockAlignR) {
    for (var i = 0; i < blockAlignR.length; i++) {
        gsap.to(blockAlignR[i], {
          x: 0,
          ease: Power0.easeNone,
          scrollTrigger: {
            trigger: blockAlignContR[i],
            start: "-50%",
            end: "80%",
            scrub: true,
          },
        }); 
    }

  }  
}


  var opac = document.querySelectorAll(".opac");
  var opacMain = document.querySelectorAll(".opacMain");
  for (var i = 0; i < opac.length; i++) {
    let _opac = opac[i];
    let targ = $(_opac).parent();
    gsap.fromTo(
      _opac,
      { opacity: 0 },
      {
        opacity: 1,
        stagger: 0.1,
        duration: 0.7,
        delay: 0.25,
        scrollTrigger: {
          trigger: targ,
          start: "top 90%",
        },
      }
    );
  }


  if (opacMain) {
    for (var i = 0; i < opacMain.length; i++) {
      let _opac = opacMain[i];
      let _delay = $(opacMain[i]).data("delay");
      gsap.fromTo(
        _opac,
        { opacity: 0 },
        {
          opacity: 1,
          stagger: 0.1,
          duration: 1,
          delay: _delay,
          scrollTrigger: {
            trigger: _opac,
            start: "top 90%",
          },
        }
      );
    }
  }

  const tl = gsap.timeline({ paused: true, reversed: true });
  tl.to(".opacMenu", {
    x: 0,
    opacity: 1,
    duration: 0.35,
    stagger: 0.20,
    delay: 0.2,
  });
  $(".hamburder-wrapper").on("click", function () {
    if (tl.reversed()) {
      tl.play();
    } else {
      tl.reverse();
    }
  });


  var grows = document.querySelectorAll(".grows");
  for (let i = 0; i < grows.length; i++) {
    let _grows = grows[i];

  }

  gsap.fromTo(
    grows,
    { scale: 0.1, opacity: 0 },
    {
      opacity: 1,
      scale: 1,
      stagger: 0.1,
      duration: .5,
      delay: .2,
      scrollTrigger: {
        trigger: grows,
        start: "top 90%",
      },
    }
  );



  function changeActiveTab(
    _this,
    selectorTabWrap,
    selectorTabContent,
    selectorTabLink,
    classLinkActive
  ) {
    _this
      .closest(selectorTabWrap)
      .querySelectorAll(selectorTabLink)
      .forEach((element) => {
        element.classList.remove(classLinkActive);
      });

    _this.classList.add(classLinkActive);

    const indexTab = [..._this.parentElement.children].indexOf(_this);
    const newActiveTabContent = _this
      .closest(selectorTabWrap)
      .querySelectorAll(selectorTabContent)[indexTab];

    _this
      .closest(selectorTabWrap)
      .querySelectorAll(selectorTabContent)
      .forEach((element) => {
        element.classList.add("hidden-block");
      });

    newActiveTabContent.classList.remove("hidden-block");
  }
  // trigger for comments
  document.querySelectorAll(".table-tab").forEach((element) => {
    element.addEventListener("click", function (e) {
      e.preventDefault();
      let _this = this;
      changeActiveTab(
        _this,
        ".indices__table--inner form",
        ".table-body",
        ".table-tab",
        "active"
      );

      return false;
    });
  });

  function elementsFromPoint(x, y) {
    var elements = [],
      previousPointerEvents = [],
      current,
      i,
      d;

    if (typeof document.elementsFromPoint === "function")
      return document.elementsFromPoint(x, y);
    if (typeof document.msElementsFromPoint === "function")
      return document.msElementsFromPoint(x, y);

    // get all elements via elementFromPoint, and remove them from hit-testing in order
    while (
      (current = document.elementFromPoint(x, y)) &&
      elements.indexOf(current) === -1 &&
      current != null
    ) {
      // push the element and its current style
      elements.push(current);
      previousPointerEvents.push({
        value: current.style.getPropertyValue("pointer-events"),
        priority: current.style.getPropertyPriority("pointer-events"),
      });

      // add "pointer-events: none", to get to the underlying element
      current.style.setProperty("pointer-events", "none", "important");
    }

    // restore the previous pointer-events values
    for (i = previousPointerEvents.length; (d = previousPointerEvents[--i]); ) {
      elements[i].style.setProperty(
        "pointer-events",
        d.value ? d.value : "",
        d.priority
      );
    }

    // return our results
    return elements;
  }


	$('.share-btn').on('click', function() {
		$('.social_share_Wrapper').toggleClass('active');
		return false;
	})



  $('.information-screen').hover(function() {
    if (mediaChecker('min', 551)) {
      $('.cursor').toggleClass('is-active');
    }
  })
  $('a, button').hover(function() {
    $('.cursor').toggleClass('hover');
  })

  gsap.to('.x-y',
  {
    xPercent: 20,
    ease: "none",
    scrollTrigger: {
      trigger: ".information-screen",
      scrub: 1,
      // base vertical scrolling on how wide the container is so it feels more natural.
      // end: "+=3500",
    }
  })
});
