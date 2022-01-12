// nav bar for smaller screens
const burger_menu = document.getElementById("toggle-menu");
const ul = document.getElementById("ul");
burger_menu.addEventListener("click", (eo) => {
  ul.classList.toggle("active-ul");
});
// search screen
const search_icon = document.getElementById("search");
const search_screen = document.getElementById("search-screen");

const cross = document.getElementById("cross");
search_icon.addEventListener("click", (eo) => {
  search_screen.classList.add("search-active");
});
cross.addEventListener("click", (eo) => {
  search_screen.classList.remove("search-active");
});
// change landing background "Slider show"
const landing = document.getElementById("landing");
const right_arrow = document.getElementById("right-arrow");
const left_arrow = document.getElementById("left-arrow");
const background_array = [
  "url('img/light.jpg')",
  "url('img/cat.jpg')",
  "url('img/moustache.jpg')",
];
const bullets = document.querySelectorAll(".bullet");
const bullets_list = document.getElementById("bullets_list");
let i = 0;
landing.style.backgroundImage = background_array[i];
right_arrow.addEventListener("click", (eo) => {
  if (i == background_array.length - 1) {
    i = 0;
    bullets_list.getElementsByClassName("active")[0].classList.remove("active");
    bullets_list.getElementsByTagName("li")[i].classList.add("active");
    landing.style.backgroundImage = background_array[i];
  } else if (i < background_array.length - 1) {
    i++;
    bullets_list.getElementsByClassName("active")[0].classList.remove("active");
    bullets_list.getElementsByTagName("li")[i].classList.add("active");
    landing.style.backgroundImage = background_array[i];
    console.log(i);
  }
});

