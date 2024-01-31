

document.getElementById("myElement").addEventListener("click", function() {
   //需求：页面刷新后，一等奖、二等奖和三等奖的名称不变
      const arr = ["高振勋,", "胡秋爽,", "钱帅,", "苏宏飞,", "姜润青,", "崔宏达,","马亮,",];
      //一等奖设置
      const randNum = Math.floor(Math.random() * arr.length);
      console.log(randNum);
      //根据数组随机索引获取随机元素
      const one = document.querySelector(".one");
      one.innerHTML = arr[randNum];
      // console.log(arr);
      //删除元素
      arr.splice(randNum, 1);
      // console.log(arr);
      //二等奖
      const randNumTwo = Math.floor(Math.random() * arr.length);
      const two = document.querySelector(".two");
      two.innerHTML = arr[randNumTwo];
      arr.splice(randNumTwo, 1);
      // console.log(arr);
      //二等奖
      const randNumTwo2 = Math.floor(Math.random() * arr.length);
      const two2 = document.querySelector(".two2");
      two2.innerHTML = arr[randNumTwo2];
      arr.splice(randNumTwo2, 1);
      // console.log(arr);
//三等奖
      const randNumThree = Math.floor(Math.random() * arr.length);
      const three = document.querySelector(".three");
      three.innerHTML = arr[randNumThree];
      arr.splice(randNumThree, 1);
      // console.log(arr);
      //三等2
          const randNumThree2 = Math.floor(Math.random() * arr.length);
      const three2 = document.querySelector(".three2");
      three2.innerHTML = arr[randNumThree2];
      arr.splice(randNumThree2, 1);
      console.log(arr);
     // 参与奖
     const c = arr;
const b =document.querySelector('.box')
b.innerHTML=arr;
//内幕版
const neimu=["赵鑫宇"];
const d =document.querySelector('.box2')
d.innerHTML=neimu
//
  // 在这里编写点击事件的处理逻辑
});