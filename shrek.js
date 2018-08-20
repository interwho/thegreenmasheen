'use strict';

function getRekt(element) {
  var rekt = element.getBoundingClientRect();
  return {
    top: rekt.top + document.body.scrollTop + 'px',
    left: rekt.left + document.body.scrollLeft + 'px',
    right: rekt.right + 'px',
    height: rekt.height + 'px',
    width: rekt.width + 'px'
  };
}

function doit() {
  var shreks = document.getElementsByClassName('shrek');
  while (shreks[0]) {
    shreks[0].parentNode.removeChild(shreks[0]);
  }
}

function shrekify(element, url) {
  var meme = new Image();
  meme.src = url;
  meme.className = 'shrek';
  meme.style.position = 'absolute';
  var rekt = getRekt(element);
  meme.style.zIndex = '420420';

  for (var key in rekt) {
    meme.style[key] = rekt[key];
  }

  document.body.appendChild(meme);
}

function shrekit() {
  doit();
  var SHREK_URL = chrome.extension.getURL('img/shrek.png');
  [].forEach.call(document.getElementsByClassName('faceBox'), function (victim) {
	return shrekify(victim, SHREK_URL);
  });
  [].forEach.call(document.getElementsByClassName('tagBox'), function (victim) {
	return shrekify(victim, SHREK_URL);
  });
}

window.onclick = shrekit;
setInterval(shrekit, 100)
