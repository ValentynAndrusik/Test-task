/*jshint esversion: 6 */

const price = document.getElementById("price");
const amount = document.getElementById("amount");
const button = document.getElementById("button");
const result = document.getElementById("result");
button.onclick = function(){
    if (!isNaN(amount.value) && !isNaN(price.value)){
        if(parseInt(amount.value, 10) >= parseInt(price.value, 10)){
            result.value = (amount.value - price.value).toFixed(2);
            
            const indexOfDot = result.value.indexOf(".");
            const numBeforeDot = result.value.slice(0, indexOfDot);
            let numAfterDot = result.value.slice(indexOfDot + 1);
            const numAfterDot1 = result.value.slice(indexOfDot + 1);
            
            let counter1 = 0;
            let counter2 = 0;
            let counter3 = 0;
            let counter4 = 0;
            let counter5 = 0;
            
            while(numAfterDot >= 0){
                if(numAfterDot >= 50){
                    numAfterDot = numAfterDot - 50;
                    counter1++;
                } else if(numAfterDot >= 25){
                    numAfterDot = numAfterDot - 25;
                    counter2++;
                } else if(numAfterDot >= 10){
                    numAfterDot = numAfterDot - 10;
                    counter3++;
                } else if(numAfterDot >= 5){
                    numAfterDot = numAfterDot - 5;
                    counter4++;
                } else if(numAfterDot >= 1){
                    numAfterDot = numAfterDot - 1;
                    counter5++;
                } else{
                    break;
                }
            };
            
            alert("Ваша решта: " + numBeforeDot + " долари " + numAfterDot1 + " центів" + "\n" + "Номінали центів:" + "\n" + "50 центів х " + counter1 + "\n" + "25 центів х " + counter2 + "\n" + "10 центів х " + counter3 + "\n" + "5 центів х " + counter4 + "\n" + "1 цент х " + counter5);
        }else{
            alert("Не коректно введені данні, можливо ціна товару більша за введену суму, або не заповнене одне з полів");
        }
    }else{
        alert("Введіть число");
    }
};

