export function rangeSum(a, b) {
    let sum = 0;
    const start = Math.min(a, b);
    const end = Math.max(a, b);
    
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

export function iterationCount(num) {
    let count = 0;
    let current = num;
    
    while (current > 0.1) {
        current = current / 2;
        count++;
    }
    return count;
}

export function symbolsReplace(text) {
    let result = '';
    let i = 0;
    
    do {
        if ((i + 1) % 3 === 0) {
            result += '_';
        } else {
            result += text[i];
        }
        i++;
    } while (i < text.length);
    
    return result;
}
