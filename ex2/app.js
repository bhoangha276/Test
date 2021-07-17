let input = [60, 40, 55, 75, 64];

let SumEven=0;
for(let i=0;i<input.length;i=i+2){
    SumEven += input[i];
}

let SumOdd=0;
for(let i=1;i<input.length;i=i+2){
    SumOdd += input[i];
}

let arr=[];
arr.push(SumEven, SumOdd);
console.log(arr);