const socket = io()

//Elements
const $messageForm = document.querySelector("#message-form")
const $messageFormInput = $messageForm.querySelector("input")
const $messageFormButton = $messageForm.querySelector("button")
const $sendLocationButton = document.querySelector("#send-location")
const $message = document.querySelector("#message")

//Templates
const $messageTemplate = document.querySelector('#message-template').innerHTML
const $locationMessageTemplate = document.querySelector('#location-message-template').innerHTML
const $sidebarTemplate = document.querySelector('#sidebar-template').innerHTML

//Options
const {username,room} = Qs.parse(location.search,{ignoreQueryPrefix:true})



socket.on('message',(obj) => {
    console.log(obj)

    const html = Mustache.render($messageTemplate,{
        username:obj.username,
        message:obj.text,
        createdAt:moment(obj.createdAt).format('h:mm:ss a')
    })

    $message.insertAdjacentHTML('beforeend',html)
   
})


socket.on('locationMessage',(obj) => {
    
    console.log(obj)

    const html = Mustache.render($locationMessageTemplate,{
        username:obj.username,
        url:obj.location,
        createdAt:moment(obj.createdAt).format('h:mm:ss a')
    })

    $message.insertAdjacentHTML('beforeend',html)
    
})

socket.on('roomData',({room,users}) => {
    const html = Mustache.render($sidebarTemplate,{
        room,
        users
    })

    document.querySelector("#sidebar").innerHTML = html
})

$messageForm.addEventListener('submit',(e)=>{
        e.preventDefault()

         //disabled
        $messageFormButton.setAttribute('disabled','disabled')

        // const message = document.body.querySelector('input').value
        const message = e.target.elements.message.value
        socket.emit('sendMessage',message,(error)=>{
               
            //enabled
            $messageFormButton.removeAttribute('disabled')
            $messageFormInput.value = ''
            $messageFormInput.focus()

            if(error)
            {
                return console.log(error)
            }
            console.log("The message was delivered!")
        })
     })

$sendLocationButton.addEventListener('click',(e) => {
        e.preventDefault()
        $sendLocationButton.setAttribute('disabled','disabled')

        if(!navigator.geolocation){
            return alert('Geolocation is not supported by the browser.')
        }

        navigator.geolocation.getCurrentPosition((position)=>{
            socket.emit('sendLocation',{
                latitude:position.coords.latitude,
                longitude:position.coords.longitude
            },() => {
                $sendLocationButton.removeAttribute('disabled')
                console.log("Location shared!")
            })
        })

     })

socket.emit('join',{username,room},(error) => {
    
    if(error)
    {
        alert(error)
        location.href ='/'
    }
})     