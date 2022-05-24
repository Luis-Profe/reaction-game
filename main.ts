input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 2; index++) {
        basic.showNumber(index + 1)
        basic.pause(1000)
    }
    basic.clearScreen()
    basic.pause(randint(3000, 6000))
    game_started = true
    basic.showIcon(IconNames.Heart)
    inicio = input.runningTime()
})
input.onPinPressed(TouchPin.P2, function () {
    if (game_started) {
        basic.showString("WinB")
        puntB += 1
        muestratiempo()
    } else {
        basic.showString("A")
        puntA += 1
    }
    muestrspuntos()
})
function muestrspuntos () {
    game_started = false
    basic.pause(500)
    basic.clearScreen()
    basic.showString("JugA")
    basic.showNumber(puntA)
    basic.pause(1000)
    basic.clearScreen()
    basic.showString("JugB")
    basic.showNumber(puntB)
    basic.pause(1000)
    basic.clearScreen()
}
input.onButtonPressed(Button.AB, function () {
    puntA = 0
    puntB = 0
})
input.onPinPressed(TouchPin.P1, function () {
    if (game_started) {
        basic.showString("WinA")
        puntA += 1
        muestratiempo()
    } else {
        basic.showString("B")
        puntB += 1
    }
    muestrspuntos()
})
function muestratiempo () {
    basic.clearScreen()
    tiempo = input.runningTime() - inicio
    basic.showNumber(Math.idiv(tiempo, 1000))
    basic.showString("s")
    basic.pause(1000)
    basic.clearScreen()
}
let tiempo = 0
let inicio = 0
let game_started = false
let puntB = 0
let puntA = 0
puntA = 0
puntB = 0
