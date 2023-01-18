var lengthOfLongestSubstring = function(s) {
	var [set, head, tail, max] = [new Set(), 0, 0, 0]
	while (head < s.length) {
		while (set.has(s[head])) {
			set.delete(s[tail])
			tail++
		}
		set.add(s[head])
		head++
		max = Math.max(max, head-tail)
	}
	return max
}