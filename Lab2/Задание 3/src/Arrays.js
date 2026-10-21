export function arraySorting(str) {
    return str.split(',')
              .map(Number)
              .sort((a, b) => a - b)
              .join(',');
}

export function arrayFiltering(arr) {
    return arr.filter(num => num <= 100);
}

export function arrayPushing(arr1, arr2) {
    const result = [];
    for (let i = 0; i < 5; i++) {
        result.push(arr1[i]);
        result.push(arr2[i]);
    }
    return result;
}
