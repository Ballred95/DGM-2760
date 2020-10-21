async function getHotelData() {
    try{
        const response = await fetch('./hotel.json')
        return await response.json()
    } catch (error) {
        console.error
    }
    
}


let hotelData = {}
getHotelData().then(data=> hotelData = data)


let hotelSelector = document.querySelectorAll('a')
hotelSelector.forEach(a=> a.addEventListener('click', hotelInfo))


function hotelInfo(e) {
    let hotelChoice = hotelData.hotels.find(hotel => {
        return e.target.id === hotel.name.toLowerCase()
    })
    document.querySelector('#hotelName').innerText = `Hotel: ${hotelChoice.name}`
    document.querySelector('#address').innerText = `Address: ${hotelChoice.address}`
    document.querySelector('#rooms').innerText = `Number of Rooms: ${hotelChoice.rooms}`
    document.querySelector('#gym').innerText = `Gym: ${hotelChoice.gym}`
    document.querySelector('#type').innerText = `Room Type: ${hotelChoice.roomType}`
    document.querySelector('#pic').setAttribute('src', hotelChoice.picture)

}

