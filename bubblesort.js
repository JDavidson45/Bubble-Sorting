function bubbleSort(arr) {
	return swap(arr);
}

function swap(arr) {
	return arr.reduce(
		(newArr, el, idx) => {
			if (newArr[newArr.length - 1]) {
				if (el < newArr[newArr.length - 1]) {
					let temp = newArr[newArr.length - 1];
					newArr[newArr.length - 1] = el;
					newArr.push(temp);
				}
			} else newArr.push(el);
			return newArr;
		},
		[ 4 ]
	);
}

console.log(bubbleSort([ 4, 2, 3, 1 ]));
