const fs = require("fs");
let recode = require("./recoder.json");
let group = require("./group.json");
let originIndex = recode[recode.length-1].groupIndex;
let groupIndex = (recode[recode.length-1].groupIndex+1)%group.length;
let timeStamp = {
    date:(new Date()),
    groupIndex:groupIndex,
    context:group[groupIndex],
    targetIndex:originIndex
}
recode.push(timeStamp);

let template = `【本周跨界劇本】
1.本周 照順序為 ${group[groupIndex][0]}、${group[groupIndex][1]} 拿本源
a.${group[groupIndex][0]}本源＞${group[originIndex][0]}  週六12:10
b.${group[groupIndex][1]}本源＞${group[originIndex][1]}

2.恬淡、萬乘、微明、知白 
皆可刷人頭刷怪 
也歡迎其他四服的朋友來刷😘
[本週通關密語]
一致性為："${Date.now().toString(16)}"❤️
(到達後請在該位面打聲招呼)
無密語可以殺，但請紳士不要蹲屍`;

console.log(template);

fs.writeFileSync("./recoder.json",JSON.stringify(recode));