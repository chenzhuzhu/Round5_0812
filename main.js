/**
 * Created by cyz on 2017/8/12.
 */

'use strict';
main()
function main(){
    let flower_result = [];
    for(let number = 100;number<1000;number++){
        let num3 = Math.pow(parseInt(number%10),3);
        let num2 = Math.pow(parseInt(number/10 % 10),3);
        let num1 = Math.pow(parseInt(number/100 % 10),3);
        if (num1+num2+num3===number){
            flower_result.push(number);
        }
    }
    console.log('三位水仙花数有：')
    console.log(flower_result)
}