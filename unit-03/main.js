
const keyframes = [
     { transform: 'translate(1px, 1px) rotate(0deg)' },
   { transform: 'translate(-1px, -2px) rotate(-1deg)' },
   { transform: 'translate(-3px, 0px) rotate(1deg)' },
    { transform: 'translate(3px, 2px) rotate(0deg)' },
   { transform: 'translate(1px, -1px) rotate(1deg)' },
   { transform: 'translate(-1px, 2px) rotate(-1deg)' },
    { transform: 'translate(-3px, 1px) rotate(0deg)' },
   { transform: 'translate(3px, 1px) rotate(-1deg)' },
   { transform: 'translate(-1px, -1px) rotate(1deg)' },
  { transform: 'translate(1px, 2px) rotate(0deg)' },
   { transform: 'translate(1px, -2px) rotate(-1deg)' }
  ];

const hide = function() {
    document.querySelector('img').style.visibility='hidden'
}



function handleClick() {
    document.querySelector('img').animate(keyframes, 400)
    // setTimeout(hide, 301);
    
}

