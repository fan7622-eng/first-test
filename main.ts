input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # . .
        . . # # .
        . # . . .
        `)
})
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    basic.showString("Hello!")
})
