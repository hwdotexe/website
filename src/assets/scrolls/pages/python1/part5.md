# Python Programming I: Functions
##### edited August 18, 2020

_We can be cool, too!_

## Introduction
In the last guide, I mentioned that we can create our own functions in Python - much like the functions we're already using (`print()` and `input()`).

For this guide, let's create a new Python file to keep our code in.

## Defining a New Function
In programming, when we create a function, we call that piece of code the **function definition**. Just like how a dictionary has a definition for a word, we have a definiton for a function. Let's create a simple function that prints out "Hello, world!" to the Shell:

```Python
def sayHello():
    print("Hello, world!")
```

That's it!

But what does it do, exactly? If we run this code now, **nothing will happen**. Let's break down what this code does:
- `def`: This is a **reserved word** in Python, and it is used to **define** a function. In short, you are telling Python that you want to write a new function definition.
- `sayHello`: This is the name of our function. **This can be anything we want**, but it follows the same rules that variable names do, so be sure you don't begin the name with a number.
- `()`: These parentheses are important for functions, which we'll go into later. For now, just remember that when you see `()` somewhere in Python, it usually means a function is nearby.
- `:`: When we're done writing the name of the function, we need to put a colon at the end. This tells the computer that whatever comes next is part of your function.

You may notice that the line `print("Hello, world!")` is **indented** below the name of our function. This is because it is "inside" our function. When code is indented, we're telling Python that the code belongs in a particular group. In this case, our group is a function. Therefore, any code we indent beneath the line `def sayHello():` belongs to the `sayHello()` function. When our function is called, **all of the indented code will run**. 

## Calling our Function
Now that our function is written, we're ready to call it!

Calling our custom function works the same way as calling any other function. To start, we need the **name** of the function, which we decided would be `sayHello`. However, we need to tell Python that this is a function and not a variable. To do that, we append a pair of parentheses `()` at the end. Our finished program should look like this:

```Python
def sayHello():
    print("Hello, world!")

sayHello()
```

Again, be sure to pay attention to **indentation**. Our function **definition** is at the top of our program, and we're calling that function **outside** of the function. We removed the indent in our code, and we placed the call at the bottom below the definition. This is because we have to _define_ the function _before_ we call it. Otherwise, Python won't know what the `sayHello()` function is.

Running our code now will print `Hello, world!` to the Shell window. Great job, you've written a function in Python!

## Function Parameters
Alright, time to revisit those mysterious parentheses at the end of a function.

It's no coincidence that the `print()` function has them, too. However, we usually put something **inside** those parentheses when we use that function. For example, `print("Hey look at me I'm a talking computer!")`. However, we're not really doing that with the `sayHello()` function.

When we add something to the inside of a function call, we call that an **argument**. Some functions have 0 arguments, while others can have several. The number of arguments a function needs is decided - you guessed it - in the **function definition**. When we talk about it from the definition's point of view, however, we call them **parameters**.

- **argument**: a value that we send to a function. It has data, and we can tell what it is.
- **parameter**: a _placeholder_ inside a function definition. It does not have data yet, and we can't tell what it is.

Let's modify our function by adding **a new parameter**. This will allow us to pass in a String as an **argument** when we call the function later.

```Python
def sayHello(message):
    print(message)

sayHello("Hello, world!")
```

Pretty nifty, eh?

We gave the `sayHello()` function a new parameter, which we decided would be named `message`. This parameter acts like a variable, and we can do things with it in the same way. In our case, we decided to print the parameter. In short, we can describe our function as "a function that prints anything passed into it."

Then, outside of the function, we called our function with an **argument**, which was a String. When Python runs our code, that string is _passed into_ our function, where it is stored inside the `message` parameter. Then, the `print()` function reads what is stored inside the parameter, and it prints it to the Shell.

## The Return keyword
Functions are great for organizing your code and making it easier to run the same code multiple times. However, functions really shine when you use the `return` keyword.

When a function returns something, it is sending a value outside its indented section. The value is "output" to somewhere else. Python sees the `return` keyword, and it places the item you send back where you called the function.

For example, let's say you had the following function:

```Python
def addTwoNumbers(number1, number2):
    result = number1 + number2
    return result
```

This function has 2 parameters: `number1` and `number2`. That means we must pass in 2 items when we call this function, separated by a comma. Inside the definition, we see that we create a new variable `result`, which is equal to the **sum** of `number1` and `number2`. Finally, we see a statement: `return result`. Remember, `result` is a variable, so this function is sending out whatever value is stored inside `result`. 

When we call this function, we can use:

```Python
addTwoNumbers(1,1)
```

But how will we know what the result was?

Thankfully, **because we used** `return`, we can assign this function's output to a variable. Let's call our variable `numberSum`:

```Python
numberSum = addTwoNumbers(1,1)
```

The final step is to `print()` our result, so let's go ahead and do that now. The final program should look like this:

```Python
def addTwoNumbers(number1, number2):
    result = number1 + number2
    return result

numberSum = addTwoNumbers(1,1)
print(numberSum)
```

What result did you see print to the Shell? Go ahead and change the arguments inside our call to `addTwoNumbers()`, and see how the result changes based on what you send it.

## Wrap-up
In this guide, we learned how to define a new function. We learned that functions can be called after they are defined, that they can have parameters, and that you can send (or `return`!) a value from a function.