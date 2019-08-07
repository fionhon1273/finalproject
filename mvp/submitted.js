
var urlParams = new URLSearchParams(window.location.search);

var i;
var answers = "";
for(i = 1; i <= 10; i++) {
  answers += urlParams.get(`ans${i}`);
}

console.log(answers);

var results= {"babbaaaaab":"Calista", "bbbaaabaab":"Mame Diarra", "aabbaaabab":"Ngina", "ababaabaaa":"Nicole M", "baaabbabab":"Izear", "abbbbbbaab":"Mariela", "abaaaaaaab":"Eva", "ababaabaab":"Fion", "aaaaababbb":"Fatou", "bbbbbbaabb":"Shira", "bbaaaabaaa":"Dana", "bbbaaaaaba":"Syeda", "bbbaaabbbb":"Judith", "babbabaaab":"Erika", "aaaaaaaaab":"Nicole I", "bbbbaaaabb":"Maeghan", "bbbbbababb":"Andrea", "bbbbaababb":"Amelia", "babaaaaabb":"Liana", "abaabbababb":"Yi Yang", "abbaaababb":"Etta", "abbbbbbaba":"Connie"}

var details = {"Calista":{"image":"../img/calista.jpeg", "descript":"This person is short."},"Mame Diarra":{"image":"", "descript":""},"Ngina":{"image":"ngina.png", "descript":"Ngina was born on November 27th and her sign is Saggitarius. She is currently a 16 year old, rising senior in high school living in Manhattan. Her hobbies include drawing and playing volleyball. She is obsessed with seltzer water and really enjoys croissants. Her favorite coding language is python.Fun Fact: She has 3 fishes!"},"Nicole M":{"image":"", "descript":""},"Izear":{"image":"", "descript":"Izear was born on November 10 and her sign is Scorpio. She is currently a 15 year old, rising junior in high school living in Queens. Her hobbies include dancing and experimenting with makeup. Her love for K-pop has inspired her unique sense of fashion. She is adventurous, yet can be selfish at times. Even if people hate on her for this ONE bad quality, she does not let this stop her from venturing into the great unknown. She values herself more than anything. Fun Fact: She is a fantastic cook!"},"Mariela":{"image":"", "descript":""},"Eva":{"image":"", "descript":""},"Fion":{"image":"", "descript":"Fion was born on January 27 and her sign is Aquarius. She is currently a 16 year old, rising junior in high school, living in Brooklyn. Her hobbies include swimming and chemistry. She has been swimming since the age of 5 and is now a competitive swimmer. She seeks adventure at all times. She enjoys coding and her favorite coding language is python. She hopes to major in chemical engineering in the future. Fun Fact: She is obsessed with Marvel!"},"Fatou":{"image":"", "descript":"Fatou was born on July 5th and her sign is Cancer. She is currently a 17 year old, rising senior  in high school living in the Bronx. Her hobbies include roller-skating and playing the ukulele. Her love for space and the unknown drove her desire to go into the STEM field. She wants to go into cyber security. She values being true to yourself more than anything. Fun Fact: She is a big fangirl!"},"Shira":{"image":"", "descript":""},"Dana":{"image":"", "descript":""},"Syeda":{"image":"", "descript":""},"Judith":{"image":"", "descript":""},"Erika":{"image":"", "descript":""},"Nicole I":{"image":"", "descript":""},"Maeghan":{"image":"", "descript":""},"Andrea":{"image":"", "descript":""},"Amelia":{"image":"", "descript":""},"Liana":{"image":"", "descript":""},"Yi Yang":{"image":"", "descript":""},"Etta":{"image":"", "descript":""},"Connie":{"image":"", "descript":""}}

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
