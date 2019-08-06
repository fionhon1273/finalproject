var urlParams = new URLSearchParams(window.location.search);

var i;
var answers = "";
for(i = 1; i <= 10; i++) {
  answers += urlParams.get(`ans${i}`);
}

console.log(answers);

var results= {"babbaaaaab":"Calista", "bbbaaabaab":"Mame Diarra", "aabbaaabab":"Ngina", "ababaabaaa":"Nicole M", "baaabbabab":"Izear", "abbbbbbaab":"Mariela", "abaaaaaaab":"Eva", "ababaabaab":"Fion", "aaaaababbb":"Fatou", "bbbbbbaabb":"Shira", "bbaaaabaaa":"Dana", "bbbaaaaaba":"Syeda", "bbbaaabbbb":"Judith", "babbabaaab":"Erika", "aaaaaaaaab":"Nicole I", "bbbbaaaabb":"Maeghan", "bbbbbababb":"Andrea", "bbbbaababb":"Amelia", "babaaaaabb":"Liana", "abaabbababb":"Yi Yang"}
// console.log(urlParams.has('ans1')); // true
// console.log(urlParams.get('ans1'));
<<<<<<< HEAD
=======
if (answers in results){
  console.log(results[answers]);
  document.getElementById("result").innerHTML = (results[answers])
} else{
    for(answers in results) {
      var value = results[answers];
      document.getElementById("result").innerHTML = value
    }

}
//
// for(answers in results) {
//   var value = results[answers];
//
// }
//
// var anysize = 1;//the size of string
// result="";
// for( var i=0; i < anysize; i++ )
//         result += results[Math.floor(Math.random() * results.length)];
// console.log(result);
>>>>>>> a6c77292eded98de458af4db3554f5269c7f8f45