left_arrow.addEventListener("click", (eo) => {
  if (i == 0) {
    i = background_array.length - 1;
    bullets_list.getElementsByClassName("active")[0].classList.remove("active");
    bullets_list.getElementsByTagName("li")[i].classList.add("active");
    landing.style.backgroundImage = background_array[i];
  } else if (i > 0) {
    i--;
    bullets_list.getElementsByClassName("active")[0].classList.remove("active");
    bullets_list.getElementsByTagName("li")[i].classList.add("active");
    landing.style.backgroundImage = background_array[i];
    console.log(i);
  }
});
bullets.forEach((item, index) => {
  item.addEventListener("click", (eo) => {
    i = index;
    landing.style.backgroundImage = background_array[index];
    bullets_list.getElementsByClassName("active")[0].classList.remove("active");
    item.classList.add("active");
  });
});
// profilio filter my method
const app = document.getElementById("app");
const print = document.getElementById("print");
const web = document.getElementById("web");
const photo = document.getElementById("photo");
const all = document.getElementById("all");
const profilio_container = document.getElementById("profilio-container");
const box = document.querySelectorAll(".box");
const shuffle = document.getElementById("shuffle");
const more = document.getElementById("more");
// console.log(box)
app.addEventListener("click", (eo) => {
  shuffle
    .getElementsByClassName("active-shuffle")[0]
    .classList.remove("active-shuffle");
  eo.target.classList.add("active-shuffle");
  box.forEach((item) => {
    if (item.classList.contains("app")) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

photo.addEventListener("click", (eo) => {
  shuffle
    .getElementsByClassName("active-shuffle")[0]
    .classList.remove("active-shuffle");
  eo.target.classList.add("active-shuffle");
  box.forEach((item) => {
    if (item.classList.contains("photo")) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

web.addEventListener("click", (eo) => {
  shuffle
    .getElementsByClassName("active-shuffle")[0]
    .classList.remove("active-shuffle");
  eo.target.classList.add("active-shuffle");
  box.forEach((item) => {
    if (item.classList.contains("web")) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

print.addEventListener("click", (eo) => {
  shuffle
    .getElementsByClassName("active-shuffle")[0]
    .classList.remove("active-shuffle");
  eo.target.classList.add("active-shuffle");
  box.forEach((item) => {
    if (item.classList.contains("print")) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
all.addEventListener("click", (eo) => {
  shuffle
    .getElementsByClassName("active-shuffle")[0]
    .classList.remove("active-shuffle");
  eo.target.classList.add("active-shuffle");
  box.forEach((item) => {
    item.style.display = "block";
  });
});

// more...
more.addEventListener("click", (eo) => {
  eo.preventDefault();
  profilio_container.innerHTML += ` <div class="box app">
  <img src="img/computer.jpg" alt="">
  <div class="caption">
    <h4>Awesome Image</h4>
    <p>Photography</p>
  </div>
  </div>
  <!-- box2 -->
  <div class="box print">
    <img src="img/cpu.jpg" alt="">
    <div class="caption">
      <h4>Awesome Image</h4>
      <p>Photography</p>
    </div>
    </div>
    <div class="box photo">
  <img src="img/cpu2.jpg" alt="">
  <div class="caption">
    <h4>Awesome Image</h4>
    <p>Photography</p>
  </div>
  </div>
  <!-- box2 -->
  <div class="box web">
    <img src="img/web.jpg" alt="">
    <div class="caption">
      <h4>Awesome Image</h4>
      <p>Photography</p>
    </div>
    </div>
    `;
  eo.target.style.opacity = "0.5";
  eo.target.style.cursor = "not-allowed";
});

// slider show testimonials
const bullets_test = document.querySelectorAll(
  ".testimonials .bullets .bullet"
);
const list_bull = document.querySelector(".testimonials .bullets");
const test = document.getElementById("slider");
const test_array = [
  ` <!-- box1 -->
  <div class="content">
    <img src="img/skills-01.jpg" alt="">
    <div class="text">
     Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt.
     <p>John Doe, CEO</p>
    </div>
  </div>
  <!-- box2 -->
  <div class="content">
   <img src="img/skills-02.jpg" alt="">
   <div class="text">
    Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt.
    <p>John Doe, CEO</p>
   </div>
 </div>`,
  ` <!-- box1 -->
 <div class="content">
   <img src="avatar/avatar-de-profil.png" alt="">
   <div class="text">
    Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt.
    <p>John Doe, CEO</p>
   </div>
 </div>
 <!-- box2 -->
 <div class="content">
  <img src="avatar/femme (1).png" alt="">
  <div class="text">
   Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt.
   <p>John Doe, CEO</p>
  </div>
</div>`,
  ` <!-- box1 -->
  <div class="content">
    <img src="avatar/femme-arabe.png" alt="">
    <div class="text">
     Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt.
     <p>John Doe, CEO</p>
    </div>
  </div>
  <!-- box2 -->
  <div class="content">
   <img src="avatar/homme.png" alt="">
   <div class="text">
    Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt.
    <p>John Doe, CEO</p>
   </div>
 </div>`,
];
bullets_test.forEach((item, index) => {
  item.addEventListener("click", (eo) => {
    list_bull
      .getElementsByClassName("active-bullet")[0]
      .classList.remove("active-bullet");
    item.classList.add("active-bullet");
    test.innerHTML = test_array[index];
  });
});
// progress on scroll for stats section
const stats_section = document.querySelector(".stats");
const numbers = document.querySelectorAll(".stats .box .number");

let start = false;

const increase = (el) => {
  let goal = el.dataset.stat;
  let si = setInterval(() => {
    el.innerHTML++;
    if (el.innerHTML == goal) {
      clearInterval(si);
    }
  }, 1500 / goal);
  
};


// progress on scroll in skills section
let section_skills = document.querySelector(".skills");
let spans = document.querySelectorAll(
  ".our-skills .skills .progress-holder .prog span"
);
window.onscroll = () => {
  if (window.scrollY >= section_skills.offsetTop - 600) {
    spans.forEach((item) => {
      item.style.width = item.dataset.progress;
    });
  }else  if (window.scrollY >= stats_section.offsetTop - 200){
   if (!start) {
    numbers.forEach(item => {
      increase(item)
    });
   }
   start= true
  }
};

