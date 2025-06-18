/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const rememberMagazine = {};

    for (let string of magazine) {
        if (Object.hasOwn(rememberMagazine, string)) {
            rememberMagazine[string] += 1;
        } else {
            rememberMagazine[string] = 1;
        }
    }
  
    for (let string of ransomNote) {
        if (!Object.hasOwn(rememberMagazine, string)) {
            console.log("caseA");
            return false;
        } else if (Object.hasOwn(rememberMagazine, string)) {
            rememberMagazine[string] -= 1;
            if (rememberMagazine[string] < 0) {
              console.log("caseB");
                return false;
            }
        }
    }
    return true;
};