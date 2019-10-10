# Operators

## 数学运算符(Math Operators)

当双方都是 Number 类型时

### 常数

```ts
Import Math.Constant Instance
```

或者使用 unicode 输入 \:

| Name         | Symbol      | Remark   |
| :----------- | :---------- | :------- |
| 虚数单位     | Imi         | \i       |
| 圆周率       | Pi          | \pi      |
| 自然常数     | ℯ           | \e       |
| 无穷         | ∞           | \inf     |
| 欧拉麦克劳林 | γ           | \eulerM  |
| 黄金分割率   | GoldenRatio | \GoldenF |






### 前缀式

| Name     | Symbol | Remark          |
| :------- | :----- | :-------------- |
| 相反数   | `-x`   |                 |
| 算术取反 | `~x`   | 类型必须是 Byte |
| 逻辑否定 | `!x`   | 类型必须是 Bool |

### 后缀式

详见 [数字表示](\Syntax\#2)

### 中缀式

| Name     | Symbol   | Remark  |
| :------- | :------- | :------ |
| 加法     | `x + y`  |         |
| 减法     | `x - y`  |         |
| 乘法     | `x * y`  |         |
| 除法     | `x / y`  |         |
| 整除     | `x ÷ y`  |         |
| 模除     | `x // y` |         |
| 指数     | `x ^ y`  |         |
| 开根号   | `x √ y`  | y^(1/x) |
| 按位与   | `x & y`  |         |
| 按位或   | `x | y`  |         |
| 逻辑异或 | `x ⊻ y`  |         |
| 算术右移 | `x >> y` |         |
| 算术左移 | `x << y` |         |
	


+=  -=  *=  /=  \=  ÷=  %=  ^= 

向量化 +. -. *. /.

>=

<=








## 数学函数

### Basic

sin    cos    tan    cot    sec    csc

sqrt exp log power


### Advacne

```ts
Import Math.Advacne Instance
```

加 d 表示弧度版本

sinh   cosh   tanh   coth   sech   csch
asin   acos   atan   acot   asec   acsc
asinh  acosh  atanh  acoth  asech  acsch
sinc   cosc
sind   cosd   tand   cotd   secd   cscd
asind  acosd  atand  acotd  asecd  acscd

```ts
Import Math.Special Instance
```

https://github.com/JuliaMath/SpecialFunctions.jl/blob/master/docs/src/index.md


还有一堆 Unicode 数学符号

## 加减乘除

## 函数(Functions)

### f(x)

小括号 () 用于表示函数调用或者规定语义

符号 `f(x)` 作用就像你想的那样

### f@x

符号 `@` 是 f(x) 的简写, 懒人必备, 前缀式为 Construct

```ts
f@x => f(x)
```

### f@@g@x

符号 `@@` 表示强结合, g 不会先作用在 x 上, 而是与 f 发生作用.

f 一般是个柯里化函数, 前缀式为 Annotation

```ts
    f@@g@x
        => f @ @g(x) => f(g)(z)
```

### f@@@g@x

符号 `@@@` 在 Mathematica 中很常用, f 会替换掉 g 然后与 x 作用.

f 一般是个柯里化函数, 前缀式为 Apply

```ts
f@@@g@x => f(x)
```

### g=f(x)

你可能把这个叫做赋值, 不过这个其实叫绑定...

(a, b)=(b, a) 可以交换值

(a, b)=(b, a)=(a, b)=(b, a) 这样的奇葩行为是 UB...

### g:=f(x)

惰性绑定, 右边实际没有求值, 每次都会重新求值

### f(x*):=x

真正的函数定义, `x*` 是个模式

函数通过模式匹配来定义.

### f(x*, args**):= x + args.a

还是通过模式匹配来定义函数, `args**` 匹配一个或多个, 允许没有.

### f(x*, args***):= x + args.a

同上, 但不允许没有参数, 避免 Null 异常.

### g=f(x=s)

偏函数, 当然如果只有 x 一个参数名那会直接变成常量.

事实上你可以理解为一个参量改变了预设, 不过你实际上不能改变预设.

g 是另外一个函数了, 已经不能再次改变名为 x 的参量了.

