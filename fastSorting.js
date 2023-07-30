const values = [2, 27, 4, 52, 31, 96, 73, 47, 22, 6];

function fastSort(list){
    if(list.length <= 1){
        return list;
    }

    const pivot = list[list.length - 1];
    const leftList = [];
    const rightList = [];

    for (let i = 0; i < list.length-1; i++) {
        if(list[i] < pivot){
            leftList.push(list[i]);
        }else{
            rightList.push(list[i]);
        }
    }
    return [...fastSort(leftList), pivot, ...fastSort(rightList)];
}

console.log(fastSort(values))