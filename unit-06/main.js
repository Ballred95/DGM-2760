
 let nounArray = []
 let adjArray =[]
 let verbArray = []

const splitter = () => {
    nounArray = []
    nounArray.push(document.getElementById('nountext').value.split('\n').join(',').split(' ').join(',').split(','))
    adjArray = []
    adjArray.push(document.getElementById('adjtext').value.split('\n').join(',').split(' ').join(',').split(','))
    verbArray = []
    verbArray.push(document.getElementById('verbtext').value.split('\n').join(',').split(' ').join(',').split(','))
    story()
   
}

const story = () => {
    if(nounArray[0].length === 3 && adjArray[0].length === 3 && verbArray[0].length === 3)
    {
        document.querySelector('.story').innerHTML=(`One day there was a ${nounArray[0][0].toLowerCase()} who liked to ${verbArray[0][0].toLowerCase()}. Now, while this happened, Mr. ${nounArray[0][1].toLowerCase()} was quite ${adjArray[0][0].toLowerCase()}. This is because ${nounArray[0][2].toLowerCase()} was always left out so ${nounArray[0][2].toLowerCase()} decided to ${verbArray[0][1].toLowerCase()} ${nounArray[0][0].toLowerCase()} very ${adjArray[0][1].toLowerCase()}ingly. This made ${nounArray[0][0].toLowerCase()} feel ${adjArray[0][2].toLowerCase()} so he ${verbArray[0][2].toLowerCase()}ed ${nounArray[0][1].toLowerCase()}. The End...`)

    }

    else {document.querySelector('.story').innerHTML='Please fill out three nouns, three verbs, and three adjectives to complete the story.'}
}




