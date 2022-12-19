# 力扣HOT一百

[TOC]

## 栈



## 队列

先进先出（服务）

在主线程中当存在有异步任务时候，提交给对应的异步进程处理 ，异步进程完 推入到宏微任务 最后再推到主线程栈里 。这些任务反复不断的执行，就是事件循环。

![image-20221206211536757](C:\Users\LJ\AppData\Roaming\Typora\typora-user-images\image-20221206211536757.png)

### 最近的请求数 



## 数组

### 两数之和

1. #### map方法

   - 使用 has（键名），寻找键值，存在返回true

   - set（apple，100） get（apple）//100

   - 创建map数组，循环中 用targe-num【i】 获取到键值，寻x对应的值，一开始是没有的，那就通过set 来设立。map.set(nums[i],i) ，当下个轮回的时候，就能创建好map所对应键值对。从而当存在x，那么就可以通过map.get(x),获得当前的两个值了

     ```javascript
     var twoSum = function(nums, target) {
     map = new Map()
     for(let i = 0; i < nums.length; i++) {
         x = target - nums[i]
         if(map.has(x)) {
             return [map.get(x),i]
         }
         map.set(nums[i],i)
     }
     };
     ```

       2. 暴力破解
          - 循环两个 i j  num[i]+num[j] = target

### 数组去重

- [前言](https://www.jb51.net/article/242775.htm#_label0)

- [方法实现](https://www.jb51.net/article/242775.htm#_label1)

- - [双循环去重](https://www.jb51.net/article/242775.htm#_lab2_1_0)
  - [indexOf方法去重1](https://www.jb51.net/article/242775.htm#_lab2_1_1)
  - [indexOf方法去重2](https://www.jb51.net/article/242775.htm#_lab2_1_2)
  - [相邻元素去重](https://www.jb51.net/article/242775.htm#_lab2_1_3)
  - [利用对象属性去重](https://www.jb51.net/article/242775.htm#_lab2_1_4)
  - [set与解构赋值去重](https://www.jb51.net/article/242775.htm#_lab2_1_5)
  - [Array.from与set去重](https://www.jb51.net/article/242775.htm#_lab2_1_6)

- [总结](https://www.jb51.net/article/242775.htm#_label2)



### 整数反转

-  math.sign(x)  x负数-1 整数+1 可以相乘来进行判断
- floor 向下取整  如果是-8.5 那就会取  -9 
- 



### 删除排序数组中的重复项

- 双指针的方法就是前后元素不相同 （通过两个指针在一个for下做到两个for的循环）：同样也适用于三数之和，四数之和【再加个for】

- ```javascript
  for(var father=0,child=0; father<nums.length;father++){
   if(nums[child]!==nums[father]){
    child++;
    nums[child]=nums[father];
   }
  }
  ```

  ### 判断句子是否为全字母句

全字母句 指包含英语字母表中每个字母至少一次的句子。

给你一个仅由小写英文字母组成的字符串 sentence ，请你判断 sentence 是否为 全字母句 。

如果是，返回 true ；否则，返回 false 。

```javascript
var checkIfPangram = function(sentence) {

 let setArray = new Set()

 if(sentence.length<26){

   return false

 }

 else{

  for(let i=0 ;i<sentence.length;i++)

   {

​     setArray.add(sentence[i]) 

   }

   if(setArray.size==26) return true

   else{

​    return false

   } 

 }

};


```

 set也是使用哈希算法存储数据的

### 字符串转数字

- 注意误区：字符串指的是数字的而不是字母 

  - ```JavaScript
    parseInt('25 is my age', 10); //25
    parseInt('25,000', 10);  // 25
    parseInt('My age is 25', 10); //NaN
    
    将字符串转换为数字的最相关方法是使用方法。Number()
    
    Number("25");   //25
    Number("2500"); //2500
    Number("25.24"); //25.24
    Number("24,000"); //NaN
    ```

- 



## 链表

  内存顺序不是连在一起的，而是通过  next来通过指向，存储在堆区。 

### 合并两个有序的链表

- head是固定的头，cur是可移动的 最初指向开头 0 
- 比较L1和L2的头谁比较小，若L2的开头小，那么cur移动到L2开头
- 接着循环继续比较直到空位置跳出
- 