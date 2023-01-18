function lengthOfLongestSubstring(s: string): number {
	let set = new Set(); let [head, tail, count, high] = [0, 0, 0, 0];
	while (head < s.length) {
		while(set.has(s[head])) {
			set.delete(s[tail++])
		}
		set.add(s[head++])
		count = head-tail
		if (count > high) high = count
	}
	return high
};