module.exports = function toReadable(number) {
    let time = { Thousand: 1000, hundred: 100, ninety: 90, eighty: 80, seventy: 70, sixty: 60, fifty: 50, forty: 40, thirty: 30, twenty: 20, nineteen: 19, eighteen: 18, seventeen: 17, sixteen: 16, fifteen: 15, fourteen: 14, thirteen: 13, twelve: 12, eleven: 11, ten: 10, nine: 9, eight: 8, seven: 7, six: 6, five: 5, four: 4, three: 3, two: 2, one: 1 };
    let timeReverse = { 10: 'ten', 9: 'nine', 8: 'eight', 7: 'seven', 6: 'six', 5: 'five', 4: 'four', 3: 'three', 2: 'two', 1: 'one' };
    let res = [];

    if (number === 0) return 'zero';

    for (let key in time) {
        let num = Math.floor(number / time[key]);
        if (num !== 0) {
            if (time[key] > 0 && time[key] < 99) {
                res.push(key);
            } else {
                res.push(timeReverse[num], key);
            }

            number = number - num * time[key];
        }
    }

    return res.join(' ');
}
