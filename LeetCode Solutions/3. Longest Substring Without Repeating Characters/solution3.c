#include <stdio.h>

int lengthOfLongestSubstring(char * s){
	int alpha[128] = {0};
	int sol = 0;
	int head = 0;
	int tail = 0;
	int len = 0;
	while (s[head]!='\0') {
		while (alpha[s[head]] == 1) {
			alpha[s[tail++]]--;
		}
		alpha[s[head++]]++;
		len = head-tail;
		if (len > sol) sol = len;
	}
	return sol;
}