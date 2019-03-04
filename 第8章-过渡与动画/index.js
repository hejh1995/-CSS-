let p = document.querySelector('.typing');
let length = p.textContent.length;
p.style.width = length + 'ch';
p.style.animationTimingFunction = "steps(+'length'), steps(1)";
console.log(length)