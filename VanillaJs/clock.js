

const time = () => {
    let divGrabber = document.getElementById('clock'); 

    let d = new Date(); 

    let h = d.getHours(); 
    let m = d.getMinutes(); 
    let s = d.getSeconds(); 

    let p = document.getElementById('time'); 

    p.textContent = h + ':' + m + ':' + s

    divGrabber.appendChild(p)

setTimeout(time, 1000)
}

time()