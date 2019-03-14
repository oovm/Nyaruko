# Operators

## 数学运算符(Math Operators)

- 四则运算: `+ - * /` 
- 指数 `^` 
- 模除 `//` 

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
