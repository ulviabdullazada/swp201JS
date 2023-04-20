function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        var mini = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[mini] > arr[j]) {
                mini = j;
            }
        }
        if (mini != i) {
            var min = arr[mini];
            arr[mini] = arr[i];
            arr[i] = min;
        }
    }
    console.log(arr);
}
sort([123,43,67,5,234,0,34,123]) //[0,43,67,5,234,123,34,123]