describe("Calc", () => {

    describe("addNumber", () => {
        dataTest = [
            {
                array: [],
                expected: '0'
            },
            {
                array: [1],
                expected: '1'
            },
            {
                array: [1, 2],
                expected: '12'
            },
            {
                array: [1, 2, 3, 4, 5],
                expected: '12345'
            },
            {
                array: [0],
                expected: '0'
            },
            {
                array: [0, 0],
                expected: '0'
            },
            {
                array: [0, 0, 0, 0],
                expected: '0'
            },
            {
                array: [0, '.', 2, 5],
                expected: '0.25'
            },
            {
                array: [0, '.', '.', 2, 5],
                expected: '0.25'
            },
            {
                array: ['.', 0, '.', '.', 2, 5,  '.'],
                expected: '0.025'
            },
        ];

        dataTest.forEach(data => {
            const {array, expected} = data;

            for (let i = 0; i < array.length; i++) {
                document.getElementsByName(array[i])[0].click();
            }

            const actual = document.getElementById('inputField').value;

            it(`Should return ${expected} when input data was ${array} `, () => {
                assert.strictEqual(actual, expected)
            });
            Clear();
        })
    });

    describe("Sum", () => {
        dataTest = [
            {
                array: [1, '+', 1, '='],
                expected: '2'
            },
            {
                array: [1, '+', 1, '+'],
                expected: '2'
            },
            {
                array: [1, '+', 0, '.', 2, 5, '='],
                expected: '1.25'
            },
            {
                array: [1, '+', 0, '.', '.', 2, 5, '='],
                expected: '1.25'
            },
            {
                array: ['+',  5, '='],
                expected: '5'
            },
            {
                array: [1, 2, 5, '+', 0, '.', 7, 3, '+', 0, '.', 2, 7, '='],
                expected: '126'
            },
            {
                array: [1, 2, 5, '+', 0, 0, 0, '.', 7, 3, '+', 0, 0, 0, 0, '.', 2, 7, '='],
                expected: '126'
            },

        ];

        dataTest.forEach(data => {
            const {array, expected} = data;

            for (let i = 0; i < array.length; i++) {
                document.getElementsByName(array[i])[0].click();
            }

            const actual = document.getElementById('inputField').value;

            it(`Should return ${expected} when input data was ${array} `, () => {
                assert.strictEqual(actual, expected)
            });
            Clear();
        })
    });

    describe("Minus", () => {
        dataTest = [
            {
                array: [1, '-', 1, '='],
                expected: '0'
            },
            {
                array: [1, '-', 1, '+'],
                expected: '0'
            },
            {
                array: [1, '-', 0, '.', 2, 5, '='],
                expected: '0.75'
            },
            {
                array: [1, '-', 0, 0, 0, 0, '.', '.', 2, 5, '='],
                expected: '0.75'
            },
            {
                array: ['-',  5, '='],
                expected: '-5'
            },
            {
                array: [1, 2, 5, '-', 0, '.', 7, 3, '-', 0, '.', 2, 7, '='],
                expected: '124'
            },
            {
                array: [1, 2, 5, '-', 0, 0, 0, '.', 7, 3, '-', 0, 0, 0, 0, '.', 2, 7, '-'],
                expected: '124'
            },

        ];

        dataTest.forEach(data => {
            const {array, expected} = data;

            for (let i = 0; i < array.length; i++) {
                document.getElementsByName(array[i])[0].click();
            }

            const actual = document.getElementById('inputField').value;

            it(`Should return ${expected} when input data was ${array} `, () => {
                assert.strictEqual(actual, expected)
            });
            Clear();
        })
    });

    describe("multiplication", () => {
        dataTest = [
            {
                array: [1, '*', 1, '='],
                expected: '1'
            },
            {
                array: ['-' ,1, '*', 1, '+'],
                expected: '-1'
            },
            {
                array: [1, '*', 0, '.', 2, 5, '='],
                expected: '0.25'
            },
            {
                array: [1, '*', 0, 0, 0, 0, '.', '.', 2, 5, '='],
                expected: '0.25'
            },
            {
                array: ['*',  5, '='],
                expected: '0'
            },
            {
                array: [1, 2, 5, '-', 0, '.', 7, 3, '-', 0, '.', 2, 7, '='],
                expected: '124'
            },
            {
                array: [1, 2, 5, '-', 0, 0, 0, '.', 7, 3, '-', 0, 0, 0, 0, '.', 2, 7, '-'],
                expected: '124'
            },

        ];

        dataTest.forEach(data => {
            const {array, expected} = data;

            for (let i = 0; i < array.length; i++) {
                document.getElementsByName(array[i])[0].click();
            }

            const actual = document.getElementById('inputField').value;

            it(`Should return ${expected} when input data was ${array} `, () => {
                assert.strictEqual(actual, expected)
            });
            Clear();
        })
    });

    describe("division", () => {
        dataTest = [
            {
                array: [1, '/', 1, '='],
                expected: '1'
            },
            {
                array: ['-' ,1, '/', 1, '+'],
                expected: '-1'
            },
            {
                array: [2, '/', 1, '='],
                expected: '2'
            },
            {
                array: [3, 0, '/', 2, '='],
                expected: '15'
            },
            {
                array: ['/',  5, '='],
                expected: '0'
            },
            {
                array: [1, 0, 0, '/', 2, 5, '='],
                expected: '4'
            },
        ];

        dataTest.forEach(data => {
            const {array, expected} = data;

            for (let i = 0; i < array.length; i++) {
                document.getElementsByName(array[i])[0].click();
            }

            const actual = document.getElementById('inputField').value;

            it(`Should return ${expected} when input data was ${array} `, () => {
                assert.strictEqual(actual, expected)
            });
            Clear();
        })
    });

    describe("allTogether", () => {
        dataTest = [
            {
                array: [1, '+', 1, '*', 4, '/', 2, '='],
                expected: '4'
            },
            {
                array: ['-' ,1, '*', 5, '+', 1, 0, '/', 3, '='],
                expected: '1.667'
            },
            {
                array: [2, '/', 4, '+', 0, '.', 5, '.', 2, 5, '*', 2, '='],
                expected: '2.05'
            },
            {
                array: [3, 0, '/', 2, '*', 6, 0, 1, '+', 2, '.', 1, 0, 3, '/', 2, '='],
                expected: '4509'
            },
            {
                array: [5, '-',  5, '*', 2, 0, '-', 4, 0, '/', 2, '='],
                expected: '-20'
            },
        ];

        dataTest.forEach(data => {
            const {array, expected} = data;

            for (let i = 0; i < array.length; i++) {
                document.getElementsByName(array[i])[0].click();
            }

            const actual = document.getElementById('inputField').value;

            it(`Should return ${expected} when input data was ${array} `, () => {
                assert.strictEqual(actual, expected)
            });
            Clear();
        })
    });

});