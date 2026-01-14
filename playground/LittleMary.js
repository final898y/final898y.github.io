//變數設置
let circleArray = [];
let circleScoreArray = 
[100,50,40,30,20,10,10,10
  ,100,50,40,30,20,10,10,10
  ,100,50,40,30,20,10,10,10];
let betcountObject ={
  betBtn100:0,
  betBtn50:0,
  betBtn40:0,
  betBtn30:0,
  betBtn20:0,
  betBtn10_1:0,
  betBtn10_2:0,
  betBtn10_3:0,
}
let chipsNum = 10;
let totalWinMoney =0;

//DOM綁定
const startBtn = document.getElementById("startBtn");
const clearBtn= document.getElementById("clearBtn");
const betBtn = document.querySelectorAll(".btn.btn-secondary");
const chipsSpan = document.querySelector('.overlay-text-chips');
const winMoneySpan = document.querySelector('.overlay-text-winMoney');
const totalWinSpan = document.querySelector('.overlay-text-totalWin');
//建立轉圈順序array
for (let n = 1; n < 25; n++) {
  let idString = `circle${n}`;
  let pushitem = document.getElementById(idString);
  circleArray.push(pushitem);
}

//功能設置
startBtn.addEventListener("click", () => {
  let cycletimes = getRandomInt(2,4);
  let stopNum = getRandomInt(0,24);
  let lastred = document.querySelector('.borderRed');
  if(lastred!==null){
    lastred.classList.remove("borderRed");
  }
  cycleFlash(50, cycletimes).then(() => {
    lastCircleFlash(stopNum,checkWinScore);
  });  
});

clearBtn.addEventListener("click", () => {
  for (let key in betcountObject) {
    if (betcountObject.hasOwnProperty(key)) {
      betcountObject[key] = 0;
      let countid = key+'count';
      let countspan = document.getElementById(countid);
      if(countspan!==null){
        countspan.innerText = '0';
      }
    }
  }
  chipsNum = 10;

  chipsSpan.innerText = '可使用籌碼：10枚';
  winMoneySpan.innerText='本次獲利：______';
  totalWinSpan.innerText='總獲利：______';
});

for (const btn of betBtn) {
  btn.addEventListener("click", () => {
    if(chipsNum>0){
      chipsNum -=1;
      chipsSpan.innerText=`可使用籌碼：${chipsNum}枚`
      let countid = btn.id+'count';
      let countspan = document.getElementById(countid);
      betcountObject[btn.id] += 1;
      countspan.innerText = betcountObject[btn.id];
    }
    else{
      alert('籌碼已全數下注')
    }    
  });
}


//共用函式
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function lastCircleFlash(stopNum, callback) {
  if (!circleArray || circleArray.length === 0) return; // 防止空陣列錯誤
  let index = 0;
  const interval = setInterval(() => {
    circleArray[index].classList.add("borderRed"); // 加上效果
    if (index > 0) {
      circleArray[index - 1].classList.remove("borderRed"); // 移除上一個元素效果
    }
    index++;
    if (index === stopNum) {
      clearInterval(interval); // 停止計時器
      startBtn.disabled =false;
      if (callback) callback();
    }
  }, 100);
}


function cycleFlash(intervalTime = 100, repeat = 1) {
  if (!circleArray || circleArray.length === 0) return Promise.resolve();

  return new Promise((resolve) => {
    startBtn.disabled =true;

    let index = 0;
    let cycleCount = 0;

    const interval = setInterval(() => {
      circleArray[index].classList.add("borderRed");
      if (index > 0) {
        circleArray[index - 1].classList.remove("borderRed");
      }
      index++;
      if (index === circleArray.length) {
        cycleCount++;
        index = 0;
        setTimeout(() => {
          circleArray[circleArray.length - 1].classList.remove("borderRed");
        }, 100);
        if (cycleCount === repeat) {
          clearInterval(interval);
          resolve(); // 執行完畢後解決 Promise
        }
      }
    }, intervalTime);
  });
}


function checkWinScore(){
  let prizeElement = document.querySelector('.borderRed');
  if(prizeElement!==null){
    let prizePosition = prizeElement.id.replace('circle','');
    let score = circleScoreArray[prizePosition-1];
    let checkObjectIndex =  parseInt(prizePosition, 10) % 8
    let betPointName='';
    switch(checkObjectIndex){
      case 6:
        betPointName = 'betBtn10_1';
        break;
      case 7:
        betPointName = 'betBtn10_2';
        break;
      case 0:
        betPointName = 'betBtn10_3';
        break;
      default:
        betPointName = `betBtn${score}`
    }
    let winMoney = score * betcountObject[betPointName];
    //let winMoneySpan = document.querySelector('.overlay-text-winMoney');
    winMoneySpan.innerText = `本次獲利：${winMoney}`
    totalWinMoney = totalWinMoney+winMoney;
    totalWinSpan.innerText= `總獲利：${totalWinMoney}`
  }
  
}
