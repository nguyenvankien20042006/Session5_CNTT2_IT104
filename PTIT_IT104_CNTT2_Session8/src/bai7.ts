function flatten<T>(arr: T[][]): T[] {
    return arr.reduce((acc, curr) => [...acc, ...curr], []);
}

console.log(flatten<number>([[1, 2], [3, 4], [5, 6]]));
console.log(flatten<string>([['apple', 'banana'], ['cherry'], ['date', 'elderberry']]));
