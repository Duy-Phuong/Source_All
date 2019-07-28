#!/usr/bin/env python3
# Copyright 2009-2017 BHG http://bw.org/

def main():
    animals = { 'kitten': 'meow', 'puppy': 'ruff!', 'lion': 'grrr',
        'giraffe': 'I am a giraffe!', 'dragon': 'rawr' }
    print_dict(animals)

    dic = {'key':'value', ('K', 'E', 'Y'):5}
    dic1 = {x: x + 1 for x in range(10)}
    print(dic)
    print(dic1)
    print(dic.keys())
    print(dic1.values())
    print(dic['key'])
    dic[1] = 5
    dic['new'] = 'new value'
    print(dic)
    del dic[1]
    print(dic)
    dic.clear()
    print(dic)

# Shallow copy
    myDic = {'key1':12, 'key2':23}
    myDic1 = myDic
    myDic1['key1'] = 24
    print(myDic)
    print(myDic1)


def print_dict(o):
    for x in o: print(f'{x}: {o[x]}')

if __name__ == '__main__': main()
