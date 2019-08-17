function removelast(arr) {
    arr.pop();
    return arr;
}
function removematch(arr, removeit) {
    for (var i in arr) {
        if (arr[i] == removeit) {
            arr.splice(i, 1);
        }
    }
    return arr;
}
function add(arr, x) {
    arr.push(x);
    return arr;
}


