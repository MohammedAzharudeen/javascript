function flatten(array) {

    let arr = []; //Empty array

    function helper(array) {
        for (let i = 0;i<array.length;i++){
            let element = array[i];
            if(Array.isArray(element)) {
                helper(element);
            } else {
                arr.push(element);
            }
        }
    }
    helper(array)
    return console.log(arr);
}

flatten([1, 2, [3, 4, [5, 6]]]);


//output : [1, 2, 3, 4, 5, 6]
