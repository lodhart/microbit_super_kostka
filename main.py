kostka = 0

def on_forever():
    global kostka
    if input.button_is_pressed(Button.B):
        for index in range(20):
            kostka = randint(1, 6)
            if kostka == 1:
                basic.show_leds("""
                        . . . . .
                                            . . . . .
                                            . . # . .
                                            . . . . .
                                            . . . . .
                    """,
                    10)
            elif kostka == 2:
                basic.show_leds("""
                        . . . . .
                                            . # . . .
                                            . . . . .
                                            . . . # .
                                            . . . . .
                    """,
                    10)
            elif kostka == 3:
                basic.show_leds("""
                        # . . . .
                                            . . . . .
                                            . . # . .
                                            . . . . .
                                            . . . . #
                    """,
                    10)
            elif kostka == 4:
                basic.show_leds("""
                        # . . . #
                                            . . . . .
                                            . . . . .
                                            . . . . .
                                            # . . . #
                    """,
                    10)
            elif kostka == 5:
                basic.show_leds("""
                        # . . . #
                                            . . . . .
                                            . . # . .
                                            . . . . .
                                            # . . . #
                    """,
                    10)
            elif kostka == 6:
                basic.show_leds("""
                        # . . . #
                                            . . . . .
                                            # . . . #
                                            . . . . .
                                            # . . . #
                    """,
                    10)
basic.forever(on_forever)
