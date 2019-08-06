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

if (answers in results){
  console.log(results[answers]);
  document.getElementById("result").innerHTML = results[answers];
}
else{
    var rand = Object.values(results);
    document.getElementById("result").innerHTML = rand[Math.floor(Math.random() * rand.length)];
}
