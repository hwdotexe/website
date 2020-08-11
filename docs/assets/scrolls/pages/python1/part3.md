# Python Programming I: Variables
##### edited July 7, 2020

_Containers for your code._

## Introduction
Up until now, we've been using IDLE's Shell window to write our code. While we can still use it here, it's going to be easier to learn if we create a new Python file for this guide.

Inside IDLE, use the File menu to create a New File (as shown below)

![Creating a New File](../assets/scrolls/media/python1/idle-new-file.png "Creating a New File")

When the new file opens, it will be completely blank. You might also notice that our `>>>` symbol has disappeared. We are now writing our code inside a file editor, so we can write more at once without Python running it each time. It will also be easier to read our code and make changes, so this is a great view to get used to.

Thankfully, this file runs the same code as the Shell window. If we put our Hello World code inside, you can see that Python still recognizes it:

![Hello World](../assets/scrolls/media/python1/file-hello-world.png "Hello World")

But how do we run our code here?  
Because we can have multiple lines, the Enter/Return key doesn't work the same way. To run our code, we'll need to open the `Run` menu, and choose the `Run Module` command. Python will ask you to save your changes first, so go ahead and take a moment to save your code somewhere you'll remember. Once saved, Python will run your code, and you'll see the familiar Shell window open again as it shows us the result.

## Moving on to Variables
One of the best things about Python is that we can store some of our code inside a **Variable**. Variables are similar to data types, but they work slightly differently. We can give a Variable a name, and then save a value inside the variable to be used later.

Inside your new Python file, let's add some code to the bottom. Your completed file should look like this:

```Python
print("Hello, world!")

myVariable = 1
print(myVariable)
```

Before we run our code, what do you think Python will print out?
1. Will it print "1"?
2. Will it print "myVariable"?
3. Will it throw an error, because we didn't use quotations?

Go ahead and run the code using the `Run` menu again.

What does the result say? If everything worked, you should see that the correct answer was #1. Here is the result of our code:

![Variable output](../assets/scrolls/media/python1/file-variable-1.png "Variable output")

Didn't we _just_ try running code without quotations, and it failed? Why did this one work, and the one from the last guide did not?

The answer is that `myVariable` is a **Variable**. When we typed `myVariable = 1`, we told Python that we have something named "myVariable", and we want it to be equal to the Integer of 1. Python understood what we meant, so it didn't fail this time.

Variables are containers for a value. We can use them to store Integers, Booleans, and even Strings. To change a Variable's value, we use the equal sign (`=`), and when we talk about it, we say that we "set myVariable equal to 1". Variables can remember what value we give them, but they don't exist until we do so.

Let's change the line of code from `myVariable = 1` to `myVariable = "Hello!"`. This is going to tell Python to use a String that says "Hello!" instead of an Integer 1. When we run our code, look at how our result changes:

![Variable output](../assets/scrolls/media/python1/file-variable-2.png "Variable output")

### Variable Names
As mentioned earlier, we must give Variables a name. A Variable name can be anything we want, as long as it doesn't start with a number. For example, you can change the name of `myVariable` to `potato_salad`, or `darth_vader`, or `abc123`. The Variable name does not matter to Python, as long as you remember to change it everywhere it gets used. That means we must also change its name when we print it.

## The Hello Program
Let's start on a new program for our friend. We'll make a **new Python file** to put this program in, so we can send it to our friend easily.

Our friend wants a program that will say hello to them whenever they run it. We already know how to print things out to the screen, so this should be a piece of cake. Our program will get more complicated as we learn more tricks, so be sure to follow along on your computer as well!

Our friend's name is **Sarah**, so we think it's a good idea to put her name in a Variable so it's easy to use. We finish writing this code to print her name:

```Python
friend_name = "Sarah"
print(friend_name)
```

When we run the code, our output looks like this:

![Printing a name](../assets/scrolls/media/python1/hello-1.png "Printing a name")

That's a nice start, but it's not very friendly. We want Python to use the message `Good morning, Sarah!`. There are a couple ways we can do this. The **first option** would be to change our Variable, like this:

```Python
friend_name = "Good morning, Sarah"
print(friend_name)
```

However, there's a problem. Our Variable is named `friend_name`, and it has a lot more than just our friend's name. That might be a little confusing, and it makes it harder if we want to change the friendly message. Thankfully, Python has us covered! We can **add Variables together** to make this less confusing. Let's put our welcome message in a separate Variable, like this:

```Python
friend_name = "Sarah"
welcome_message = "Good afternoon, "
print(welcome_message + friend_name)
```

Take a step back and think about what we just changed. We took our String "Good afternoon, " and put it inside a new Variable named `welcome_message`. Then, inside our `print()` function, we _added_ it to the front, and put a `+` between our two variables. Just like how you can add two numbers together, Python can add two Strings together. Now, when we run this code, our output looks like this:

![Printing a name](../assets/scrolls/media/python1/hello-2.png "Printing a name")

That's starting to look really good!

## Wrap-up
In this guide, we learned what Variables are, how to give them a value, how to use them instead of a normal value, and how to add them together.