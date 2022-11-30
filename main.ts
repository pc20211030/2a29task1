input.onButtonPressed(Button.A, function () {
    for (let myImage = 0; myImage <= 1; myImage++) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    }
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    while (true) {
        led.stopAnimation()
    }
})
loops.everyInterval(100, function () {
	
})
