/* 
1 - criar uma let que tenha os valores pedra, papel e tesoura
2 - saber diferenciar seus valores, sendo um superior ao outro, ou igual
3 - linkar os valores aos buttons na page
4 - fazer a máquina definir um valor aleatório entre os valores definidos
5 - fazer com que a máquina defina se true = vitória nossa ou false = vitória dela com base nos valores escolhidos aleatóriamente por ela
*/

let mapping = {
    1: {
        'name':'rock',
       'weakness':2
    },
    2: {
        'name':'paper',
        'weakness':3
    },
    3: {
        'name':'scissor',
        'weakness':1
    }
}

function clicked() {
    let playerOne = Math.floor(Math.random() * (3) + 1)
    setTimeout(() => { }, 200)
    let playerTwo = Math.floor(Math.random() * (3) + 1)
    let result = null

    if (mapping[playerOne].weakness == playerTwo) {
        result = `Player one ganhou useition ${mapping[playerOne].name}`
    } else if (mapping[playerTwo].weakness == playerOne) {
        result = `Player two ganhou useition ${mapping[playerTwo].name}`
    } else {
        result = 'Empatation'
    }
    document.getElementById("square").innerHTML = result
}