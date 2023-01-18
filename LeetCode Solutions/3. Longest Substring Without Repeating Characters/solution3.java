import java.util.HashSet;
class Solution {
	public int lengthOfLongestSubstring(String s) {
		HashSet<Character> set = new HashSet<Character>();
		int head = 0; int tail = 0; int count = 0;
		while (head < s.length()) {
			while(set.contains(s.charAt(head))) {
				set.remove(s.charAt(tail++));
			}
			set.add(s.charAt(head++));
			count = Math.max(head-tail, count);
		}
		return count;
	}
}