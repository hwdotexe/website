# Python Programming I: Handling Input
##### edited August 18, 2020

_Make it interactive!_

## Introduction
Our Hello Program is starting to come along, but it isn't quite ready yet. You might be asking yourself, "Wow, this is already perfect, what more could we possibly add?" Well, I agree that this is a true work of art, but there is always some room for improvement.

In this guide, we'll modify our program to ask the user for their name, and then use their answer in our message. That way, it can be given to all your friends rather than just Sarah.

## The Input Function
Python has a lot of functions and tools packaged with it, and one of them is the `input()` function. **Functions** are how we call the code that someone else wrote for us. `print()` is a function, `input()` is a function, and you can even make your own functions (which we will get into later). The `input()` function is especially useful to us for the Hello Program, because it will let us ask the user for some data - for their **input**. Then, Python will hand us back the user's answer, and we can do stuff with it in our own code.

Let's see an example:

![Getting input](../assets/scrolls/media/python1/idle-input1.png "Getting input")

In this code, we've changed line 1 to be `input("What is your name?")`. If we run this program, our Shell window behaves a little differently.

![Getting input 2](../assets/scrolls/media/python1/idle-input2.png "Getting input 2")

The program is **waiting for input**, and asked us to type our name. If Sarah was using this version of the program, she could type her name in the Shell window and press the Enter (or Return) key on her keyboard. After doing so, our program puts her name in the `friend_name` variable from last time, and we already know that our `print()` function uses that variable to display a name. Therefore, our program will display `Good afternoon, Sarah` like before.

If we run the program again, but this time our friend Lucas is using it, we don't have to do any extra work for his name to be displayed instead.

![Getting input 3](../assets/scrolls/media/python1/idle-input3.png "Getting input 3")

## Wrap-up
In this guide, we learned that the `input()` function can let us receive information from the user, and it can save it to a variable, which we can use for our own code.