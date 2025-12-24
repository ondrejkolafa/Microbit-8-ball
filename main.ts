input.onGesture(Gesture.Shake, function () {
    music.play(music.stringPlayable("A - G - F - E C ", 300), music.PlaybackMode.UntilDone)
    ano_ne = randint(0, 100)
    if (ano_ne < 40) {
        basic.showIcon(IconNames.Yes)
    } else if (ano_ne < 80) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showLeds(`
            . # # . .
            # . . # .
            . . # . .
            . . . . .
            . . # . .
            `)
    }
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
let ano_ne = 0
basic.showIcon(IconNames.Happy)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(300)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(300)
})
