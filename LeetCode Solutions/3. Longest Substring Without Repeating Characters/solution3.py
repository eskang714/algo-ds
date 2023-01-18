class Solution:
	def lengthOfLongestSubstring(self, s: str) -> int:
		head = 0; tail = 0; lenSet = set(); count = 0; sol = 0
		while head < len(s):
			while s[head] in lenSet:
				lenSet.remove(s[tail])
				tail += 1
			lenSet.add(s[head])
			head += 1
			count = head-tail
			if (count > sol):
				sol = count
		return sol