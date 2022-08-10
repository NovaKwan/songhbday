input.onSound(DetectedSound.Loud, function () {
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Forever)
})
input.setSoundThreshold(SoundThreshold.Loud, 100)
basic.forever(function () {
	
})
