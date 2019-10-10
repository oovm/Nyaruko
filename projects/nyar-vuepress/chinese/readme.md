---
home: true
heroImage: /hero.png
heroText: Hero 标题
tagline: Hero 副标题
actionText: 快速上手 →
actionLink: /Chinese/Syntax/
footer: MIT Licensed | Copyright © 2018-present Evan You
---

# Nyaruko(Vscode)

## Install

[VSCode](/Chinese/Syntax/)

## Contribute


```ts



一门正常语言应该具有的品质

x.0 == x[0]
x.a == x["a"]
x.y() == x::y(x)
x.y(a) == y(x, a)

x = y /// return x


```


r" "

r""" """


.5

.Infinity

slice

x[:]


## 隐式返回 RO(Return Omitted)



## 匿名函数 LF(Lambda Function)

## 广义字符串 GSL(Generalized String Literals)


## 越位规则 OSR(Off-Side Rule）

别称游标卡尺规则, 指用缩进调用而不是成对标识符如 `{` 和 `}` 或 `begin` 和 `end`

这类语言有个缺点就是不好复制粘贴

## 自由标识 CII(Case Insensitivity Identifiers)

该特性会规范化输入, 比如 `s.to_lower()`, `s.toLower()` or `s.tolower()` 都是等价的.

一举解决大小驼峰, 大小蛇式这类吵死人的问题


## CIS(Command Invocation Syntax)

Routines can be invoked without the () if the call is syntactically a statement. This command invocation syntax also works for expressions, but then only a single argument may follow. This restriction means echo f 1, f 2 is parsed as echo(f(1), f(2)) and not as echo(f(1, f(2))). The method call syntax may be used to provide one more argument in this case:

```nim
proc optarg(x: int, y: int = 0): int = x + y
proc singlearg(x: int): int = 20*x

echo optarg 1, " ", singlearg 2  # prints "1 40"

let fail = optarg 1, optarg 8   # Wrong. Too many arguments for a command call
let x = optarg(1, optarg 8)  # traditional procedure call with 2 arguments
let y = 1.optarg optarg 8    # same thing as above, w/o the parenthesis
assert x == y
```

The command invocation syntax also can't have complex expressions as arguments. For example: (anonymous procs), if, case or try. Function calls with no arguments still needs () to distinguish between a call and the function itself as a first class value.



## UFCS

## 空参省略 EAO(Empty Arguments Omitted)

Choice #4 is the ability to drop empty parens from the end of a function call: `a.len()` can be written as `a.len`.

如果这个语言支持 UFCS 的话以下输入是等价的:

`len(a)`, `a.len()` or `a.len`

```ts

const city = !apiResult
  ? undefined
  : !apiResult.office
    ? undefined
    : !apiResult.office.primary
      ? undefined
      : apiResult.office.primary.city;

```

$\begin{cases}
a \left(a^2+b c\right)+b (a c+c d)=8\\
a (a b+b d)+b \left(b c+d^2\right)=0\\
c \left(a^2+b c\right)+d (a c+c d)=0\\
c (a b+b d)+d \left(b c+d^2\right)=8\\
\end{cases}$

$\begin{aligned}
a(n+1)&=\frac{36 a(n)+28}{-49 a(n)-38}\\
a(n+1)&=\frac{-24 a(n)-7}{76 a(n)+22}\\
a(n+1)&=\frac{36 a(n)+98}{-14 a(n)-38}\\
a(n+1)&=\frac{-34 a(n)-91}{12 a(n)+32}\\
a(n+1)&=\frac{8 a(n)+28}{-3 a(n)-10}\\
a(n+1)&=\frac{36 a(n)+49}{-28 a(n)-38}\\
a(n+1)&=\frac{42-10 a(n)}{8-2 a(n)}\\
a(n+1)&=\frac{-52 a(n)-42}{62 a(n)+50}\\
a(n+1)&=\frac{-6 a(n)-1}{28 a(n)+4}\\
a(n+1)&=\frac{18 a(n)-14}{26 a(n)-20}
\end{aligned}$


