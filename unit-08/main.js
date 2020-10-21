const question = {
    stem: 'Who is buried in Grants Tomb',
    option1: 'Tom',
    option2: 'Grant',
    option3: 'Jerry',
    option4: 'bob',
    correct: 2,
    display: () => {
        document.querySelector('.answer1').innerHTML=question.option1
        document.querySelector('.answer2').innerHTML=question.option2
        document.querySelector('.answer3').innerHTML=question.option3
        document.querySelector('.answer4').innerHTML=question.option4
        document.querySelector('.stem').textContent = question.stem
    },
    check: (userChoice)=> {
        userChoice === question.correct ? document.querySelector('.feedback').textContent = 'You are correct!' : document.querySelector('.feedback').textContent = 'Wrong!' 
    }
}

document.querySelector('.answer1').addEventListener('click', ()=>question.check(1))
document.querySelector('.answer2').addEventListener('click', ()=>question.check(2))
document.querySelector('.answer3').addEventListener('click', ()=>question.check(3))
document.querySelector('.answer4').addEventListener('click', ()=>question.check(4))


question.display()