function bubbleSort(arr) {
	return swap(arr);
}

function swap(arr) {
	return arr.reduce((sorted, el) => {
		let idx = 0;
		while (idx < sorted.length && el > sorted[idx]) i++;
		sorted.splice(idx, 0, el);
		return sorted;
	}, []);
}

console.log(bubbleSort([ 4, 2, 3, 1 ]));
