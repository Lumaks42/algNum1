function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        let currentElement = array[mid];

        if(currentElement === target) {
            return mid;
        }
        else if (target < currentElement) {
            right = mid - 1;
        }else {
            left = mid + 1;
        }
    }

    return -1;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let target = 5;

let index = binarySearch(array, target);
console.log(index);