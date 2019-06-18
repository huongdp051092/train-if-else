function isDivine(a, b) {
    if (a % b == 0) {
        return true;
    } else {
        return false;
    }
}

function oldEnough(age) {
    if (age >= 15) {
        return true;
    } else {
        return false;
    }
}

function compareWithZero(number) {
    if (number >= 0) {
        console.log('Lon hon 0');
    } else {
        console.log('Nho hon 0');
    }
}

function findMax(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else if (c > a && c > b) {
        return c;
    }
}

function academicRating(test, midTest, finalTest) {
    let mediumScore = (test + (midTest * 2) + (finalTest * 3)) / 6;
    if (mediumScore < 3.5) {
        return 'Hoc luc kem';
    } else if (mediumScore < 5.0) {
        return 'Hoc luc yeu';
    } else if (mediumScore < 6.5) {
        return 'Hoc luc trung binh';
    } else if (mediumScore < 8.0) {
        return 'Hoc luc kha';
    } else {
        return 'Hoc luc gioi';
    }
}