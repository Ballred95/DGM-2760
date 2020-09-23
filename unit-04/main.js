function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
  }

  let month = getRandomIntInclusive(1, 12)
  let fate = getRandomIntInclusive(1, 5)
  let day = getRandomIntInclusive(1, 30)

  function getMonthName(month) {
      let name 
      switch (month) {
          case 1:
              name = 'Janurary'
              break;
              case 2:
                name = 'Feburary'
                break;
                case 3:
              name = 'March'
              break;
              case 4:
              name = 'April'
              break;
              case 5:
              name = 'May'
              break;
              case 6:
              name = 'June'
              break;
              case 7:
              name = 'July'
              break;
              case 8:
              name = 'August'
              break;
              case 9:
              name = 'September'
              break;
              case 10:
              name = 'October'
              break;
              case 11:
              name = 'November'
              break;
              case 12:
              name = 'December'
              break;
          default:
              name = 'not a month'
              break;
      }

        return name
  }

  function getFortune(fate) {
      let message
      switch (fate) {
          case 1:
              message = 'be a hero'
              break;
            case 2:
            message = 'be a villian'
            break;
            case 3:
            message = 'make someones day'
            break;
            case 4:
            message = 'stub your toe'
            break;
            case 5:
            message = 'win the lottery'
            break;
    
          default:
              break;
      }

      return message
  }

  const monthName = getMonthName(month) 

  
  document.querySelector('.fortune-text').innerText= `On ${monthName} ${day}, you will ${getFortune(fate)}`
