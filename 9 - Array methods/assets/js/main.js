// const myArr = [116,42,5,2,true,22,"Sahib"]


// myArr.push("Nurlan");

// console.log(myArr);

// let myArr = ["Banana", "Orange", "Apple", "Mango"];


// console.log(myArr.sort(()=> 0.5-Math.random()));

// console.log(myArr.slice(4,3));

// myArr.splice(0,0, "Elvin", "Nurlan","Vusal")

// let stdns = ["Emil","Vusal","Kamil"]

// console.log(myArr.concat(stdns,"Elnare","Sevinc",88));

// delete myArr[0];
// myArr.shift();

// console.log(myArr.unshift("Emil"));
// console.log(myArr);

// myArr.push(17);
// console.log(myArr);

// console.log(myArr.pop());
// console.log(myArr);

// console.log(customJoin(myArr, "/"));

// function customJoin(arr, sym=',') {
//     let result = "";
//     for (let i = 0; i < arr.length; i++) {
//         result += arr[i] + sym;
//     }
//     return result;
// }

// console.log(myArr.toString());
// console.log(custom2String(myArr));

// function custom2String(arr) {
//     let result = "";
//     for (let i = 0; i < arr.length; i++) {
//         result += arr[i] + ","
//     }
//     return result.slice(0,-1);
// }

// let words = "Hello world!!!";
// let startIndex = 0;
// setInterval(()=>{
//     text.textContent  += words[startIndex];
//     if (startIndex == words.length) {
//         startIndex = -1;
//         text.textContent = "";
//     }
//     startIndex++;
//     // text.innerText = words.slice(0,-1)
// },500)

// console.log();


// var str = "Salam, Dunya";

// for(var i = 0; i < str.length; i++){
//     console.log(str[i])
// }

// var newStr = str.slice(0); // (start, end)
// var newStr = str.substring(2,4); // (start, end)
// var newStr = str.substr(2,4); // (start, length)

// var newStr = str.replace(/a/ig,"b");
// var newStr = str.replaceAll("Dunya","Planet");
// var newStr = str.toUpperCase();
// var newStr = str.toLowerCase();

// console.log(newStr);

// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat("%", text2);

// console.log(text3);

// var str = "    Hello, World!    ";
// console.log(str);
// var newStr = str.trim();
// console.log(newStr);

// var newStr = str.trimStart();
// var newStr = str.trimEnd();
// console.log(newStr);

// let text = "5";
// let padded = text.padStart(3,"-");
// let padded = padded.padEnd(5,"-");
// console.log(padded);


// var str = "Hello, World!";

// console.log(str.charAt(0));
// console.log(str.charCodeAt(1));

// if(str.charCodeAt(0) === 72){
//     console.log("Salam");
// }

// var str = "Hello, World!, sadfas , asd ";
// var newStr= str.split(",");

// console.log(newStr);

// let text = "yusif.osmanovgmail.com";
// let result = text.includes("@");

// // console.log(result);

// if(result === true){
//     alert("Xosh gelmishsiniz!");
// }
// else{
//     alert("Duzgun deyer yazin!");
// }

// Methoda ad gonderende adi ekrana cixardir(Sabir), ad ve soyad gonderende soyadi adi ekrana cixardir(Guliyev Sabir), ad,soyad ve ata adı göndərildikdə adin baş hərfi nöqtə soyad ata adi ekrana cixardirsiz(S.Guliyev Mehti). 

// function FindInfo(name, surname, fatherName){

//     if(name !== undefined && surname !== undefined && fatherName !== undefined) {
//         alert(name[0] + "." + surname + " " + fatherName);
//     }
//    else if(name !== undefined && surname !== undefined && fatherName === undefined) {
//         alert(name + " " + surname);
//     }
//     else if(name !== undefined && surname === undefined && fatherName === undefined) {
//         alert(name);
//     }

// }

// FindInfo("Tural", "Kalbaliyev");