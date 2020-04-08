// const bubbleSort = require('./bubblesort');describe('Bubble Sort', function() {
	beforeAll(function() {
		spyOn(swap, 'swap').and.callThrough(); //
	});

	it('handles an empty array', function() {
		bubbleSort([]);
		bubbleSort([]);
		bubbleSort([]);
		expect(swap.calls.count()).toEqual(3);
		// expect(bubbleSort([])).toEqual([]);
	});
});
