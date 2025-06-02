/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    const getFunction = {
        toBe : function (value) {
            if (val === value) {
                return true;
            } else if (val !== value) {
                throw "Not Equal";
            }
        },
        notToBe : function (value) {
            if (val !== value) {
                return true;
            } else {
                throw "Equal";
            }
        }
    }
    return getFunction;
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */