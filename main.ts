/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Daki A.B
 * Created on: Jan 2024
 * This program ...
*/

// variables
let signal : number = 0

// on start
radio.setGroup(11)
radio.setTransmitPower(1)
basic.forever(function () {
    radio.sendString("1")
    basic.pause(200)
})

radio.onReceivedString(function (receivedString) {
  signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
  led.plotBarGraph(
    Math.map(signal, -95, -42, 0, 9),
    9
  )
})
