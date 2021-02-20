/*console.log('im working it im jv im beautiful');
const a=666;
let b=a-44;

console.log(b,a);
//한줄주석
/*여러줄주석
ㅇㄹㅇㅇㄹㅇ
*/
/*
const what="yjw"
console.log(what);
const wat=true;
//항상 소문자로 시작하고 스페이스가 필요하면 그다음 대문자
const daysOfWeek=["m","t","w","t","f","s","s"];
console.log(daysOfWeek[4]);
//0부터임
const jwInfo={name:"jw",age:"21",atk:"9999",def:"99",list:["구와아아앙아아",true,882]};
console.log(jwInfo);
console.log(jwInfo.age);
console.log(jwInfo.list[2]);

function sayHello(potato,age){
  return`Hello ${potato} you are ${age} years old`;
}
sayHello("jw",99);
//``은 왼쪽위에 잏는거
const hy=sayHello("ddd","kkk");

console.log(hy);

const calculator={
  plus:function plus(a,b){
    return a+b;
  }
}
console.log(calculator.plus(99,099))*/



// console.log(title);
// console.error("fuck");
// title.innerHTML="hi im from js";
// title.style.color="red"
// console.dir(document)
// document.title="I own you now"


//&&둘다참이어야만 참 ||둘다 거짓이어야만 거짓

/*const age=prompt("how old are you");
console.log(age)
if(age>18 && age<21){
  console.log("you can drink")
}else if(age>=21){
  console.log("you can")
}else{
  console.log("nonono")
}

const BASE_COLOR="rgb(52, 73, 94)";
const OTHER_COLOR='#7f8c8d';

function handleClick(){
  const CurrentColor=title.style.color;
  if(CurrentColor===BASE_COLOR){
  title.style.color=OTHER_COLOR;
  }else {
  title.style.color=BASE_COLOR;
    }
  
// }*/
// const title=document.querySelector("#title");
// function init(){

// title.addEventListener("click",handleClick);
// }
// init(); 

// const CLICKED_CLASS="clicked"

// function handleClick(){
//   title.classList.toggle(CLICKED_CLASS)
// }


const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();