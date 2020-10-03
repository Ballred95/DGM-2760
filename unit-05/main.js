// creat 4 tree array
let trees = ['oak', 'Pine', 'aspen', 'Bald cypress' ]
const errorElem = document.querySelector('.error')
const displayResults = document.querySelector('.displayResults')


document.querySelector('.lowercase').onclick = () => {
     trees = trees.toString().toLowerCase().split(',')
     listTrees()
   
}

// display trees in display results
const listTrees = () => {
    let treeList = ''
    trees.forEach(tree => {
        treeList += `<h3>${tree}</h3> <br/>`

    })
    displayResults.innerHTML = `${treeList} <span>treelist is ${trees.length} long </span>`
}

listTrees()



document.querySelector('.add-redwood').onclick = () => {
    document.querySelector('.errors').innerHTML = ''
    trees.push('redwood')
    listTrees()
}

document.querySelector('.add-pear').onclick = () => {
    document.querySelector('.errors').innerHTML = ''
    trees.unshift('pear')
    listTrees()
}

document.querySelector('.rm-1').onclick = () => {
    trees.length > 0 ? trees.shift() : document.querySelector('.errors').innerHTML = '<h2>No trees to delete</h2>'
    listTrees()
}

document.querySelector('.rm-2').onclick = () => {
    trees.length > 1 ? trees.splice(1, 1) : document.querySelector('.errors').innerHTML = '<h2>No trees to delete</h2>'
    listTrees()
}

document.querySelector('.rm-last').onclick = () => {
    trees.length > 0 ? trees.splice(-1, 1) : document.querySelector('.errors').innerHTML = '<h2>No trees to delete</h2>'
    listTrees()
}

document.querySelector('.sort').onclick = () => {
    trees.sort()
    listTrees()
}

document.querySelector('.tree-3').onclick = () => {
    trees.length > 2 ? document.querySelector('.errors').innerHTML = `<h2>${trees[2]}</h2>` : document.querySelector('.errors').innerHTML = '<h2>No trees in 3</h2>'
}

document.querySelector('.tree-4').onclick = () => {
    trees.length > 3 ? document.querySelector('.errors').innerHTML = `<h2>${trees[3]}</h2>` : document.querySelector('.errors').innerHTML = '<h2>No trees in 4</h2>'
}


