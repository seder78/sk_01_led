function vsechny2 (num: number) {
    pins.digitalWritePin(DigitalPin.P0, num)
    basic.pause(cas)
    pins.digitalWritePin(DigitalPin.P1, num)
    basic.pause(cas)
    pins.digitalWritePin(DigitalPin.P2, num)
    basic.pause(cas)
    pins.digitalWritePin(DigitalPin.P9, num)
    basic.pause(cas)
}
function opak (num: number) {
    pins.digitalWritePin(DigitalPin.P9, num)
    basic.pause(cas)
    pins.digitalWritePin(DigitalPin.P2, num)
    basic.pause(cas)
    pins.digitalWritePin(DigitalPin.P1, num)
    basic.pause(cas)
    pins.digitalWritePin(DigitalPin.P0, num)
    basic.pause(cas)
}
function vsechny (num: number) {
    pins.digitalWritePin(DigitalPin.P0, num)
    pins.digitalWritePin(DigitalPin.P1, num)
    pins.digitalWritePin(DigitalPin.P2, num)
    pins.digitalWritePin(DigitalPin.P9, num)
}
let cas = 0
cas = 200
basic.forever(function () {
    vsechny2(1)
    vsechny2(0)
    opak(1)
    opak(0)
})
