let hack = 0
let losovani_celkem = 0
let losovani_aktualni_pocet = 0
let kostka = 0
input.onButtonPressed(Button.A, function () {
    hack = 1
})
basic.forever(function () {
    losovani_celkem = 50
    if (input.buttonIsPressed(Button.B)) {
        for (let index = 0; index < losovani_celkem; index++) {
            losovani_aktualni_pocet += 1
            kostka = randint(1, 6)
            if (hack == 1 && losovani_aktualni_pocet == losovani_celkem) {
                kostka = 6
                hack = 0
            }
            if (kostka == 1) {
                basic.showLeds(`
                        . . . . .
                                            . . . . .
                                            . . # . .
                                            . . . . .
                                            . . . . .
                    `, 10)
            } else if (kostka == 2) {
                basic.showLeds(`
                        . . . . .
                                            . # . . .
                                            . . . . .
                                            . . . # .
                                            . . . . .
                    `, 10)
            } else if (kostka == 3) {
                basic.showLeds(`
                        # . . . .
                                            . . . . .
                                            . . # . .
                                            . . . . .
                                            . . . . #
                    `, 10)
            } else if (kostka == 4) {
                basic.showLeds(`
                        # . . . #
                                            . . . . .
                                            . . . . .
                                            . . . . .
                                            # . . . #
                    `, 10)
            } else if (kostka == 5) {
                basic.showLeds(`
                        # . . . #
                                            . . . . .
                                            . . # . .
                                            . . . . .
                                            # . . . #
                    `, 10)
            } else if (kostka == 6) {
                basic.showLeds(`
                        # . . . #
                                            . . . . .
                                            # . . . #
                                            . . . . .
                                            # . . . #
                    `, 10)
            }
        }
        losovani_aktualni_pocet = 0
    }
})
