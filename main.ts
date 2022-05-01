let tiempo = 0
let inicio = 0
let game_started = false
let puntA = 0
let puntB = 0
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
        } else {
            if (input.pinIsPressed(TouchPin.P2)) {
                basic.showString("B")
                puntB += 1
                game_started = false
            }
        }
    }
    tiempo = input.runningTime() - inicio
    basic.clearScreen()
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
})
