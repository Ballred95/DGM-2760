// animation
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







function handleClick() {
    document.querySelector('img').animate(keyframes, 400)
    
    
}

// animation




const secretNumber = Math.floor((Math.random() * 15) + 1);
    console.log(secretNumber)



let attempt = 0

    function plays() {
    
    let myNumber = document.querySelector('#guess').value
    if (myNumber == secretNumber) {
        let keyz = [
            { opacity: 1 },
            { opacity: 0}
          ];
        const hide = function() {
            
            document.querySelector('img').style.visibility='hidden'
        }
        function fade(){
            document.querySelector('img').animate(keyz, 400)
            setTimeout(hide, 401)
        }
        switch (true) {
            case (attempt < 3):
                fade()
                break;
            case (attempt < 7):
                fade()
                break;
            default: fade()
                break;
        }
    }
    else if (myNumber == 0 || myNumber > 15) {
        document.querySelector('.feedback').innerText = 'feedback: Number is out of range'
    }
    else if (myNumber > secretNumber) {
        attempt += 1
        document.querySelector('.trys').innerText = `trys: ${attempt}`
        document.querySelector('.feedback').innerText = 'feedback: too high'
        document.querySelector('img').animate(keyframes, 400)

        
    }
    else if (myNumber < secretNumber) {
       attempt += 1
       document.querySelector('.trys').innerText = `trys: ${attempt}`
       document.querySelector('.feedback').innerText = 'feedback: too low'
        document.querySelector('img').animate(keyframes, 400)
        
    }
    }

    




