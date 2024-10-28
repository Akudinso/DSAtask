function chunkArray(array, size) {
    const chunkedArray = [];
    let index = 0;
    while (index < array.length) {

        const chunk = array.slice(index, index + size);
        chunkedArray.push(chunk);
        index += size;
    }
    return chunkedArray;
}


console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3)); 
console.log(chunkArray([1, 2, 3, 4, 5], 2));
