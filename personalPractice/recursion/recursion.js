function sum(arr, n) {
    // Only change code below this line
  //if n is 10, the the first number we would add is 10 to 0; 
  //sum would equal 10
  //<-- first recursion. -->then we would subtract 1 from 10 
  //and n would become 9
  //then we would add 10 to 9; sum would equal 19
  //then we would subtract 1 from n <<second recursion
  //then n would be come 8
  //then wed add 19 to 8; sum would equal 27
  //then we would subtract 1 from n <<3rd recursion
  //n would become 7
  //then wed add 27 to 7; sum would equal 34
  //then wed subtract 1 from 7 < 4th recursion
  //n would become 6; wed add 6 to 34; sum would become 40
  //then wed subtract 1 from 6 <== 5th recursion
  //n would be come 5, 5 plus 40; sum would equal 45
  //then wed subtract 1 from 5 <--4th recursion
  //n would become 4; 4 plus 45; sum would become 49
  //then wed subtract 1 from n; n would become 4
  //then wed add 4(n) to sum; sum would become 53
  
  // examples sum([2,3,4], 1);
  if (n <= 0)
  {
    return 0;
  }
  else
  {
    console.log(arr[n - 1] + "<-- " + (n - 1) + "th iteration");
    return sum(arr, n - 1) + arr[n - 1];
  }

  
  
}

console.log(sum([6, 9 , 21, 13, 3, 5, 6, 4, 2, 10], 3));
      
    // Only change code above th}
  