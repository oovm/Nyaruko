## 类型

类型是一门语言的灵魂.

有了强大的类型系统, IDE 会变得非常的聪明, 就像和你心有灵犀一样.

为什么不写一起...

因为容易让人当场去世

我认为程序的必要逻辑与辅助信息应该分开

a::String = 1


# Basic

## 符号(Symbol)

## 字符(String)

## 实数(Number)

# Advance

## File

| Pattern               | Explanation |
| --------------------- | ----------- |
| `File(path*::String)` |             |

 常用 Mathod:

| Method   | Explanation |
| -------- | ----------- |
| `load()` | 载入        |
| `save()` | 保存        |

## URL

| Method   | Explanation |
| -------- | ----------- |
| `load()` |             |
| `save()` | 保存        |

## Stream

## Tensor

## Image

Constructor 模式:

| Pattern                  | Explanation   |
| ------------------------ | ------------- |
| `Image(path*::File|URL)` | path 表示路径 |
| `Image(array*::Tensor)`  |               |

 常用 Mathod:

| Method   | Explanation           |
| -------- | --------------------- |
| `load()` | 如果未加载则加载/下载 |
| `show()` | 绘图                  |

## Music

Constructor 模式:

| Pattern                  | Explanation   |
| ------------------------ | ------------- |
| `Music(path*::File|URL)` | path 表示路径 |

 常用 Mathod:

| Method   | Explanation           |
| -------- | --------------------- |
| `load()` | 如果未加载则加载/下载 |
| `play()` | 播放                  |


# Math

## 表达式(Expression)

Constructor 模式:

| Pattern                          | Explanation  |
| -------------------------------- | ------------ |
| `Expression(n*::Matrix[Number])` | (系数, 次数) |

 常用 Mathod:

| Method            | Explanation               |
| ----------------- | ------------------------- |
| `to_latex()`      | 尝试给出其 $\LaTeX$ 表达式 |
| `to_polynomial()` | 尝试特化为多项式对象      |


## 多项式(Polynomial)

Constructor 模式:

| Pattern                          | Explanation  |
| -------------------------------- | ------------ |
| `Polynomial(n*::Matrix[Number])` | (系数, 次数) |

## 级数(Series)

Constructor 模式:

| Pattern                      | Explanation |
| ---------------------------- | ----------- |
| `Series(n*::Matrix[Number])` |             |

## 轮换(Cycle)

Constructor 模式:

| Pattern           | Explanation |
| ----------------- | ----------- |
| `Cycle(l*::List)` |             |

## 群(Group)

Constructor 模式:

| Pattern            | Explanation |
| ------------------ | ----------- |
| `Group(c*::Group)` |             |

## 张量(Tensor)

# DeepLearning

## NeuralNetwork.NDArray

## NeuralNetwork.Layer

## NeuralNetwork.Graph

## NeuralNetwork.Data



