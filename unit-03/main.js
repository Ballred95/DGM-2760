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



document.querySelector('header h1').innerText = 'Guessing Game'
document.querySelector('header h2').innerText = 'Guess the number in the box! 3 or less for gold, 6 or less for silver, anything more you get bronze'
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
          attempt += 1
          document.querySelector('.trys').innerText = `trys: ${attempt}`
          document.querySelector('.feedback').innerText = `feedback: You won in ${attempt} trys!`
          
        const hide = function() {
            
            document.querySelector('img').style.visibility='hidden'
        }
        function fade(){
            document.querySelector('img').animate(keyz, 200)
            // setTimeout(hide, 401)
        }
        switch (true) {
            case (attempt < 4):
                document.querySelector('.awards').innerText = `awards: Gold`
                fade()
                setTimeout(()=>document.querySelector('img').src='./Gold_Medal_PNG_Clip_Art_Image.png', 200)
                break;
            case (attempt < 7):
                document.querySelector('.awards').innerText = `awards: Silver`
                fade()
                setTimeout(()=>document.querySelector('img').src='./Silver_Medal_PNG_Clip_Art_Image.png', 200)
                break;
            default: 
            document.querySelector('.awards').innerText = `awards: Bronze`
            fade()
            setTimeout(()=>document.querySelector('img').src='./Bronze_Medal_PNG_Clip_Art_Image.png', 200)
                break;
        }
    }
    else if (myNumber == 0 || myNumber > 15) {
        document.querySelector('.feedback').innerText = 'feedback: Number is out of range'
        document.querySelector('img').animate(keyframes, 400)
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

    




