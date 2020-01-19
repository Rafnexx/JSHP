function left_is_grater(args) {
    return args[0] < args[1]
}

function left_is_smaller(args) {
    return args[0] < args[1] < args[2]
}

function _left_is_grater(args) {
    return args[0] > args[1] > args[2]
}

// W miejscu a, b, c, d, e, f wpisz false albo true

function test_result(...args) {
    if (
        (left_is_grater([1, 2]) === args[0]) &&
        (left_is_grater([2, 1]) === args[1]) &&
        (left_is_grater([-2, []]) === args[6]) &&
        //
        (left_is_smaller([1, 2, 3]) === args[2]) &&
        (left_is_smaller([3, 2, 0]) === args[3]) &&
        //
        (_left_is_grater([1, 2, 3]) === args[4]) &&
        (_left_is_grater([3, 2, 1]) === args[5])
    ) {
        document.body.style.backgroundColor = "lightgreen";
    } else {
        document.body.style.backgroundColor = "red";
    }
}

test_result(args)