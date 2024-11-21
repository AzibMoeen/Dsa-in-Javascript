

var reverseWords = function(s) {
    let words = s.split(' ');

    for(let i = 0; i<words.length;i++){
        let word = words[i].split('')
         let left = 0, right = word.length - 1;
        while (left < right) {
           
            [word[left], word[right]] = [word[right], word[left]];
            left++;
            right--;
        }
         words[i]=word.join('')
    }
  return words.join(' ')
   
};


console.log(reverseWords("Let's take LeetCode contest")) // "s'teL ekat edoCteeL tsetnoc"