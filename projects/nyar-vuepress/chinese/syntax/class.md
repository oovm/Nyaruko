# Class

## 创建类(Create)

```ts
class A_Long_Name {
  this = A_Long_Name;
  A_Long_Name(name) {
    this.name = name;
  }
}
```

## 继承类(Extends)

```ts
class A_Long_Name {
  this = A_Long_Name;
}
class B_Long_Name extends A_Long_Name {
  this = B_Long_Name;
  super = A_Long_Name;
}
```

## 混合类(Mixin)

```ts
class A_Long_Name {
    this=A_Long_Name
}
class B_Long_Name extends A_Long_Name {
    this = B_Long_Name
    super = A_Long_Name
}
class C_Long_Name Mixin B_Long_Name A_Long_Name {
    this = C_Long_Name
    father = B_Long_Name
    super = A_Long_Name
}
```
