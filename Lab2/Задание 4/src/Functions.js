export function higherThan(num) {
    return function(element) {
        return element > num;
    };
}

export function hasSubstring(substr) {
    return function(element) {
        return element.includes(substr);
    };
}

export function multiply(num) {
    return function(secondNum) {
        return num * secondNum;
    };
}
