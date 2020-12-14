

export function addHandler(a: number, b: number) {
    return (a + b);
}

export function extractHandler(a: number, b: number) {
    return (a - b);
}

export function multiHandler(a: number, b: number) {
    return (a * b);
}

export function divideHandler(a: number, b: number) {
    return (a / b);
}

export function percentHandler(num: number, percentValue: number) {
    return num * (percentValue / 100);
}

export function negativeHandler(num: number) {
    if (Math.sign(num) > 0) { return num * (-1) }
    else if (Math.sign(num) <= 0) { return num * (1) }
    else { return };
} 
//or
export function signHandler(num: number) {
   return -Math.abs(num);
} 