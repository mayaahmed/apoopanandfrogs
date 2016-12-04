string1="He  passed a  well and  heard frogs  croak. For  some reason Apoopan thought  that the frogs  were making fun of  him.";
string2= "He got annoyed and said  'Don't you dare make fun of me. My Son is a doctor and he will gather you all up and dissect you.'";

string3="But the frogs continued to cry and croak. Apoopan got angry and scolded  'My other son is a Police inspector.'";

 
string4=" 'He will beat the hell out of you'.  The frogs continued to shout in the well making Apoopan mad with anger.";
  

string5= "'No respect for old people!' said Apoopan. 'I will  teach you alesson myself'. ";

 string6="Apoopan then picked up a stick and jumped into the well to hit the frogs.";
	
	

			function checkCompatibilty () {
				if(!('speechSynthesis' in window)){
					alert('Your browser is not supported. If google chrome, please upgrade!!');
				}
			};

			checkCompatibilty();

			var voiceOptions = document.getElementById('voiceOptions');
			var volumeSlider = document.getElementById('volumeSlider');
			var rateSlider = document.getElementById('rateSlider');
			var pitchSlider = document.getElementById('pitchSlider');
var myText = document.getElementById('myText');

			var voiceMap = [];

			function loadVoices () {
				var voices = speechSynthesis.getVoices();
				for (var i = 0; i < voices.length; i++) {
					var voice = voices[i];
					var option = document.createElement('option');
					option.value = voice.name;
					option.innerHTML = voice.name;
					voiceOptions.appendChild(option);
					voiceMap[voice.name] = voice;
				};
			};

			window.speechSynthesis.onvoiceschanged = function(e){
				loadVoices();
			};


function initializeMsg(msg){
  msg.volume = volumeSlider.value;
				msg.voice = voiceMap[voiceOptions.value];
                msg.rate = rateSlider.value;
				msg.Pitch = pitchSlider.value;
}

			
function speak(){
                var msg1 = new SpeechSynthesisUtterance();
                initializeMsg(msg1);
				msg1.text = string1;
				window.speechSynthesis.speak(msg1);
                var msg2 = new SpeechSynthesisUtterance();
                initializeMsg(msg2);
                msg2.text = string2;
                window.speechSynthesis.speak(msg2);

                var msg3 = new SpeechSynthesisUtterance();
                initializeMsg(msg3);
                msg3.text = string3;
                window.speechSynthesis.speak(msg3);
     
                var msg4 = new SpeechSynthesisUtterance();
                initializeMsg(msg4);           
                msg4.text = string4;
                window.speechSynthesis.speak(msg4); 

                var msg5 = new SpeechSynthesisUtterance();
                initializeMsg(msg5);
                msg5.text = string5;
                window.speechSynthesis.speak(msg5);
               
                var msg6 = new SpeechSynthesisUtterance();
                initializeMsg(msg6);
                msg6.text = string6;
                window.speechSynthesis.speak(msg6);
                
			};

speak();

function stop(){
speechSynthesis.cancel();
}

function pause(){
speechSynthesis.pause();
}

function resume(){
speechSynthesis.resume();
}
