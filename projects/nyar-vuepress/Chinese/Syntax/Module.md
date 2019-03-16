# Module & Namespace

Using, Exposing 体系


## 导入模块

```ts
Using "module";
Using "./utils";

module.function()
```

### 使用模块别称

```ts
Using "module" As alias;

%%%
✔️alias.function()
❌module.function() 
%%%
```

### 使用模块符号

```ts
Using "module" With {function As f, symbol, class};

%%% 
✔️module.function() 
❌function()
✔️f()
%%%
```

### 使用模块所有符号

```ts
Using "module" All;

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

## 模块路由中继

```ts
Exposing "./utils.n";
```

## 命名冲突

