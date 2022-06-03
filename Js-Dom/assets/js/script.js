//Task 1
// Html hissəsində iki dənə list olacaq daha sonra js hissəsində bu iki listin elementlərini götürüb birləşdirib yeni bir list yaradıb ona əlavə edəcəksiniz və təkrarlanan elementlər varsa onlardan sadəcə biri yeni listə əlavə olumalıdı.
// Məsələn
// List1:
// c#
// js
// c++

// List2:
// c#
// ruby
// go

// NewList
// c#
// js
// c++
// ruby
// go

// Yuxarıdakı misalda c# iki listdədə var amma yeni yaranan listdə sadəcə biri olur.

let btn = document.getElementById("joinList")
let firstList = document.getElementById("first-list")
let secondList = document.getElementById("second-list")
let thirdDiv = document.getElementById("thirdDiv")
let firstListArr = firstList.innerText.split("\n")
let secondtListArr = secondList.innerText.split("\n")
let newArr = [...firstListArr, ...secondtListArr]
let arrList = [...new Set(newArr)]

btn.onclick = function () {
    let NewList = document.createElement("ul")
    thirdDiv.innerText = " List 3"
    thirdDiv.append(NewList)
    for (let i = 0; i < arrList.length; i++) {
        let newLi = document.createElement("li")
        NewList.append(newLi)
        NewList.classList.add("list-group")
        newLi.classList.add("list-group-item")
        newLi.append(arrList[i])
    }
}


// Task 2

// 2) Ashagida elave etdiyim kimi bir dizayn duzeltmek. Reqem qebul eden inputlar olacaq,
// hansi buttona click etsek hemin operatora gore hesablayib en sondaki inputa cavabi yazdirmaq.

let plusBtn = document.getElementById("plus")
let minusBtn = document.getElementById("minus")
let multiplyBtn = document.getElementById("multiply")
let divideBtn = document.getElementById("divide")

let firstInput = document.getElementById("first-input")
let secondInput = document.getElementById("second-input")
let resultInput = document.getElementById("result-input")


plusBtn.onclick = function () {
    resultInput.value = parseInt(firstInput.value) + parseInt(secondInput.value);
}

minusBtn.onclick = function () {
    resultInput.value = firstInput.value - secondInput.value;
}

multiplyBtn.onclick = function () {
    resultInput.value = firstInput.value * secondInput.value;
}

divideBtn.onclick = function () {
    resultInput.value = firstInput.value / secondInput.value;
}

