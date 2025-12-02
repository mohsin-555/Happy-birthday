var pages = document.getElementsByClassName('page');

// Set z-index for pages
for(var i = 0; i < pages.length; i++) {
  if (i % 2 === 0) {
    pages[i].style.zIndex = (pages.length - i);
  }
}

// Function to animate text word by word
function animateText(paragraph) {
  var text = paragraph.getAttribute('data-text');
  if (!text) return;
  
  // Split by line breaks first
  var lines = text.split('<br>');
  paragraph.innerHTML = '';
  
  lines.forEach(function(line, lineIndex) {
    var words = line.trim().split(' ');
    
    words.forEach(function(word, wordIndex) {
      var span = document.createElement('span');
      span.className = 'word';
      span.textContent = word;
      span.style.animationDelay = ((lineIndex * words.length + wordIndex) * 0.3) + 's';
      paragraph.appendChild(span);
      
      // Add space after word (except last word in line)
      if (wordIndex < words.length - 1) {
        paragraph.appendChild(document.createTextNode(' '));
      }
    });
    
    // Add line break with spacing after each line except the last
    if (lineIndex < lines.length - 1) {
      var lineBreak = document.createElement('span');
      lineBreak.className = 'line-break';
      paragraph.appendChild(lineBreak);
    }
  });
}

// Initialize text animations and page clicks
document.addEventListener('DOMContentLoaded', function() {
  // Animate all paragraphs
  var paragraphs = document.querySelectorAll('p[data-text]');
  paragraphs.forEach(function(p) {
    animateText(p);
  });
  
  // Add click handlers
  for(var i = 0; i < pages.length; i++) {
    pages[i].pageNum = i + 1;
    pages[i].onclick = function() {
      if (this.pageNum % 2 === 0) {
        this.classList.remove('flipped');
        this.previousElementSibling.classList.remove('flipped');
      } else {
        this.classList.add('flipped');
        this.nextElementSibling.classList.add('flipped');
      }
    }
  }
});