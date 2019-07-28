#!/usr/bin/env python3
# Copyright 2009-2017 BHG http://bw.org/

def main():
    game = [ 'Rock', 'Paper', 'Scissors', 'Lizard', 'Spock' ]
    print_list(game)
    print(game*2)
    print(game + [4])
    print(game[:2])
    game.append(6)
    game.pop(0)
    print(game)
    print(len(game))

    # list function
    print(list(map(lambda x: x**2 + 2, [1, 2, 3])))
    print(list(filter(lambda x: x<2, [1, 2, 3])))



    # tuple
    print("====== TUPLES ========== ")
    tup  = (1, 'a', 2, 3)
    tup1 = 1, True, 'a'
    print(tup[0:2])
    tup = tup + (5,)
    print(tup)
    print(5 in tup)
    for x in tup:
        print(x)

def print_list(o):
    for i in o: print(i, end=' ', flush=True)
    print()

if __name__ == '__main__': main()
