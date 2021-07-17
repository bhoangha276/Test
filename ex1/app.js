function allLongestString(inputArray){
    return inputArray.filter(a=>a.length===Math.max(...inputArray.map(l=>l.length)));
}

inputArray=["BINH", "HUNG", "PHUOC", "CAO", "KHANH"];

let kq= allLongestString(inputArray);

console.log(kq);