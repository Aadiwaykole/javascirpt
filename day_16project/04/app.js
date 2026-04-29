const div  = document.querySelector("div");

// let time = new Date();

// div.textContent = time.toLocaleTimeString();


// time is not changing means seconds so that 
//use setinterval 

setInterval(()=>{
    let time = new Date();

    div.textContent = time.toLocaleTimeString();
},1000);