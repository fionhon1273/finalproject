var urlParams = new URLSearchParams(window.location.search);

var i;
var answers = "";
for(i = 1; i <= 10; i++) {
  answers += urlParams.get(`ans${i}`);
}

console.log(answers);

var results= {"babbaaaaab":"Calista", "bbbaaabaab":"Mame Diarra", "aabbaaabab":"Ngina", "ababaabaaa":"Nicole M", "baaabbabab":"Izear", "abbbbbbaab":"Mariela", "abaaaaaaab":"Eva", "ababaabaab":"Fion", "aaaaababbb":"Fatou", "bbbbbbaabb":"Shira", "bbaaaabaaa":"Dana", "bbbaaaaaba":"Syeda", "bbbaaabbbb":"Judith", "babbabaaab":"Erika", "aaaaaaaaab":"Nicole I", "bbbbaaaabb":"Maeghan", "bbbbbababb":"Andrea", "bbbbaababb":"Amelia", "babaaaaabb":"Liana", "abaabbababb":"Yi Yang", "abbaaababb":"Etta", "abbbbbbaba":"Connie"}

var details = {"Calista":{"image":"../img/calista.jpeg", "descript":"This person is short."},"Mame Diarra":{"image":"", "descript":""},"Ngina":{"image":"", "descript":""},"Nicole M":{"image":"", "descript":""},"Izear":{"image":"", "descript":""},"Mariela":{"image":"", "descript":""},"Eva":{"image":"", "descript":""},"Fion":{"image":"", "descript":""},"Fatou":{"image":"", "descript":""},"Shira":{"image":"", "descript":""},"Dana":{"image":"", "descript":""},"Syeda":{"image":"", "descript":""},"Judith":{"image":"", "descript":""},"Erika":{"image":"", "descript":""},"Nicole I":{"image":"", "descript":""},"Maeghan":{"image":"", "descript":""},"Andrea":{"image":"", "descript":""},"Amelia":{"image":"", "descript":""},"Liana":{"image":"", "descript":""},"Yi Yang":{"image":"", "descript":""},"Etta":{"image":"", "descript":""},"Connie":{"image":"", "descript":""}}

if (answers in results){
  console.log(results[answers]);
  document.getElementById("result").innerHTML = results[answers];
  var person = results[answers];
  var deets = details[person];
  document.getElementById("image").setAttribute("src", deets["image"]);
  document.getElementById("description").innerText = deets["descript"];
}
else{
    var rand = Object.values(results);
    document.getElementById("result").innerHTML = rand[Math.floor(Math.random() * rand.length)];
    
}
