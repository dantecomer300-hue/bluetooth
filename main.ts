radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Yes)
})
radio.setGroup(1)
basic.showLeds(`
    . . # # #
    # . # . #
    . # # # .
    # . # . #
    . . # # #
    `)
basic.pause(2000)
radio.sendString("bluetooth")
