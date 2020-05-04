const priority = { '-': 1, '+': 1, '*': 2, '/': 2 };
const methos = { '-': (a, b) => a - b, '+': (a, b) => a + b, '/': (a, b) => a / b, '*': (a, b) => a * b }

const getRes = (a, b, key) => methos[key](a, b);

const applySymbol = (stackS, stackN) => {
    const res = getRes(stackN[stackN.length - 2], stackN[stackN.length - 1], stackS[stackS.length - 1]);
    stackS.pop();
    stackN.pop();
    stackN.pop();
    return res;
};

function isSymbols(lat) {
    return Object.keys(priority).includes(lat);
}

function calculator(str) {
    let StakSymbols = [];
    let StakNumbers = [];
    for (let i = 0; i < str.length; i++) {

        if (isSymbols(str[i])) {

            const stakSL = StakSymbols.length;

            if (stakSL == 0 || priority[str[i]] >= priority[StakSymbols[stakSL - 1]]) {
                StakSymbols.push(str[i]);
            } else {

                do {
                    StakNumbers.push(applySymbol(StakSymbols, StakNumbers));

                } while (priority[str[i]] === priority[StakSymbols[StakSymbols.length - 1]])

                StakSymbols.push(str[i]);
            }
        } else {
            StakNumbers.push(parseInt(str[i]));
        }
    }

    while(StakNumbers.length !== 1) {
        StakNumbers.push(applySymbol(StakSymbols,StakNumbers));
    }

    return StakNumbers[0];
}
console.log(calculator('8+2*7-3*5-2+3'))
