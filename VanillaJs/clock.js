
const getCurrHour = () => {

    const divGrabber = document.getElementById('clock')

    const d = new Date(); 

    let hour = d.getHours(); 

    let hours = document.getElementById('hours')
    hours.textContent = hour; 
    divGrabber.appendChild(hours)

    getCurrMin(d, divGrabber)
}

const getCurrMin = (d, divGrabber) => {

    let mins = d.getMinutes()

    let minsPtag = document.getElementById('minutes'); 
    minsPtag.textContent = mins; 

    divGrabber.appendChild(minsPtag)
    
    getSecondOnes(d, divGrabber)
}

getCurrHour()
getCurrMin()