let kostka = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        for (let index = 0; index < 20; index++) {
            kostka = randint(1, 6)
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
    }
})
