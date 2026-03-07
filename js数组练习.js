splice(索引, 删除的元素个数, 要添加的元素)
数组去重
//创建一个数组
const arr = [1, 2, 3, 2, 2, 1, 3, 4, 2, 5];
//去除数组中重复的数字
for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
        if(arr[i] === arr[j]) {
            arr.splice(j, 1);
            j--; //调整索引以继续检查下一个元素
        }
    }
}

join()
//问题：将一个字符串数组输出为|分割的形式，比如“千古|宿敌|素颜”。使用两种方式实现。
//方法一：使用join()方法
const arr2 = ["千古", "宿敌", "素颜"];
const result = arr2.join("|");
console.log(result); // 输出: 千古|宿敌|素颜
//方法二：使用循环和字符串拼接
var arr3 = ['千古', '宿敌', '素颜'];
var str = arr3[0];
var separator = '|';
for (var i = 1; i < arr3.length; i++) {
    str += separator + arr3[i]; //从第1个数组元素开始，每个元素前面加上符号"|"
}

console.log(str);

reverse() //练习
//题目：将一个字符串数组的元素的顺序进行反转，使用两种种方式实现。提示：第 i 个和第 length-i-1 个进行交换。
function reverseArray(arr) {
    //方法一：使用内置的reverse()方法
    return arr.reverse();
}
//方法二：使用循环和交换元素
function reverseArray(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i]; //暂存第i个元素
        arr[i] = arr[arr.length - 1 - i]; //将第length-i-1个元素赋值给第i个位置
        arr[arr.length - 1 - i] = temp; //将暂存的第i个元素赋值给第length-i-1个位置
    }
    return arr;
}
//方法三：创建一个新数组，按照反向顺序填充元素
function reverse(array) {
    var newArr = [];
    for (var i = array.length - 1; i >= 0; i--) {
        newArr[newArr.length] = array[i];
    }
    return newArr;
}