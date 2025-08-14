function findFirstDivisibleByTwo<T>(arr: T[], predicate: (item: T) => boolean): T | undefined {
    for (const item of arr) {
        if (predicate(item)) {
            return item;
        }
    }
    return undefined;
}

const numbers = [1, 3, 5, 8, 11];
const result = findFirstDivisibleByTwo<number>(numbers, num => num % 2 === 0);
console.log(result);
