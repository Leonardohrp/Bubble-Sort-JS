const arrayList = [5, 9, 4, 8, 2, 7, 1, 3, 6];

console.log(bubbleSort(arrayList));

function bubbleSort(array) {
    for(i = 0; i < array.length; i++) {
        for(j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = temp;
            }
        }   
    }
    return array;
}