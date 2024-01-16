/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Daki A.B
 * Created on: Jan 2024
 * This program does the Iron man thing by setting up a proximity beacon and a gesture shake to act as the repulsor shooting
*/

// variables
let signal: number = 0

// on start (from Micro:bit proximity beacon)
radio.setGroup(11)
radio.setTransmitPower(1)
basic.forever(function () {
  radio.sendString('1')
  basic.pause(200)
})

// On shake flash '!'
input.onGesture(Gesture.Shake, function () {
  basic.showString('!')
  basic.pause(200)
})

// Check recieved signal strength and if signal strength is less than -60 display '*'
radio.onReceivedString(function (receivedString) {
  basic.clearScreen()
  signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
  if (signal <= -60) {
    basic.showString('*')
    basic.pause(200)
  }
})
