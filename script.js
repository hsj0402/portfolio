var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, element) {
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }

    for (let i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-tab");
    }

   
    element.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
    
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
    


