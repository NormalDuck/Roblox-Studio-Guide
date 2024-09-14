---
sidebar_position: 3
description: Basic datatypes in everyday life
---

# Data types
:::note what will you learn
- Data types in lua
- How to express data types in your code
- Small introduction to variables
:::

---

## List of data types
In this lesson we will only discuss the most common data types that are being used in lua. There will be more complex types and eventually we will be discussing about the luau type system.

:::info the data types we will learn today
- `number`
- `string`
- `boolean`
- `nil`
:::

### Number
A `number` data type is represented as a number. It can be written as a `123` or with decimals `123.123`. Lua like other languages supports *hexadecimal* numbers as a way to represent numbers for example `0x20`. You can do math operations with it just like how a calculator deals with numbers.
```lua
--we can do addition by using `+` operator
print(1 + 0x20) -- 33
```
:::info different types of numbers
- `integer` refers to a whole number. Without decimal
- `floating point` refers to a number with decimals
- `signed integer` is a number that can be supports as both positive and negative
- `unsigned integer` is a number that only supports positive numbers

Lua numbers doesn't have all these special fancy words for their `number` type. But it is still used for the `buffer` library and knowing how numbers work is very important. There are more number types that I mentioned there, but that should give a very solid understanding you continue the tutorial.
:::

---

### String
A `string` is a data type that allows **anything** to be put inside it. There are built-in *libraries* that can deal with strings. And you could print out strings to make your code more polished and more human readable.
```lua
local foo = "bar" -- this is a variable, similar to scratch's variables
print('this is a string') --output: this is a string
print("doubled quoted string!") --output: double quoted string!
print([[[long string]]) --output [long string
```
:::note
There is *barely* any reason why you should use `[[]]` for writing strings. It makes your code hard to read. *Most of us* agree on using `""` to write our strings. This is because of the **styling guide** made to enforce predictable and clean code.
:::

---

### Boolean
A `boolean` data type only supports two values: `true` or `false`. Unlike strings, you *do not* need to wrap `true` and `false` into quotation marks. Boolean types are usually used to indicate if something is true or false. Similar to scratch, *usually* we would use boolean types for `if then` statements.

```lua
print(true) --output: true
print(false) --output: false
```

:::note why can't we just use strings
My personal answer (I might be wrong) is because true and false is so common, using a string will not be **as efficient** than representing it as a boolean. Since it is only `true` and `false`, some programming languages might just assign it into a 1 bit value, which reduces *memory* and makes programs run faster.
:::

---

### Nil
A `nil` value is means nothing, literally nothing. 
```lua
print(nil) --output: nil
```
:::note what can we do with nil
You might think `nil` is entirely useless. But as you dig deeper into programming nil could be more efficient than a string saying `"nothing"`. Also it *doesn't* passes through the *truthiness* check unlike strings. It can be used to remove some `keys`/`value` in the `table`, and much more! We will introduce them later in the tutorial.
:::
