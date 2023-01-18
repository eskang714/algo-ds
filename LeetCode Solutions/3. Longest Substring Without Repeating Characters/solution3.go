func lengthOfLongestSubstring(s string) int {
	hash := make(map[byte]bool)
	var head, tail, high int = 0, 0, 0
	
	for (head < len(s)){
		for (hash[s[head]]) {
			hash[s[tail]] = false; tail++
		}
		hash[s[head]] = true; head++
		if (head-tail > high) {high = head-tail}
	}
	return high
}