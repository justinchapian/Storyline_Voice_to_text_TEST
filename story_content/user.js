window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  let player = GetPlayer()


let storyline_rec_result = player.GetVar("storyline_rec_result")


let data = [
    '5',
    'five'
]


let checkSentence = (sentence) => {
  // Convert the sentence to lowercase for case-insensitive matching
  let lowerCaseSentence = sentence.toLowerCase();
  
  // If one or more of the words are found, set userInputCheck to 1
  for (let i = 0; i < data.length; i++) {
    let word = data[i].toLowerCase();
    if (lowerCaseSentence.includes(word)) {
       player.SetVar("userInputCheck", 1) 
       return
    }
  }
  // If none of the words are found, set userInputcheck to 2
  player.SetVar("userInputCheck", 2) 
  return
}


checkSentence(storyline_rec_result)
}

};
