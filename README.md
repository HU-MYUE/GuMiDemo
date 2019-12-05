 # React Native Demo
 ## 运行
 1. 在根目录下执行 npm install
 ## 说明：
 1. 所有页面已完成整合
 ## 步骤
 1. 步骤一
 2. 步骤二
```markdown已被越来越多的互联网厂商支持，github、有道云、简书、CSDN等，默认都支持md语法，因为实在是太方便了，真正做到了排版与文字分离，让你专注在文字本身。```





- [x] 跑步

  - [x] 数据备份

  - [ ] 

## 1. 标题

这是最为常用的格式，在平时常用的的文本编辑器中大多是这样实现的：输入文本、选中文本、设置标题格式。

而在 Markdown 中，你只需要在文本前面加上 `#` 即可，同理、你还可以增加二级标题、三级标题、四级标题、五级标题和六级标题，总共六级，只需要增加 `#` 即可，标题字号相应降低。例如：

```bash
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题 
```

*注：# 和「一级标题」之间建议保留一个字符的空格，这是最标准的 Markdown 写法。*

*你可以你的编辑器中尝试输入这六级标题，可以参考下方的截图：*

![img](https:////upload-images.jianshu.io/upload_images/259-7424a9a21a2cb81b.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/815/format/webp)

一级标题至六级标题

## 2. 列表

- 无序列表

语法：
 无序列表用 - + * 任何一种都可以

```undefined
- 列表内容
+ 列表内容
* 列表内容

注意：- + * 跟内容之间都要有一个空格
```

效果如下：

- 列表内容

- 列表内容

- 列表内容

  

- ##### 有序列表

语法：
 数字加点

```undefined
1.列表内容
2.列表内容
3.列表内容

注意：序号跟内容之间要有空格
```

效果如下：

1.列表内容
 2.列表内容
 3.列表内容

- ##### 列表嵌套

**上一级和下一级之间敲三个空格即可**

- 一级无序列表内容
  - 二级无序列表内容
  - 二级无序列表内容
  - 二级无序列表内容
- 一级无序列表内容
  1. 二级有序列表内容
  2. 二级有序列表内容
  3. 二级有序列表内容

1. 一级有序列表内容
   - 二级无序列表内容
   - 二级无序列表内容
   - 二级无序列表内容
2. 一级有序列表内容
   1. 二级有序列表内容
   2. 二级有序列表内容
   3. 二级有序列表内容

## 3. 链接

语法：

```csharp
[超链接名](超链接地址 "超链接title")
title可加可不加
```

示例：

```csharp
[简书](http://jianshu.com)
[百度](http://baidu.com)
```

效果如下：

[简书](https://www.jianshu.com/u/1f5ac0cf6a8b)
 [百度](http://baidu.com)

## 4. 图片

语法：

```bash
![图片alt](图片地址 ''图片title'')

图片alt就是显示在图片下面的文字，相当于对图片内容的解释。
图片title是图片的标题，当鼠标移到图片上时显示的内容。title可加可不加
```

示例：

```cpp
![blockchain](https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/
u=702257389,1274025419&fm=27&gp=0.jpg "区块链")
```

效果如下：



![img](https:////upload-images.jianshu.io/upload_images/6860761-fd2f51090a890873.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/550/format/webp)

**上传本地图片直接点击导航栏的图片标志，选择图片即可**



## 5. 引用

在引用的文字前加>即可。引用也可以嵌套，如加两个>>三个>>>
n个...
貌似可以一直加下去，但没神马卵用

示例：

```ruby
>这是引用的内容
>>这是引用的内容
>>>这是引用的内容
```

>这是引用的内容
>>这是引用的内容
>>
>>>这是引用的内容



## 6. 粗体、斜体、斜体加粗、删除线、下划线

- **加粗**

  要加粗的文字左右分别用两个*或_号包起来

- **斜体**

  要倾斜的文字左右分别用一个*号包起来

- ***斜体加粗***

  要倾斜和加粗的文字左右分别用三个*号包起来

- **删除线**

  要加删除线的文字左右分别用两个~~号包起来

- **下划线**

  用<u></u>包含文字

  示例：

  ```undefined
  **这是加粗的文字1**
  __这是加粗的文字2__
  *这是倾斜的文字1*
  _这是倾斜的文字2_
  ***这是斜体加粗的文字***
  ___这是斜体加粗的文字2___
  ~~这是加删除线的文字~~
  <u>下划线</u>
  ```

效果如下：

**这是加粗的文字1**

__这是加粗的文字2__

*这是倾斜的文字1*

_这是加粗的文字2_

***这是斜体加粗的文字1***

___这是斜体加粗的文字2___

~~这是加删除线的文字~~

<u>下划线</u>



## 7. 代码引用

语法：
 单行代码：代码之间分别用一个反引号包起来

```go
    `代码内容`
```

代码块：代码之间分别用三个反引号包起来，且两边的反引号单独占一行

```go
(```)
  代码...
  代码...
  代码...
(```)
```

> 注：为了防止转译，前后三个反引号处加了小括号，实际是没有的。这里只是用来演示，实际中去掉两边小括号即可。

示例：

单行代码

```go
`create database hero;`
```

代码块

```kotlin

    function fun(){
         echo "这是一句非常牛逼的代码";
    }
    fun();

```

效果如下：

单行代码


create database hero;
```

代码块

```kotlin
function fun(){
  echo "这是一句非常牛逼的代码";
}
fun();
```



## 8. 表格

语法：

```ruby
表头|表头|表头
---|:--:|---:
内容|内容|内容
内容|内容|内容

第二行分割表头和内容。
- 有一个就行，为了对齐，多加了几个
文字默认居左
-两边加：表示文字居中
-右边加：表示文字居右
注：原生的语法两边都要用 | 包起来。此处省略
```

示例：

```ruby
姓名|技能|排行
--|:--:|--:
刘备|哭|大哥
关羽|打|二哥
张飞|骂|三弟
```

效果如下：

| 姓名 | 技能 | 排行 |
| ---- | :--: | ---: |
| 刘备 |  哭  | 大哥 |
| 关羽 |  打  | 二哥 |
| 张飞 |  骂  | 三弟 |



##  9. 分割线

三个或者三个以上的 - 或者 * 都可以。

示例：

```undefined
---
----
***
*****
```

效果如下：
可以看到，显示效果是一样的。

---
----
***
*****



## 10. 流程图

~~~php
```flow
st=>start: 开始
op=>operation: My Operation
cond=>condition: Yes or No?
e=>end
st->op->cond
cond(yes)->e
cond(no)->op
&```
~~~

效果如下：
简书不支持流程图，所以截了个图

![img](https://upload-images.jianshu.io/upload_images/6860761-9d9524ba31047696.png?imageMogr2/auto-orient/strip|imageView2/2/w/751/format/webp)

## 11. 上标、下标

x<sub>2</sub>

O<sup>2</sup>
```
 function fun(){
         echo "这是一句非常牛逼的代码";
    }
    fun();
```
