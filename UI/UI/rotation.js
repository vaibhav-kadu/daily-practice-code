

const str1 = "waterbottle";
const str2 = "werbottleat";
console.log(isRotation(str1, str2));

function isRotation(str1, str2) {
 
  if (str1.length !== str2.length) {
    return false;
  }

 
  let doubleStr = str1 + str1;

 
  for (let i = 0; i <= doubleStr.length - str2.length; i++) {
    if (doubleStr.slice(i, i + str2.length) === str2) {
      return true;
    }
  }

  return false;
}


# commit on 2025-12-19 00:00:00
