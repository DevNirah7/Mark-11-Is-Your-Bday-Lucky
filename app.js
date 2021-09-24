var birthDate = document.querySelector("#birth-date");
var luckyNumber = document.querySelector("#lucky-number");
var checkBtn = document.querySelector("#check-btn");
var resultTxt = document.querySelector("#result");
var sadimg = document.querySelector("#sad-img");
var happyimg = document.querySelector("#happy-img");

hide(sadimg);
hide(happyimg);
hide(resultTxt);



function show(input) {
    input.style.display = "block"
}

function hide(input) {
    input.style.display = "none";
}

checkBtn.addEventListener("click", function validate() 
{
    if(birthDate.value === "" || luckyNumber.value ==="")
    {
        hide(sadimg);
        hide(happyimg);
        show(resultTxt);
        resultTxt.innerText = "Kindly ensure to fill both the fields";
        
    }

    else if(luckyNumber.value < 0)
    {
        hide(sadimg);
        hide(happyimg);
        resultTxt.innerText = "Kindly enter a positive value as lucky number";
    }
    
    else
    {
    var s = sumOfDate(birthDate.value);
    if (s % (luckyNumber.value) === 0) {
        resultTxt.innerText = "YAAY!!! YOUR BIRTHDAY IS LUCKY!!!";
        show(happyimg);
        hide(sadimg);


    } else {
        resultTxt.innerText = "SAD, YOUR BIRTHDAY IS NOT THAT LUCKY!";
        show(sadimg);
        hide(happyimg);

    }
    }
})

function sumOfDate(inputDate) {
    inputDate = inputDate.replaceAll("-", "");
    var sum = 0;
    for (var i = 0; i < inputDate.length; i++) 
    {
        sum = sum + Number(inputDate[i]);
    }
    return sum;
}