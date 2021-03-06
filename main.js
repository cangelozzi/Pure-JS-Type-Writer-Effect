// // constructor Function(span from HTML, 'words' and 'wait' are "data-" attribute in span)

// const TypeWriter = function(txtElement, words, wait = 3000) {
//   this.txtElement = txtElement;
//   this.words = words;
//   this.txt = "";
//   this.wordIndex = 0; // index for the words array, set to the first one
//   this.wait = parseInt(wait, 10); // parse time so that is always an integer
//   this.type(); // method with logic
//   this.isDeleting = false; // state of the effect going back deleting word
// };

// // type method
// TypeWriter.prototype.type = function() {
//   // current index of words
//   const currentWord = this.wordIndex % this.words.length;
//   // get full text of currentWord
//   const fullTxt = this.words[currentWord];

//   // check if word is deleting
//   if (this.isDeleting) {
//     // Remove character
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//   } else {
//     // Add a character
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//   }

//   // output word every 0.5s
//   this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

//   // initial type speed
//   let typeSpeed = 300;

//   // type speed faster when deleting back the word
//   if (this.isDeleting) {
//     typeSpeed /= 2;
//   }

//   // If word is complete
//   if (!this.isDeleting && this.txt === fullTxt) {
//     typeSpeed = this.wait; // pause at the end of the typed word
//     this.isDeleting = true; // Deleting can start
//   } else if (this.isDeleting && this.txt === "") {
//     this.isDeleting = false;
//     // move to next word
//     this.wordIndex++;
//     // pause start typing again
//     typeSpeed = 500;
//   }

//   // call type method every 0.5 sec
//   setTimeout(() => this.type(), typeSpeed);
// };

// // initialize Dom, same as window onload
// document.addEventListener("DOMContentLoaded", init);

// // init app
// function init() {
//   const txtElement = document.querySelector(".txt-type");
//   const words = JSON.parse(txtElement.getAttribute("data-words")); // string is parsed to array/obj
//   const wait = txtElement.getAttribute("data-wait");

//   // initialize type writer
//   new TypeWriter(txtElement, words, wait);
// }

//! using ES6 CLASS

class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0; // index for the words array, set to the first one
    this.wait = parseInt(wait, 10); // parse time so that is always an integer
    this.type(); // method with logic
    this.isDeleting = false; // state of the effect going back deleting word
  }

  // type method
  type() {
    // current index of words
    const currentWord = this.wordIndex % this.words.length;
    // get full text of currentWord
    const fullTxt = this.words[currentWord];

    // check if word is deleting
    if (this.isDeleting) {
      // Remove character
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add a character
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // output word every 0.5s
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // initial type speed
    let typeSpeed = 300;

    // type speed faster when deleting back the word
    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait; // pause at the end of the typed word
      this.isDeleting = true; // Deleting can start
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // move to next word
      this.wordIndex++;
      // pause start typing again
      typeSpeed = 500;
    }

    // call type method every 0.5 sec
    setTimeout(() => this.type(), typeSpeed);
  }
}

// initialize Dom, same as window onload
document.addEventListener("DOMContentLoaded", init);

// init app
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words")); // string is parsed to array/obj
  const wait = txtElement.getAttribute("data-wait");

  // initialize type writer
  new TypeWriter(txtElement, words, wait);
}
