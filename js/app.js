particlesJS.load("particle-bg", "js/particles-config.json");
var parent = document.getElementsByTagName('body');
var child = document.getElementById('first-section');

child.style.paddingRight = child.offsetWidth - child.clientWidth + "px";