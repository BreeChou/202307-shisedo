let showpage=1;

function displayControl(clickpage) {
  const pages = [1, 2, 3, 4];
  pages.map((page) => {
    const pagename=`page${page}`;
    const ele = document.getElementById(pagename);
    const title = document.getElementById(`pagetitle${page}`);
    if (pagename === clickpage) {
      ele.style.display = "flex";
      // title.style.backgroundColor='red';
      title.classList.add('active')
      showpage=page;
    }else{
      ele.style.display = "none";
      // title.style.backgroundColor="transparent";
      title.classList.remove('active')
    }
  });
}

function swiper(dir) {
  if(dir==='right'){
    showpage+=1
    if(showpage===5){
      showpage=1;
    }
  }else if(dir==='left'){
    showpage-=1
    if(showpage===0){
      showpage=4;
    }
  }
  displayControl(`page${showpage}`);
}

const swiper1 = new Swiper('#swiper1', {
  // Optional parameters
  // slidesPerView: 2,
  // spaceBetween: 30,
  loop: true,

 

  // Navigation arrows
  navigation: {
    // nextEl: '.swiper-button-next',
    nextEl: '#swiper-arrow-next-1',
    prevEl: '#swiper-arrow-prev-1',
  },
  breakpoints: {
    900: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    901: {
      slidesPerView: 2,
      spaceBetween: 0,
    }
  },
});

const swiper2 = new Swiper('#swiper2', {
  // Optional parameters
  // slidesPerView: 2,
  // spaceBetween: 30,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '#swiper-arrow-next-2',
    prevEl: '#swiper-arrow-prev-2',
  },
  breakpoints: {
    900: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    901: {
      slidesPerView: 2,
      spaceBetween: 0,
    }
  },
});

const swiper3 = new Swiper('#swiper3', {
  // Optional parameters
  // slidesPerView: 2,
  // spaceBetween: 30,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '#swiper-arrow-next-3',
    prevEl: '#swiper-arrow-prev-3',
  },
  breakpoints: {
    900: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    901: {
      slidesPerView: 2,
      spaceBetween: 0,
    }
  },
});
const swiper4 = new Swiper('#swiper4', {
  // Optional parameters
  // slidesPerView: 2,
  // spaceBetween: 30,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '#swiper-arrow-next-4',
    prevEl: '#swiper-arrow-prev-4',
  },
  breakpoints: {
    900: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    901: {
      slidesPerView: 2,
      spaceBetween: 0,
    }
  },

});

window.onload = function(event) {

	function callback_animated(entries) {
		Array.prototype.forEach.call(entries, function (entry) {
			if (entry.isIntersecting) {
				entry.target.classList.add('is-animate')
			} else {
				entry.target.classList.remove('is-animate')
			}
		});
	}
	const option_animated = {
		root: null,
		rootMargin: '0px',
		threshold: 0.3 //.3時，區塊進入視窗30%後才觸發
	}
	const observerAnimated = new IntersectionObserver(callback_animated, option_animated)
	const animated_ = document.querySelectorAll('.g-section') //觸發的class
	Array.prototype.forEach.call(animated_, function (animated) {
		return observerAnimated.observe(animated)
	})

};


document.addEventListener('DOMContentLoaded', function () {

  anchor_calc()

  function callback_animated(entries) {
    Array.prototype.forEach.call(entries, function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-animate')
      } else {
        entry.target.classList.remove('is-animate')
      }
    });
  }
  const option_animated = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3 //.3時，區塊進入視窗30%後才觸發
  }
  const observerAnimated = new IntersectionObserver(callback_animated, option_animated)
  const animated_ = document.querySelectorAll('.g-section,.counter') //觸發的class
  Array.prototype.forEach.call(animated_, function (animated) {
    return observerAnimated.observe(animated)
  })

}, false);

window.addEventListener("resize", anchor_calc);

function anchor_calc(){

  let bodyRect = document.body.getBoundingClientRect()
  const is_anchors = document.querySelectorAll('.is-anchor')
  is_anchors.forEach(function(item){
    const href = item.getAttribute('href').replace(/#/g,'')
    let href_top = document.getElementById(href).getBoundingClientRect().top - bodyRect.top
    item.addEventListener('click',function(e){
      window.scrollTo({
        top: href_top,
        behavior: "smooth",
      })
      e.preventDefault()
    })
  })

}

