# Class

## 创建类(Create)

```ts
Class A_Long_Name {
    this = A_Long_Name
}
```

## 继承类(Extends)

```ts
Class A_Long_Name {
    this=A_Long_Name
}
Class B_Long_Name Extends A_Long_Name {
    this = B_Long_Name
    super = A_Long_Name
}
```







## 混合类(Mixin)

```ts
Class A_Long_Name {
    this=A_Long_Name
}
Class B_Long_Name Extends A_Long_Name {
    this = B_Long_Name
    super = A_Long_Name
}
Class C_Long_Name Mixin B_Long_Name A_Long_Name {
    this = C_Long_Name
    father = B_Long_Name
    super = A_Long_Name
}
```

