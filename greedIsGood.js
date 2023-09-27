//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point

function score(dice) {
    let score = 0
    let arr = dice.sort()

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);

        if (arr.filter(x => x == arr[i]).length >= 3 && i <= 3) {
            let index = arr.indexOf(arr[i], 0);

            switch (arr[i]) {
                case 1:
                    score += 1000;
                    break;
                case 2:
                    score += 200;
                    break;
                case 3:
                    score += 300;
                    break;
                case 4:
                    score += 400;
                    break;
                case 5:
                    score += 500;
                    break;
                case 6:
                    score += 600;
                    break;
            }
            i += 3
            console.log(arr[i], 'triple')
        }

        switch (arr[i]) {
            case 1:
                score += 100;
                break;
            case 5:
                score += 50
                break
        }

    }

    return score
}

console.log(score([3,3,3,3,3]));
console.log(score([4, 4, 4, 3, 3]));
console.log(score([2, 4, 4, 5, 4]));
console.log(score([1,1,1, 3, 3]));
