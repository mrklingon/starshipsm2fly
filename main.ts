input.onButtonPressed(Button.A, function () {
    system += 1
    if (system > maxsys) {
        system = 0
    }
    basic.showNumber(system)
})
input.onButtonPressed(Button.B, function () {
    nm = Systems[2 * system]
    dst = Systems[1 + 2 * system]
    basic.showString("" + (nm))
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("" + (dst))
})
let dst = ""
let nm = ""
let system = 0
let maxsys = 0
let Systems: string[] = []
Systems = [
"Proxima Centauri#",
"4.2465",
"Wolf 359#",
"7.856",
"Lalande 21185",
"8.304",
"Epsilon Eridani",
"10.489",
"Lacaille 9352#",
"10.724",
"Ross 128",
"11.007",
"Struve 2398 B#",
"11.491",
"Groombridge 34 A#",
"11.619",
"Epsilon Indi A",
"11.867",
"Tau Ceti#",
"11.912"
]
maxsys = 9
system = 9
