function truncateString(str, num) {
  
  if (num >= str.length) {
    return str;
  }else{
    return str.split("").slice(0, num).join("")+"...";
  }
   
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
