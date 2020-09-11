document.querySelector('.banner > h1').innerHTML = 'Inspector closeau'
document.querySelector('.banner > h2').innerHTML = 'Looking for Clues'


window.setInterval(()=> {
    document.querySelector('#window').innerHTML = `the window is ${innerWidth} by ${innerHeight} and the window offset is ${window.screenX} from left and ${window.screenY} from top.`
  }, 100);

  let pageUrl = window.location.href;

  document.querySelector('#url').innerHTML = `the page url is ${pageUrl}`

  const title = document.querySelector('title').innerHTML

  document.querySelector('#docu').innerHTML = `Last update was ${document.lastModified}, and the document title is: ${title}`


