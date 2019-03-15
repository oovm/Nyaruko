

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

| Method | Explanation |
| ------ | ----------- |
| load() | 载入        |
| save() | 保存        |

## URL

| Method | Explanation |
| ------ | ----------- |
| load() |             |
| save() | 保存        |

## Stream

## Tensor

## Image

Constructor 模式:

| Pattern                  | Explanation   |
| ------------------------ | ------------- |
| `Image(path*::File|URL)` | path 表示路径 |
| `Image(array*::Tensor)`  |               |

## Music

# Math

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




