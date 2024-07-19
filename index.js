const btnChiste = document.getElementById("btnChiste")
constchiste = document.getElementById("chiste")

btnChiste.addEventListener("click",generateJoke)

async function generateJoke(){
    const res = await fetch('https://icanhazdadjoke.com/',{
        Headers:{
            'Accept':'application/json'
        }
    })
    const data = await res.json()
    chiste.innerHTML = data.joke
    console.log(data)
}