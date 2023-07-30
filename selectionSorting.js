function selectionSort(inputArr){
    let n = inputArr.length;

    for(x = 0; x < n; x++){
        // находим наименьшее число в право части масива
        let min = x;
        for(let y = x; y < n; y++){
            if(inputArr[y] < inputArr[min]){
                min = y;
            }
        }
        if(min != x) {
            // Заменяем элементы
            let tmp = inputArr[x];
            inputArr[x] = inputArr[min];
            inputArr[min] = tmp;
        }
    }
    return inputArr;
}

let inputArr = [3, 6, 8, 13, 15, 2, 1, 4, 7, 5, 9, 10, 11, 12, 14];
selectionSort(inputArr);
console.log(inputArr);