# Python Programming I: Conditionals
##### edited August 18, 2020

_If you're happy and you know it, clap your hands._

## Introduction
The final major piece that we'll cover are **conditionals**. A big part of programming is making decisions based on the data you have. If your program needs to print out one message in the morning, but a different message at night, conditionals are how you're going to do that.

So what are they?

## Remember the Boolean
Now is a great time to review the Boolean data type. You may recall that they are either `True` or `False`, but never both. Conditionals work on this idea, and can run different pieces of code depending on if something is True or False.

There are a couple different **operators** we can use to determine whether something is True or False.

- `==`: Checks if two things are equal
- `!=`: Checks if two things are not equal
- `&&`: Checks if two things are both `True`

This can be applied to conditionals as well

## The If Statement
The most fundamental conditional statement is the If statement. Let's see an example:

```Python
if 1 == 1:
    print("True!")
else:
    print("Nope :(")
```

The first line of this program asks Python a question: Is 1 equal to 1? We know this is correct, because a `==` symbol **is not the same** as our regular `=` symbol. The double equals sign is used to compare whether two items are equal to each other. The result of this comparison is a Boolean: `True` or `False`. 1 can only ever be equal to 1, so if we asked if `1 == 2`, that couldn't be true, so the result will be `False`.

If the If statement is `True`, then the first `print()` statement will be run because it is in the first code block, directly under the If statement. The second `print()` call will not be run. If the If statement is `False`, then the second `print()` will run, and the first one will not. 

Part of the If statement is the `else` keyword. This keyword says "if the If statement is False, run this code instead." Therefore, it only runs when the If statement is `False`, and it never runs when it is `True`.

### If Statements with Variables
If statements can also compare variables. Let's take a look at an example:

```Python
example1 = 1
example2 = 2

if example1 == example2:
    print("They are the same!")
else:
    print("They are not the same.")
```

In this example, we are comparing the _values_ of two variables. Those values are `1` and `2`, respectively. Because they are not the same numbers, the If statement is `False`, so the first indent is skipped, and we run the code under the `else:` statement instead.

### If Statements with Functions
If you have an important function that may decide what your program does, If statements can call that, too! Let's use the `addTwoNumbers()` function from the last guide. We'll add `10` and `5` together, and see if the result is `15`.

```Python
def addTwoNumbers(number1, number2):
    result = number1 + number2
    return result

if addTwoNumbers(10,5) == 15:
    print("It's 15!")
else:
    print("It is not 15.")
```

If you run this program, which indented piece of code (or "block", as some people call them) will run?

Notice how we don't need to put the result of `addTwoNumbers()` into a variable. Python does this for us behind the scenes, so we can jump straight to checking if the result is equal to (`==`) the number `15`. However, some programmers prefer to put the result inside a variable _anyway_, and that method will also work.

## Wrap-up
In this guide, we learned how to run different "blocks" of code depending on an If statement. We also learned that If statements can use variables and functions as well, as long as those functions have a `return` statement.