```ts
Import External.Language.Mathematica as math
math.abs(-2)
```

然后会发送一个请求, 类似这样的

```ts
{
    "Language": "Mathematica",
    "Type": "FunctionCall",
    "Input": {
        "Abs[${1}]"
    },
    "Output": "External.Language.Mathematica.Phraser.number",
    "Error": "External.Language.Mathematica.error_handler"
}
```

然后收到计算结果以后交给解析函数解析
