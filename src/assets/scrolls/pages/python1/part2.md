# Python Programming I: Data Types
##### edited July 7, 2020

_Exploring some important concepts in Python code._

## Introduction
Welcome back! Now that we've tested IDLE and written a Hello World program, let's dive a little bit deeper.  
Data Types are a big deal in programming, and will be used for the rest of this series. There are a few different types of data we can work with, and you're already familiar with them. Let's look at a breakdown of what they are and how they're different:

#### Booleans
The simplest data type is the **Boolean**, and you already know what it is. If someone tells you that `1 + 1 = 5`, you'd know that was **False**. Right? Hopefully so. Anyway, if they told you that `1 + 1 = 2`, obviously that one's **True**.  
Booleans are simply **True** or **False**, and can't have any other value. They work like a light switch, in that the light is either ON or OFF. It can't ever be both, and there isn't any other position it can be in, either. If something is **not True**, then it must be **False**, and vice-versa. 

#### Numbers
Numbers are the next data type. Any number you can think of counts as a valid number in Python. However, numbers need to be specific, and there are a few different kinds:
- **Integers** are any whole number. `1`, `17`, `-4`, and `1000` are all valid Integers.
- **Floats** are any numbers with a decimal point. `2.0`, `-18.3`, and `502.34` are all valid Floats.
- **Complex** are numbers with a real and imaginary part. This guide won't go into Complex numbers, so we'll focus on the other two.

Specifying which type of number something is can be important, and some programs may need to know this in order to work.

#### Strings
Wait, you can sew with Python?!  
Well, not quite. **Strings** aren't exactly the threads in your t-shirt. Strings in Python are actually letters, words, and sentences. You can put whatever you want inside them - even numbers! Strings are considered **literal**, which means that they literally mean what they say.

Do you remember our Hello World program from last time? Here's the code again to refresh your memory:

```Python
print("Hello, world!")
```

Take a look at those quotation marks (`"`) around `Hello, world!`. The golden rule of Strings is that **anytime you see quotation marks, the items inside are a String**. Python is nice and puts Strings in a different color for us, too, so Strings are easier to spot in our code.

## Playing with Data Types
Now that we've covered the basic data types, let's go back to our IDLE window and print more things to our screen. Instead of printing a String, let's print an Integer like this:

![Printing an Integer](../assets/scrolls/media/python1/idle-integer.png "Printing an Integer")

After running your command (press Enter or Return on your keyboard), what does Python print out? Because the `print()` function prints out whatever we tell it, we probably got an Integer back, like this:

![Printed an Integer](../assets/scrolls/media/python1/idle-integer-printed.png "Printed an Integer")

Do you see the difference between this program and the Hello World program? When we printed Hello World, we put it in quotation marks like this: `"Hello, world!"`. Those quotation marks turned it into a String, so Python could print it.

Without the quotation marks, Python will throw an error. Go ahead and give that a try, and you'll see what I mean:

![Error Printing](../assets/scrolls/media/python1/idle-string-error.png "Error Printing")

Why does Python throw an error when we forget the quotation marks? The full answer will be explained later on, but the quick answer for now is that Python thinks the letters in "Hello, world!" are a different data type. Since we meant them as a String, Python got confused, and it didn't run the program. Lots of beginner programmers make this mistake, so it's good to know about it so we can avoid doing the same thing. And if you do ever make that mistake, that's okay! Understanding why it happens should help you avoid this in the future.

## Wrap-up
In this guide, we learned some data types in Python, we learned that we can print different types on the screen, and we learned about a common mistake to avoid when using Strings.

In the next guide, we'll take this even further and begin using these data types in bigger programs.