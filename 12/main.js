const main = document.querySelector(".main")
const screen2 = document.querySelector(".screen2")
const imgClick = document.querySelector(".imgClick")
const btnReset = document.querySelector("#btnReset")

let phrases = [
    'A vida trará coisas boas se tiver paciência.',
    'Não compense na ira o que lhe falta na razão.',
    'A maior de todas as torres começa no solo.',
    'Não há que ser forte. Há que ser flexível.',
    'O bom-senso vale mais do que muito conhecimento.',
    'Sem o fogo do entusiasmo, não há o calor da vitória.'
]




imgClick.addEventListener('click', toggleScreen)
btnReset.addEventListener('click', handleResetClick)


function toggleScreen(){
    main.classList.toggle("hide")
    screen2.classList.toggle("hide")
    generatorPhrase()
}

function handleResetClick(){
    toggleScreen()
}

let phrase = document.getElementById("text-random")


function generatorPhrase(){
    let index = Math.floor((Math.random() * phrases.length))

    let divPhrase = `<div id="text-random">${phrases[index]}</div>`
    phrase.innerHTML = divPhrase
}

