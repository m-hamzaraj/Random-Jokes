var a = document.querySelector("#btn");
var jokes = [
  "Why don’t skeletons fight each other? Because they don’t have the guts.",
  "I told my wife she should embrace her mistakes. She gave me a hug.",
  "Why did the scarecrow win an award? Because he was outstanding in his field.",
  "I asked my wife if I was the only one she’d been with. She said yes, all the others were nines and tens.",
  "Why don’t eggs tell jokes? Because they might crack up.",
  "I used to play piano by ear, but now I use my hands.",
  "Parallel lines have so much in common. It’s a shame they’ll never meet.",
  "I told my boss three companies were after me for a better position. Turns out they were the electric, gas, and water companies.",
  "I told my doctor I broke my arm in two places. He told me to stop going to those places.",
  "Why do ducks have feathers? To cover their butt quacks!",
  "Why don’t secret agents trust stairs? Because they’re always up to something.",
  "My wife asked me to put ketchup on the shopping list… now I can’t read anything.",
  "Why did the golfer bring an extra pair of pants? In case he got a hole in one.",
  "I told my wife she should learn to embrace her mistakes. She gave me a hug.",
  "Alcohol doesn’t solve problems, but neither does milk.",
  "I told my wife I wanted to be cremated. She made me an appointment for next Tuesday.",
  "Why do women always ask questions they already know the answers to? It’s the same reason lawyers do.",
  "I accidentally swallowed some food coloring. The doctor says I’m okay, but I feel like I’ve dyed a little inside.",
  "A naked man broke into a church. The police chased him around and finally caught him by the organ.",
  "Why did the banana go to the doctor? It wasn’t peeling well.",
  "A guy walks into a bar… and gets disqualified from the limbo contest.",
  "I told my wife she should do lunges to stay in shape. That was a big step forward.",
  "I bought a ceiling fan the other day. Complete waste of money. He just stands there, applauding.",
  "Why did the math book look sad? Because it had too many problems.",
  "I named my dog ‘Five Miles’ so I can tell people I walk Five Miles every day.",
  "A bear walks into a bar and says, ‘I’ll have a gin… and tonic.’ The bartender asks, ‘Why the big pause?’ The bear says, ‘I dunno, I was born with them.’",
  "I got fired from my job at the bank today. A woman asked me to check her balance, so I pushed her over.",
  "Why don’t oysters donate to charity? Because they’re shellfish.",
  "I used to be a baker, but I couldn’t make enough dough.",
  "I started telling people about the benefits of dried grapes. It’s all about raisin awareness.",
];
var index = () => {
  var counts = Math.floor(Math.random() * jokes.length);
  var joke = document.querySelector("#joke");
  joke.innerHTML = jokes[counts];
};
a.addEventListener("click", index);
