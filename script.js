var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

console.log("tabLinks", tabLinks);
console.log("tabContents", tabContents);

function openTab(tabName, element) {
  console.log("tabName", tabName);
  console.log("element", element);

  for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].classList.remove("active-link");
  }

  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].classList.remove("active-tab");
  }

  element.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}


// function([string1, string2],target id,[color1,color2])    
function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  let letterCount = 0;
  let currentWordIndex = 0;
  let waiting = false;
  const target = document.getElementById(id);

  function typeSentence() {
    if (waiting) return;

    if (letterCount < words[currentWordIndex].length) {
      target.innerHTML = words[currentWordIndex].substring(0, letterCount + 1);
      letterCount++;
    } else {
      waiting = true;
      setTimeout(() => {
        waiting = false;
        letterCount = 0;
        currentWordIndex = (currentWordIndex + 1) % words.length;
        target.innerHTML = '';
      }, 1000);
    }
  }

  setInterval(typeSentence, 120);
}

consoleText(['MERN Stack Developer', 'Wordpress Developer', 'Software Developer'], 'text', ['#ff0000', '#00ff00', '#0000ff']);



const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const closeIcon = document.getElementById('closeIcon');
const menuItems = document.querySelectorAll('#menu a');

hamburger.addEventListener('click', function () {
    menu.classList.add('open');
});

closeIcon.addEventListener('click', function () {
    menu.classList.remove('open');
});

menuItems.forEach(item => {
    item.addEventListener('click', function () {
        menu.classList.remove('open');
    });
});



document.getElementById('toggleButton').addEventListener('click', function(e) {
  e.preventDefault();
  const work4 = document.getElementById('work4');
  const button = document.getElementById('toggleButton');
  
  if (work4.style.display === 'none') {
      work4.style.display = 'flex';
      button.textContent = 'See less';
  } else {
      work4.style.display = 'none';
      button.textContent = 'See more';
  }
});

