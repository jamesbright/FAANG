const myList = [2, 4, 6, 8, 9, 1];
const sum = 10;

const twoSum = function (sum, myList) {
    
    const numsMap = {};
    for (let p = 0; p < myList.length; p++) {
        const currentMapVal = numsMap[myList[p]]

        if (currentMapVal >= 0) {
            return [currentMapVal, p];
        } else {
            const numberToFind = sum - myList[p];
            numsMap[numberToFind] = p;
        }
    }
    return null;
};

console.log(twoSum(sum, myList));