# Python Programming I: Wrap-up Exercise
##### edited August 18, 2020

_Making a simple Text Adventure Game_

## Introduction
If you've made it this far in the tutorial, then congratulations! This guide is the last in our series for an introduction to Python. This final Scroll is less of a guide, and more of an idea for further practice. We'll be making a Text Adventure Game, where the user is a player and has to make choices. Those choices will then affect the story they experience, and they can play again with different choices to discover even more.

## Getting Started
First of all, let's create a new Python file for our game. We don't know what choices we'll have to make yet, but we do know that we'll need a player's name.

```Python
playerName = input("What is your name?\n> ")
```

Notice the characters at the end: `\n> `. `\n` is a special character that represents a **new line**. This means that Python will break up the String into two lines wherever `\n` appears. I've gone ahead and added `> ` directly after the new line, so that when we ask the user for their name, they can type in a separate space in the Shell. This won't affect our game at all, but it will be nice for the user and make it less confusing.

Let's send a quick welcome to the player before the game starts.

```Python
print("Welcome, " + playerName + ". I hope you are prepared for what's ahead.")
```

## Our first choice
Let's begin our game.

Our story takes place in a mysterious forest, and our player is trying to get home before dark. However, the forest can be difficult to navigate at dusk, so they'll need some help from us.

Let's set the scene for them, and use another `input()` to get their decision.

```Python
print("You find yourself in a mysterious forest. It's getting close to dusk, and you need to find your way home.")
choice1 = input("You find a fork in the road. Do you choose right or left?\n(right/left)> ")
```

Our game is asking the user to choose the right path or the left path. In the `input()` call, I gave the player a list of choices in the parentheses. They can enter `right` or `left`. Unfortunately, we aren't safeguarding our game against the player choosing a different option, but that's a topic for another time. For now, let's just assume our user will pick one of our answers.

We need some code to handle their choice:

```Python
if choice1 == "right":
    print("You walk down the right path...")
else:
    print("You walk down the left path...")
```

Great! The player can now choose which path to walk down.

Our story needs some more help, though, so let's add another choice inside each of these paths.

```Python
if choice1 == "right":
    print("You walk down the right path...")
    choice2 = input("A giant troll stands in front of you. What do you do?\n(fight/flee)>")
else:
    print("You walk down the left path...")
    choice2 = input("A kind old lady in a pointy hat offers you a cookie. What do you do?\n(eat/flee)>")
```

Now the story is coming together! Let's add another conditional to each choice...

```Python
if choice1 == "right":
    print("You walk down the right path...")
    choice2 = input("A giant troll stands in front of you. What do you do?\n(fight/flee)>")

    if(choice2 == "fight"):
        print("You punch the troll right in the gut!")
    else:
        print("You run away from the troll!")
else:
    print("You walk down the left path...")
    choice2 = input("A kind old lady in a pointy hat offers you a cookie. What do you do?\n(eat/reject)>")
    
    if(choice2 == "eat"):
        print("You eat the old lady's cookie.")
    else:
        print("You reject the cookie.")
```

We're almost there! For this example, we'll add 4 more `print()` statements to end the story. However, I'll leave it as an exercise to the reader to **add one more choice for each branch of our adventure**. Time to get creative!

The final program looks like this:

```Python
playerName = input("What is your name?\n> ")

print("Welcome, " + playerName + ". I hope you are prepared for what's ahead.")

print("You find yourself in a mysterious forest. It's getting close to dusk, and you need to find your way home.")
choice1 = input("You find a fork in the road. Do you choose right or left?\n(right/left)> ")

if choice1 == "right":
    print("You walk down the right path...")
    choice2 = input("A giant troll stands in front of you. What do you do?\n(fight/flee)>")

    if(choice2 == "fight"):
        print("You punch the troll right in the gut!")
        print("The troll runs away, and your path is clear to get back home.")
    else:
        print("You run away from the troll!")
        print("You get hopelessly lost in the mysterious forest.")
else:
    print("You walk down the left path...")
    choice2 = input("A kind old lady in a pointy hat offers you a cookie. What do you do?\n(eat/reject)>")
    
    if(choice2 == "eat"):
        print("You eat the old lady's cookie.")
        print("The cookie was magical, and you've been turned into a gingerbread man.")
    else:
        print("You reject the cookie.")
        print("The old lady is heartbroken, but she lets you continue your journey home.")

print("Thanks for playing!")
```