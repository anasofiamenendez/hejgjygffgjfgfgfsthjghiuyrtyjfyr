input.onButtonPressed(Button.A, function () {
    numero1 += 1
    basic.showNumber(numero1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("adiós :(")
})
input.onButtonPressed(Button.B, function () {
    numero1 += -1
    basic.showNumber(numero1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("hola! :)")
})
let numero1 = 0
numero1 = randint(1, 5)
basic.forever(function () {
	
})
