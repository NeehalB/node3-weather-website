console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msgOne = document.querySelector('#message-1')
const msgTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    const loc = search.value

    fetch('/weather?address='+loc).then((response)=>{
    response.json().then((data)=>{
        if (data.error){
            console.log(data.error)
            msgOne.textContent = data.error
        }else{
            msgOne.textContent = data.location
            msgTwo.textContent = data.forecast
        }
        // console.log(data.location)
        // console.log(data.forecast)
    })
})
})