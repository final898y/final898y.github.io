const numButtons = document.querySelectorAll('.btn.btn-primary');
const clearBtn = document.getElementById('clearBtn');
const guessBtn = document.getElementById('guessBtn');
const startBtn = document.getElementById('startBtn');
const h1tag = document.getElementsByTagName('h1');

let randomNum ;
let checktNum =0;
let selectNum = document.getElementById('selectNum');

document.addEventListener('DOMContentLoaded', () => {
    buttonDisable();
});



startBtn.addEventListener('click', () => {
    randomNum = Math.floor(Math.random()*100)+1;
    selectNum.textContent ="遊戲開始";
    selectNum.style.setProperty('color', 'blue', 'important');
    buttonEnable();
});

clearBtn.addEventListener('click', () => {
    resetWhite()
});

guessBtn.addEventListener('click', () => {
    if(checktNum>randomNum)
    {
        alert("請在猜小一點")
    }
    else if(checktNum<randomNum)
    {
        alert("請在猜大一點")
    }
    else{
        let result = `恭喜猜對答案為${randomNum}`;
        alert(result);
        buttonDisable()
    }
});


numButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        if(selectNum.textContent =="遊戲開始")
        {
            selectNum.textContent=""
        }
        selectNum.textContent += event.target.textContent;
        checktNum = parseInt(selectNum.textContent);
        if(checktNum>100)
        {
            selectNum.textContent = selectNum.textContent.slice(0, -1);
            checktNum = parseInt(selectNum.textContent);
            alert("密碼不超過100")
        }
        selectNum.style.setProperty('color', 'blue', 'important');
        
    });
  });

function resetWhite(){
    selectNum.textContent ="遊戲開始";
    selectNum.style.setProperty('color', 'white', 'important');
}

function buttonDisable(){
    clearBtn.disabled = true;
    guessBtn.disabled = true;
    numButtons.forEach(button => {button.disabled = true;});
}

function buttonEnable(){
    clearBtn.disabled = false;
    guessBtn.disabled = false;
    numButtons.forEach(button => {button.disabled = false;});
}
