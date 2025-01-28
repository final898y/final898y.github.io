const startBtn = document.getElementById('startBtn');
const restartBtn = document.getElementById('restartBtn');
const watchBtn = document.getElementById('watchBtn');
const guessBtn = document.getElementById('guessBtn');
const inputtag = document.getElementsByTagName('input');
const historyList = document.getElementsByClassName('list-group')[0];

let ans='';
let aNumber = 0;
let bNumber = 0;


document.addEventListener('DOMContentLoaded', () => {
    buttonState('original');
});

startBtn.addEventListener('click', () => {
    buttonState('started');
    ans='';
    createAns();
    while (historyList.firstChild) {
        historyList.removeChild(historyList.firstChild);
    }
    inputtag[0].value ='';
});

restartBtn.addEventListener('click', () => {
    ans='';
    createAns()
    while (historyList.firstChild) {
        historyList.removeChild(historyList.firstChild);
    }
    inputtag[0].value ='';
    alert('答案已更新，請開始!');
});

watchBtn.addEventListener('click', () => {
    alert(`答案是${ans}`);
});

inputtag[0].addEventListener('keydown', function(event) {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
        , 'Delete', 'Backspace', 'Enter','Tab','CapsLock','Shift','Alt','Control'];
    if (!allowedKeys.includes(event.key)) {
        event.preventDefault(); 
        alert('僅允許輸入數字！'); 
    }
    else if(event.key=='Enter')
    {
        guessBtn.click();
    }
    console.log(event);
});

inputtag[0].addEventListener('input', () => {
    if(hasDuplicate(inputtag[0].value)){
        alert('請輸入不重複之數字');
        inputtag[0].value =inputtag[0].value.slice(0,-1);
    }
});

guessBtn.addEventListener('click', () => {
    if(hasDuplicate(inputtag[0].value) || inputtag[0].value.length!=4){
        alert('遊戲規則：4個不重複之數字，請重新輸入');
        inputtag[0].value ='';
    }
    else{
        checktNumAB();
        let guessHistory = `${aNumber}A${bNumber}B`;
        addNewlist(guessHistory);
        if(aNumber==4){
            alert('恭喜猜對');
            buttonState('guessTrue')
        }
    }
});

function hasDuplicate(checkString){
    let uniqueString = new Set([...checkString]);
    if(uniqueString.size !== checkString.length){
        return true;
    }
    else{
        return false;
    }
}

function checktNumAB(){
    aNumber = 0;
    bNumber = 0;
    let inputString = inputtag[0].value;
    [...inputString].forEach(
        function(input,index){
            if(input ===ans[index]){
                aNumber++ 
            }
            else if(ans.includes(input)){
                bNumber++
            }
        }
    )
}

function addNewlist(guessHistory){
    const newspan = document.createElement('span');
    newspan.textContent = guessHistory;
    newspan.className = 'badge bg-danger me-3';

    const newLi = document.createElement('li');
    newLi.className = 'list-group-item';

    newLi.appendChild(newspan);
    newLi.appendChild(document.createTextNode(guessHistory));
    historyList.appendChild(newLi);
}

function buttonState(state){
    switch (state) {
        case 'original':
            startBtn.disabled = false;
            restartBtn.disabled = true;
            watchBtn.disabled = true;
            guessBtn.disabled = true;
            inputtag[0].disabled = true;
            break;
        case 'started':
            startBtn.disabled = true;
            restartBtn.disabled = false;
            watchBtn.disabled = false;
            guessBtn.disabled = false;
            inputtag[0].disabled = false;
            break;
        case 'guessTrue':
            startBtn.disabled = false;
            restartBtn.disabled = true;
            watchBtn.disabled = false;
            guessBtn.disabled = true;
            inputtag[0].disabled = true;
            break;
        default:
            startBtn.disabled = false;
            restartBtn.disabled = true;
            watchBtn.disabled = true;
            guessBtn.disabled = true;
            inputtag[0].disabled = true;
    }
}

function createAns(){
    while (ans.length < 4) { 
        let addNum = Math.floor(Math.random() * 10); 
        if (!ans.includes(addNum)) { 
            ans += addNum;
        }
    }
}
