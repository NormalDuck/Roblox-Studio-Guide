---
sidebar_position: 2
description: The syntax of lua
---

# Syntax
:::note what you will learn
- Getting familar with onecompiler
- Trying to print values in output
- Code comments
:::

---

## Hello, World!
The first thing you will see in the compiler is this code. 

```lua
print("Hello, World!")
```

This code will print in the output "Hello, World!" which is a common thing that most programs often start with. Now on the top right corner press `RUN`. That will run the code you provided with a output of `Hello, World!`. Welcome to your first script! Simple as that!

## Code comments
Often you would want write comments or notes to yourself that won't affect your codebase. Either its for helping other people understand your code or for your future self edit the code again. It will be a guidance that could help you and others pick up and understand your code more quickly.

Now lets delete our `print("hello world")` code and leave everything blank. Then write this as our first code comment!

```lua
--print("hello world")
```

Try running the code. If there isn't output of anything then you're getting this right! Code comments aren't supposed to do anything or affect your code in any way. 

:::tip How to use comments efficiently
You *shouldn't* use code comments for **all** of your code. Instead, only comment to code that is *confusing* to you or other people. Also code comments can be used for **documentation** which is something we will take about later.
:::

:::warning
for using `--` as your code comment **only allows** a single line comment. Attempting to write something that couldn't be identified from the program will result in a error.
:::

---
### Multi-line comments
Now what if you want to write a multi-line comment. We can't just make a *new line* every time we want to say something. Or make the code comment *unreasonably long* that you need to scroll right to read all the comments. This is where **multi-line comments** come in handy.

```lua
--[[
no way this is a 
multi-line comment!
]]
```

:::note
in *any* programming language that supports code comments (hopefully all programming languages have it 😅) you could write **anything** inside the comment. Including emojis and special characters. Code comments **do not** affect the execution speed of code. If you write a whole block of code that is pure comments it is completely fine.
:::