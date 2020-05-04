function calculator(str) {
    let ArrSum = [];
    let result = 0;
    let StakSymbols = [];
    let StakNumbers = [];
    let priority = { '-': 1, '+': 1, '*': 2, '/': 2 };
    let methos = { '-': (a, b) => a - b, '+': (a, b) => a + b, '/': (a, b) => a / b, '*': (a, b) => a * b }
    for (let i = 0; i < str.length; i++) {

        if (str[i] == '+' || str[i] == '-' || str[i] == '*' || str[i] == '/') {
            if (StakSymbols.length == 0 || priority[str[i]] >= priority[StakSymbols[StakSymbols.length - 1]]) {
                StakSymbols.push(str[i]);
            }
            else {
                do {
                    let a = methos[StakSymbols[StakSymbols.length - 1]](StakNumbers[StakNumbers.length - 2], StakNumbers[StakNumbers.length - 1]);
                    StakNumbers.pop();
                    StakNumbers.pop();
                    StakSymbols.pop();
                    StakNumbers.push(a);

                } while (priority[str[i]] === priority[StakSymbols[StakSymbols.length - 1]])
                StakSymbols.push(str[i]);
            }

        }
        if (str[i] != '+' && str[i] != '-' && str[i] != '/' && str[i] != '*') {
            StakNumbers.push(parseInt(str[i]));
        }
    }
    for (let i = StakNumbers.length - 1; i > 0; i--) {
        // if (StakSymbols[i] == 0) {
        //     continue
        // }
        let a = (methos[StakSymbols[i - 1]](StakNumbers[i - 1], StakNumbers[i]));
        StakNumbers.pop();
        StakNumbers.pop();
        StakNumbers.push(a);

    }

    return StakNumbers[0];
}
console.log(calculator('8-2*7-3*5'))

