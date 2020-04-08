describe('Bubble Sort', function() {
	beforeAll(() => {
		spyOn(window, 'swap').and.callThrough();
	});

	it('handles an empty array', () => {
		expect(bubbleSort([])).toEqual([]);
	});

	it('calls the swap function', () => {
		bubbleSort([]);
		expect(swap).toHaveBeenCalled();
	});

	it('calls the swap function on each call', () => {
		expect(swap.calls.count()).toEqual(2);
	});
});
