#!/usr/bin/env python3
# Copyright 2009-2017 BHG http://bw.org/


class animal():
    # name = ''
    # age = 0


    def __init__(self, name='abc', age=0):
        if(type(name) in (float, int)):
            raise Exception('No valid')
        # private variables
        self.__name = name
        self.__age = age


    def show(self):
        print('My name is ', self.__name)


    def run(self):
        print('Animal is running...')


    def go(self):
        print('Animal is going...')


class dog(animal):
    def run(self):
        print('Dog is running...')

    # def main():
myanimal = animal()
myanimal.show()
myanimal.run()
myanimal.go()
mydog = dog('Lucy')
mydog.show()
mydog.run()
mydog.go()

# Error when access private var
# myanimal.__name
# if __name__ == '__main__': main()

class Student(object):
    '''Student description'''
    num_students = 0
    def __init__(self, name):
        self.name = name
        Student.num_students += 1

    def __del__(self):
        Student.num_students -= 1

a = Student("phuong")
b = Student("long")
# delete a student
del a
print(Student.num_students)
