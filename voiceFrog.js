string="He  passed a  well and  heard frogs  croak. For  some reason Apoopan thought  that the frogs  were making fun of  him. He got annoyed and said  'Don't you dare make fun of me. My Son is a doctor and he will gather you all up and dissect you.'  But the frogs continued to cry and croak. Apoopan got angry and scolded  'My other son is a Police inspector. He will beat the hell out of you.'  The frogs continued to shout in the well making Apoopan mad with anger.  'No respect for old people!' said Apoopan. 'I will  teach you alesson myself.' Apoopan then picked up a stick and jumped into the well to hit the frogs.";
	
	

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

			function speak () {
				var msg = new SpeechSynthesisUtterance();
				msg.volume = volumeSlider.value;
				msg.voice = voiceMap[voiceOptions.value];
                msg.rate = rateSlider.value;
				msg.Pitch = pitchSlider.value;
				msg.text = string;
				window.speechSynthesis.speak(msg);
			};

speak();
