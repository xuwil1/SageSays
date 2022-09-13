document.querySelector("#generator").addEventListener('click', () => {
    adviceGenerator();
});


 async function adviceGenerator(){
    try{
        const res = await fetch("https://api.adviceslip.com/advice")
        const data = await res.json();
        document.querySelector(".adviceId").innerHTML= `Advice #${data.slip.id}`;
        document.querySelector(".adviceAdvice").innerHTML= `${data.slip.advice}`;
    } catch{
        document.querySelector(".adviceId").innerHTML= `Error #404`;
        document.querySelector(".adviceAdvice").innerHTML= `"Please refresh page"`;
    }

}