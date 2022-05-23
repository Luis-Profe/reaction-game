input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # . .
        # # . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(randint(3000, 6000))
    game_started = true
    basic.showIcon(IconNames.Heart)
    inicio = input.runningTime()
})
input.onPinPressed(TouchPin.P2, function () {
    if (!(game_started)) {
        basic.showString("A")
        puntA += 1
        muestrspuntos()
    } else {
        basic.showString("B")
        puntB += 1
        muestrspuntos()
        muestratiempo()
    }
})
function muestrspuntos () {
    game_started = false
    basic.clearScreen()
    basic.pause(500)
    basic.clearScreen()
    basic.showString("JugA")
    basic.showNumber(puntA)
    basic.pause(1000)
    basic.clearScreen()
    basic.showString("Jug B")
    basic.showNumber(puntB)
    basic.pause(1000)
    basic.clearScreen()
}
input.onPinPressed(TouchPin.P1, function () {
    if (!(game_started)) {
        basic.showString("B")
        puntB += 1
        muestrspuntos()
    } else {
        basic.showString("A")
        puntA += 1
        muestrspuntos()
        muestratiempo()
    }
})
function muestratiempo () {
    basic.clearScreen()
    tiempo = input.runningTime() - inicio
    basic.showNumber(Math.idiv(tiempo, 1000))
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
