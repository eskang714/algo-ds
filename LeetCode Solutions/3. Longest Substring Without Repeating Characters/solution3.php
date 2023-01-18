<?php
class Solution {
	/*
	 @param String $s
 	@return Integer
	*/
	function lengthOfLongestSubstring($s) {
		$head = 0; $tail = 0; $set = array (); $count = 0; $high = 0;
		while ($head < strlen($s)) {
			while ($set[$s[$head]] == 1) {
				$set[$s[$tail++]]--;
			}
			$set[$s[$head++]] = 1;
			$count = ($head - $tail);
			if ($count > $high) $high = $count;
		}
		return $high;
	}
}

?>