const videoElement = document.getElementById('video')
const button = document.getElementById('button')

// Prompt to select media stream, pass to video element, then play

async function selectMediaStream(){
    try{
        //Cung cấp quyền share màn hình
        const mediaStream = await navigator.mediaDevices.getDisplayMedia()
        videoElement.srcObject = mediaStream
        videoElement.onloadedmetadata=()=>{
            videoElement.play()
        }
    }
    catch(error){
        console.log("Da co loi")
    }
}

button.addEventListener('click', async()=>{
    //Disable Button
    button.disabled = true

    //Start Picture in Picture
    await videoElement.requestPictureInPicture()

    //Reset button
    button.disabled = false
})

selectMediaStream()