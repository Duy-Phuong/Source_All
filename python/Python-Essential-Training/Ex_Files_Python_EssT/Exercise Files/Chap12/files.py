#!/usr/bin/env python3
# Copyright 2009-2017 BHG http://bw.org/

def main():
    f = open('lines.txt')
    for line in f:
        print(line.rstrip())
    f.close()

    # cach 2
    f = open('lines.txt')
    # doc het
    print(f.read())
    # doc 4 ki tu
    # print(f.read(4))

    # chi ra vt con tro hien tai trong file
    f.seek(5)
    print(f.tell())

    print(f.name)
    print(f.closed)
    f.close()

    # write file
    f = open('test.txt', 'w+')
    f.write('This is my name!')
    f.seek(0)
    print(f.read())
    f.close()

if __name__ == '__main__': main()
