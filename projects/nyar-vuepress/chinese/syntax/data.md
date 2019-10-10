

## 数据容器

| Name   | Literal | Function |
| ------ | ------- | -------- |
| 字符串 | `"  "`  | String   |
| 元组   | `(  )`  | Tuple    |
| 集合   | `(| |)` | Set      |
| 列表   | `[  ]`  | List     |
| 区块   | `{  }`  | Block    |
| 字典   | `<| |>` | Dict     |
| 队列   |         | Queue    |
| 栈     |         | Stack    |

## 数据结构

| 数据容器 | 可变数据 | 可变长度 | 可变类型 | 自我嵌套 | 特殊属性 |
| :------- | :------: | :------: | :------: | :------: | :------- |
| String   |    ✔️    |    ✔️    |    ❌     |    ❌     |
| Vector   |    ✔️    |    ❌     |    ❌     |    ❌     |
| Tuple    |    ❌     |    ✔️    |    ✔️    |    ✔️    |
| List     |    ✔️    |    ✔️    |    ✔️    |    ✔️    |
| Array    |    ✔️    |    ✔️    |    ❌     |    ✔️    |
| Set      |    ✔️    |    ✔️    |    ✔️    |    ✔️    | 不可重复 |
| Queue    |    ✔️    |    ✔️    |    ❌     |    ❌     |
| Sequence |          |          |          |          |
| Dict     |    ✔️    |    ✔️    |    ✔️    |    ✔️    | HashMap  |


## 三目运算

Symbol = Tuple = assignable

a = (x,y,z) = assignable
(x,y,z) = a = assignable

SYMBOL SYMBOL

a := b = assignable

a := a = assignable

(b,a,*) = return(a,b,c)

