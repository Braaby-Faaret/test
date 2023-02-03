input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        # # # # #
        # . . . #
        `)
    basic.showLeds(`
        . # # # #
        # . . . .
        . # # # .
        . . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        . # . . #
        . # # # .
        . # . . .
        . # . . .
        `)
    basic.showLeds(`
        . # # # #
        . # . . .
        . # # # .
        . # . . .
        . # # # #
        `)
    basic.showLeds(`
        . # # # .
        . # . . #
        . # # # .
        . # # . .
        . # . # .
        `)
    basic.pause(1000)
})
basic.forever(function () {
    basic.showLeds(`
        . # # # .
        # . . . .
        # . . . .
        # . . . .
        . # # # .
        `)
})
