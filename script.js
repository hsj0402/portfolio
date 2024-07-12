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
      let visible = true;
      const con = document.querySelector('.console-underscore');
      let letterCount = 0;
      let waiting = false;
      const target = document.getElementById(id);
      let currentWordIndex = 0;

      target.setAttribute('style', 'color:' + colors[currentWordIndex]);

      function typeSentence() {
        if (waiting) return;

        if (letterCount <= words[currentWordIndex].length) {
          target.innerHTML = words[currentWordIndex].substring(0, letterCount);
          letterCount++;
        } else {
          waiting = true;
          setTimeout(() => {
            waiting = false;
            letterCount = 0;
            currentWordIndex = (currentWordIndex + 1) % words.length;
            target.setAttribute('style', 'color:' + colors[currentWordIndex]);
            target.innerHTML = '';
          }, 1000);
        }
      }

      setInterval(typeSentence, 120);

      setInterval(function() {
        con.classList.toggle('hidden');
        visible = !visible;
      }, 400);
    }

    consoleText(['Wordpress Developer', 'MERN Stack Developer', 'Software Developer'], 'console', ['White','White','White']);