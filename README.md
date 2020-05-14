This is a set of simple JS tasks taken from: https://js.checkio.org/ <br>
For each of them I'm presenting both my solution and the one I find the best (best solutions at checkio are revealed only after you find your own one)<br>
1. Backward string <br>
You should return a given string in reverse order <br>
2. Easy unpack <br>
create a function that gets an array and returns a tuple with 3 elements: the first, third and second element from the last for the given array
3. Remove all before <br>
What you need to do here is to remove from the array all of the elements before the given one.
For the illustration we have a array [3, 4, 5] and we need to remove all elements that go before 3 - which is 1 and 2.
We have two edge cases here: (1) if a cutting element cannot be found, then the array shoudn't be changed. (2) if the array is empty, then it should remain empty.
4. All upper <br>
Check if a given string has all symbols in upper case - then the function should return True. Otherwise it should return False. If the string is empty or doesn't have any letter in it - function should return True.
5. Replace first <br>
In a given array the first element should become the last one. An empty array or array with only one element should stay the same.
6. Between markers <br>
You are given a string and two markers (the initial one and final). You have to find a substring enclosed between these two markers. But there are a few important conditions. <br>
<ul>
  <li>The initial and final markers are always different. </li>
  <li>The initial and final markers are always 1 char size. </li>
  <li>The initial and final markers always exist in a string and go one after another.</li>
</ul>
Input: Three arguments. All of them are strings. The second and third arguments are the initial and final markers.<br>
Output: A string.<br><br>
7. Correct sentence <br>
For the input of your function, you will be given one sentence. You have to return a corrected version, that starts with a capital letter and ends with a period (dot). <br>
Pay attention to the fact that not all of the fixes are necessary. If a sentence already ends with a period (dot), then adding another one will be a mistake. <br><br>
8. Max digit <br>
You have a number and you need to determine which digit in this number is the biggest.<br><br>
9. Even the last <br>
In a given array you should sum elements with even indexes and multiply the sum by the last element of an array. <br>
An empty array should return 0.
