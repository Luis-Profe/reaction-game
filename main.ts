input.onPinPressed(TouchPin.P2, function () {
    if (!(game_started)) {
        basic.showString("A")
        puntA += 1
        game_started = false
        muestrspuntos()
    }
})
function muestrspuntos () {
    basic.clearScreen()
    basic.pause(500)
    tiempo = input.runningTime() - inicio
    basic.showNumber(tiempo / 1000)
    basic.pause(3000)
    basic.showNumber(puntA)
    basic.showString("A")
    basic.pause(1000)
    basic.clearScreen()
    basic.showNumber(puntB)
    basic.showString("B")
    basic.pause(1000)
    basic.clearScreen()
}
input.onPinPressed(TouchPin.P1, function () {
    if (!(game_started)) {
        basic.showString("B")
        puntB += 1
        game_started = false
        muestrspuntos()
    }
})
let inicio = 0
let tiempo = 0
let game_started = false
let puntB = 0
let puntA = 0
puntA = 0
puntB = 0
basic.forever(function () {
    game_started = false
    basic.pause(randint(1000, 5000))
    game_started = true
    basic.showIcon(IconNames.Heart)
    inicio = input.runningTime()
    while (game_started) {
        if (input.pinIsPressed(TouchPin.P1)) {
            basic.showString("A")
            puntA += 1
            game_started = false
            muestrspuntos()
        } else {
            if (input.pinIsPressed(TouchPin.P2)) {
                basic.showString("B")
                puntB += 1
                game_started = false
                muestrspuntos()
            }
        }
    }
    basic.clearScreen()
})
