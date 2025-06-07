/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
	const resultGroups = {};
	
	for (let word of strs) {
		const sortArr = word.split("").sort().join("");
		
		if (resultGroups[sortArr] === undefined) {
			resultGroups[sortArr] = [word];
		} else {
			resultGroups[sortArr].push(word);
		}
	}
	
	return Object.values(resultGroups);
};