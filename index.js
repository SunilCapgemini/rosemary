export {
    sumToN: (n) => {
        return (n * (n + 1)) / 2;
    },
    removeInitialFinalZeroes: (arr) => {
        let start = 0,
            end = arr.length - 1;
        for (let i = 0, j = arr.length - 1; i <= j; i++, j--) {
            if (arr[i] === 0) {
                start++;
            }
            if (arr[j] === 0) {
                end--;
            }
            if (arr[i] !== 0 && arr[j] !== 0) {
                break;
            }
        }
        return arr.slice(start, end + 1);
    },
    quickSort:(array){
        if(array.length < = 1){
            return array;
        }
        const pivot = array[array.length - 1];
        const left = [];
        const right = [];
        
        
        for (let i 0;i < array.length - 1; i++){
            if(array[i] < pivot){
                left.push(array[i];
            } else {
                right.push(array[i];
            }
        }
        return this.quickSort(left).concat(pivot, this.quickSort(right));
    }
}
