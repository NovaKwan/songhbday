input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
    for (let index = 0; index <= 14; index++) {
        basic.showLeds(`
            . # . # .
            . . # . .
            . . # . .
            . # # # .
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
basic.forever(function () {
	
})
