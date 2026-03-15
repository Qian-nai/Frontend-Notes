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

//【重要】方法的封装：每间隔30ms，将盒子向右移动10px
    function animate(ele, target) {
        //要用定时器，先清除定时器
        //一个盒子只能有一个定时器，这样的话，不会和其他盒子出现定时器冲突
        //我们可以把定时器本身，当成为盒子的一个属性
        clearInterval(ele.timer);
        //我们要求盒子既能向前又能向后，那么我们的步长就得有正有负
        //目标值如果大于当前值取正，目标值如果小于当前值取负
        var speed = target > ele.offsetLeft ? 10 : -10;  //speed指的是步长
        ele.timer = setInterval(function () {
            //在执行之前就获取当前值和目标值之差
            var val = target - ele.offsetLeft;

            //移动的过程中，如果目标值和当前值之差如果小于步长，那么就不能在前进了
            //因为步长有正有负，所有转换成绝对值来比较
            if (Math.abs(val) < Math.abs(speed)) {  //如果val小于步长，则直接到达目的地；否则，每次移动一个步长
                ele.style.left = target + "px";
                clearInterval(ele.timer);
            } else {
                ele.style.left = ele.offsetLeft + speed + "px";
            }
        }, 30)
    }


    //promise练习
    let promise = new Promise((resolve, reject) =>{
        resolve("成功了");
        //reject("失败了");
    })
    promise.then(data =>{
        console.log(data);

        return new Promise((resolve, reject) =>{
            resolve("又成功了");
            //reject("又失败了");
        })
    }, err =>{
        console.log(err);
        throw new Error("又失败了");
    })

    .then(data =>{
        console.log(data);
    }, err =>{
        console.log(err);
    })

    .catch(err =>{
        console.log(err);
    })

    //async/await练习
    //创建一个函数，返回一个Promise对象
    function asyncTask() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("异步任务完成");
                //reject("异步任务失败");
            }, 1000);
            const isSuccess = true; //模拟异步任务的成功或失败
            if (isSuccess) {
                resolve("异步任务完成");
            } else {
                reject("异步任务失败");
            }
        });
    }
    //使用async/await调用异步函数
    async function main() {
        try {
            const result = await asyncTask();
            console.log(result); // 输出: 异步任务完成
        } catch (error) {
            console.error(error); // 输出: 异步任务失败
        }
    }

    main();