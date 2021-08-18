console.log('Client side script loaded')


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')
const messageFour = document.querySelector('#message-4')
const messageFive = document.querySelector('#message-5')

messageOne.textContent=''
weatherForm.addEventListener('submit',(e) =>{
    e.preventDefault()
    const location = search.value
    messageOne.textContent ='Loading...'
    messageTwo.textContent = ''
    fetch('http://localhost:3000/weather?address=' + location).then((response)=>{
        response.json().then((data)=>{
            if (data.error) {
                messageOne.textContent =data.error
                messageTwo.textContent=''
                // console.log(data.error)
            } else {
                messageOne.textContent=data.location
                let j1 = data.forecast.body.daily[1]
                let dateJ1 = new Date(j1.dt*1000)

                let j2 = data.forecast.body.daily[2]
                let dateJ2 = new Date(j2.dt*1000)

                let j3 = data.forecast.body.daily[3]
                let dateJ3 = new Date(j3.dt*1000)

                messageTwo.innerHTML='Temp&eacute;rature: ' + Math.round(data.forecast.body.current.temp) + ' °C ' +  'Humidit&eacute;: ' + data.forecast.body.current.humidity + '% ' + data.forecast.body.current.weather[0].description
                messageThree.innerHTML = '<p><b>' + dateJ1.toLocaleDateString("fr-FR") + '</b>' + ' Temp&eacute;rature:' +  Math.round(j1.temp.day) + ' °C' + ' Humidit&eacute;:' + j1.humidity + '% ' + j1.weather[0].description +'</p>'
                messageFour.innerHTML = '<p><b>' + dateJ2.toLocaleDateString("fr-FR") + '</b>' + ' Temp&eacute;rature:' +  Math.round(j2.temp.day) + ' °C' + ' Humidit&eacute;:' + j2.humidity + '% ' + j2.weather[0].description +'</p>'
                messageFive.innerHTML = '<p><b>' + dateJ3.toLocaleDateString("fr-FR") + '</b>' + ' Temp&eacute;rature:' +  Math.round(j3.temp.day) + ' °C' + ' Humidit&eacute;:' + j3.humidity + '% ' + j3.weather[0].description +'</p>'


                // console.log(data)
            }
        })
    })



    console.log(location)
})