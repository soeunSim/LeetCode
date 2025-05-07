/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let box = n;
    return function() {
        return box++;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */