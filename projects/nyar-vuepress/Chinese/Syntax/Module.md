# Module & Namespace

Using, Exposing 体系

有模块载入, 符号载入和头文件载入

一般不建议使用头文件


## 导入模块

```ts
Using module;
Using "./utils" As ;

module.function()
```


寻路原则

合法的模块名只能有下划线和大小写字母, 此种情况可以省略引号

路径必须加字符串, 以 "./" 开头表示本路径.



@ 开头的

此处不能使用 `File` 对象(因为还没定义),  必须使用 unix 式字符串



### 使用模块别称

```ts
Using module As alias;

%%%
✔️alias.function()
❌module.function() 
%%%
```

### 使用模块符号

```ts
Using module With {function As f, symbol, class};

%%% 
✔️module.function() 
❌function()
✔️f()
%%%
```

### 使用模块所有符号

```ts
Using module All;

%%% 
✔️module.function() 
✔️function()
%%%
```

### 加载头文件

```ts
Using "head.n" Instance;

%%% 
❌️module.function() 
✔️function()
%%%
```

## 导出符号

```ts
Exposing { function As f, symbol, class };
```

如果不带 Exposing 这个文件将被视为空文件.

这样的文件无法作为模块, 一般作为头文件被引入

## 路由中继

```ts
Exposing "./utils";
Exposing "./src" With {function As f} 
```

注意符号的模块路由会被更改为本文件

且本文件中看不见被中继的符号

Nyar 中没有类似 ES 中 ` 的中继用法

## 命名冲突

除关键词以外的符号名都能作为模块名或别称

模块冲突会立即报错终止运行. 

已经被用掉的模块名有:

```ts
Module, System, Internal, External, Experimental, Language


NeuralNetwork, Math,
```

符号如果发生冲突将会发出 Warning, 同时当前符号被覆盖, 只能通过全称使用.

所有内置符号都有对应模块防撞, 如果没有特别说明就是, 挂载在 Internal 模块中
