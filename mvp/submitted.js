var urlParams = new URLSearchParams(window.location.search);

var i;
var answers = "";
for (i = 1; i <= 10; i++) {
    answers += urlParams.get(`ans${i}`);
}

console.log(answers);

var results = { "babbaaaaab": "Calista", "bbbaaabaab": "Mame Diarra", "aabbaaabab": "Ngina", "ababaabaaa": "Nicole M", "baaabbabab": "Izear", "abbbbbbaab": "Mariela", "abaaaaaaab": "Eva", "ababaabaab": "Fion", "aaaaababbb": "Fatou", "bbbbbbaabb": "Shira", "bbaaaabaaa": "Dana", "bbbaaaaaba": "Syeda", "bbbaaabbbb": "Judith", "babbabaaab": "Erika", "aaaaaaaaab": "Nicole I", "bbbbaaaabb": "Maeghan", "bbbbbababb": "Andrea", "bbbbaababb": "Amelia", "aabaaaaabb": "Liana", "abaabbababb": "Yi Yang", "abbaaababb": "Etta", "abbbbbbaba": "Connie" }

var details = { "Calista": { "image": "../img/calista.jpeg", "descript": "Calista was born on July 2 and her sign is Cancer. She is currently a 17 year old, rising senior in high school living near Yonkers. Her hobbies include tennis and archery. Her love for people has made her a super social person. Fun Fact: She lives in the suburbs." }, "Mame Diarra": { "image": "../img/mamediarra.jpg", "descript": "Mame Diarra was born on March 26 and her sign is Aries. She is currently a 17 year old, rising senior in high school living in Queens. Her hobbies include singing with her father. Her love for music has made her close with her father who is a musician, and super talented. Fun Fact: She was born in Miami and raised in Senegal!" }, "Ngina": { "image": "../img/ngina.png", "descript": "Ngina was born on November 27th and her sign is Saggitarius. She is currently a 16 year old, rising senior in high school living in Manhattan. Her hobbies include drawing and playing volleyball. She is obsessed with seltzer water and really enjoys croissants. Her favorite coding language is python.Fun Fact: She has 3 fishes!" }, "Nicole M": { "image": "../img/nicolem.jpg", "descript": "Nicole M was born on December 4 and her sign is Sagittarius. She is currently a 17 year old, senior junior in high school living in New Jersey. Her hobbies include playing instruments and programming robots. Her love for Jesus has shaped her into a faithful and kind person to all. Fun Fact: She loves her boyfriend and Jesus!" }, "Izear": { "image": "../img/izear.jpg", "descript": "Izear was born on November 10 and her sign is Scorpio. She is currently a 15 year old, rising junior in high school living in Queens. Her hobbies include dancing and experimenting with makeup. Her love for K-pop has inspired her unique sense of fashion. She is adventurous, yet can be selfish at times. Even if people hate on her for this ONE bad quality, she does not let this stop her from venturing into the great unknown. She values herself more than anything. Fun Fact: She is a fantastic cook!" }, "Mariela": { "image": "../img/mariela.jpg", "descript": "Mariela was born on May 31st and her sign is Gemini. She is currently a 17 year old, rising senior in high school living in Queens. Her hobbies include watching sports on TV, specifically soccer. Her love for her clothes has shaped her into a fashionista with unique styles. Fun Fact: She enjoys mixing mayo and ketchup together as a dip!" }, "Eva": { "image": "../img/eva.jpg", "descript": "Eva was born on January 30 and her sign is Aquarius. She is currently a 17 year old, rising senior in high school living in Westchester. Her hobbies include dancing and singing. Her love for her family, especially her dog, has made her into a loving and compassionate person. Fun Fact: She can make her tongue do the worm!" }, "Fion": { "image": "../img/fion.jpg", "descript": "Fion was born on January 27 and her sign is Aquarius. She is currently a 16 year old, rising junior in high school, living in Brooklyn. Her hobbies include swimming and chemistry. She has been swimming since the age of 5 and is now a competitive swimmer. She seeks adventure at all times. She enjoys coding and her favorite coding language is python. She hopes to major in chemical engineering in the future. Fun Fact: She is obsessed with Marvel!" }, "Fatou": { "image": "../img/fatou.jpg", "descript": "Fatou was born on July 5th and her sign is Cancer. She is currently a 17 year old, rising senior  in high school living in the Bronx. Her hobbies include roller-skating and playing the ukulele. Her love for space and the unknown drove her desire to go into the STEM field. She wants to go into cyber security. She values being true to yourself more than anything. Fun Fact: She is a big fangirl!" }, "Shira": { "image": "../img/shira.jpg", "descript": "Shira was born on October 5 and her sign is Libra. She is currently a 16 year old, rising senior in high school living in Long Island. Her hobbies include doing her nails and trying new nail arts. Her love for her family makes her family-orientated and caring for those close to her.Fun Fact: Shira is not her first name but her middle name!" }, "Dana": { "image": "../img/dana.jpg", "descript": "Dana was born on March 29 and her sign is Aries. She is currently a 17 year old, rising senior in high school living in Brooklyn. Her hobbies hanging out and socializing with everyone. Her love for people has made her into a friendly, kind, and social human being. Fun Fact: She knows how to play the cello!" }, "Syeda": { "image": "../img/syeda.jpg", "descript": "Syeda was born on September 28 and her sign is Libra. She is currently a 16 year old, rising senior in high school living in Queens. Her hobbies include singing, dancing and coding. Her love for her family has shaped her into a very family-orientated person and super caring. Fun Fact: She has moved 4 times in NY in 2 years!" }, "Judith": { "image": "../img/judith.jpg", "descript": "Judith was born on October 10 and her sign is Libra. She is currently a 17 year old, rising senior in high school living in Queens. Her hobbies include basketball, soccer, and eating. Her love for sleep has made her super energetic everyday and help her fellow classmates when coding. Fun Fact: She can say “I’m tired” in 21 languages!" }, "Erika": { "image": "../img/erika.jpg", "descript": "Erika was born on February 3 and her sign is Aquarius. She is currently a 17 year old, rising senior in high school living in Bronx. Her hobbies include playing soccer, dancing, and writing. Her love the people around her has made her appreciate everyone that crosses her path and leaves an impact on her life. Fun Fact: She does not eat fruit!" }, "Nicole I": { "image": "../img/nicolei.jpg", "descript": "Nicole I. was born on January 14 and her sign is Capricorn. She is currently a 17 year old, rising senior in high school living in Queens. Her hobbies include anything music related, like singing and dancing. Her love for her family and friends has shaped her into a caring person for those close to her. Fun Fact: She met Christian Siriano!" }, "Maeghan": { "image": "../img/maeghan.jpg", "descript": "Maeghan was born on December 6 and her sign is Sagittarius. She is currently a 16 year old, senior junior in high school living in Queens. Her hobbies include reading comics and playing video games. Her love for food has made her into an adventurous eater, willing to try anything. Fun Fact: She was in the chemistry olympiad!" }, "Andrea": { "image": "../img/andrea.jpg", "descript": "Andrea was born on March 26 and her sign is Aries. She is currently a 17 year old, rising senior in high school living in Queens. Her hobbies include playing basketball whenever she has free time. Her love for life has made her grateful for all decisions and choices that happen in life. Fun Fact: She considers herself boring!" }, "Amelia": { "image": "../img/amelia.jpeg", "descript": "Amelia was born on July 31 and her sign is Leo. She is currently an 18 year old, rising senior in high school living in Manhattan. Her hobbies include reading and completing brain teaser puzzles. Her love for knowledge has shaped her into a bright and intelligent student. Fun Fact: She can speak multiple languages." }, "Liana": { "image": "../img/liana.jpg", "descript": "Liana was born on February 27 and her sign is Pisces. She is currently a 17 year old, rising senior in high school living in New Jersey. Her hobbies include dancing and sleeping. Her love for music and dance has shaped her into a confident dancer.Fun Fact: She watches Game of Throne!" }, "Yi Yang": { "image": "../img/yiyang.png", "descript": "Yi Yang was born on January 14 and her sign is Capricorn. She is currently a 17 year old, rising senior in high school living in Queens. Her hobbies include chilling and watching TV. Her love for relaxation has shaped her into a very introverted but unique person. Fun Fact: She enjoys watching K-Dramas!" }, "Etta": { "image": "../img/etta.jpg", "descript": "Etta was born on August 21 and her sign is Leo. She is currently a 16 year old, rising senior in high school living in Rockland County. Her hobbies include reading and watching movies. Her love for her family makes her super caring and loving for those close to her.Fun Fact: She loves live TV (our group videos)!" }, "Connie": { "image": "../img/connie.jpg", "descript": "" } };

var person;
if (answers in results) {
    document.getElementById("result").innerHTML = results[answers];
    person = results[answers];
} else {
    var people = Object.values(results);
    // console.log(people);
    var num = Math.floor(Math.random() * people.length); //random number
    person = people[num];
    document.getElementById("result").innerHTML = person;
}

console.log(person);
var deets = details[person];
console.log(deets);
document.getElementById("image").setAttribute("src", deets["image"]);
document.getElementById("description").innerText = deets["descript"];