#!/usr/bin/env python3
# Copyright 2009-2017 BHG http://bw.org/

def main():
    a = set("We're gonna need a bigger boat.")
    b = set("I'm sorry, Dave. I'm afraid I can't do that.")
    print_set(a)
    print_set(b)

    # |  # hợp
    # ^  # giao
    # - # hiệu

    my_set1 = set(['one', 'two', 'three', 'one'])
    my_set = set(['one', 'two', 'three', 'one'])
    my_set.add('five')
    print(my_set)

    my_set.union(my_set1)
    my_set.intersection(my_set1)
    my_set.difference(my_set1)

def print_set(o):
    print('{', end = '')
    for x in o: print(x, end = '')
    print('}')

if __name__ == '__main__': main()
