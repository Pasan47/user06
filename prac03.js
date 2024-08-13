const data = [
    {
        image: 'img/hungry.jpg',
        text: 'I\'m Hungry'
    },
    {
        image: 'img/thirsty.jpg',
        text: 'I\'m Thirsty'
    },
    {
        image: 'img/happy02.jpg',
        text: 'I\'m Happy'
    }
];

data.forEach(createBox);

function createBox(item) {
    const { image, text } = item;
    const box = document.createElement('div');
    box.classList.add('box');

    box.innerHTML = `
        <img src="${image}" alt="${text}" />
        <p class="info">${text}</p>
    `;

    document.body.appendChild(box);

    box.addEventListener('click', () => {
        setTextMessage(text);
        speakText();

        box.classList.add('active');
        setTimeout(() => box.classList.remove('active'), 800);
    });
}

// Modal functionality
const toggleButton = document.getElementById('toggle-button');
const modal = document.getElementById('modal');
const closeButton = document.getElementById('close-button');
const speakButton = document.getElementById('speak-button');
const textInput = document.getElementById('text-input');
const voiceSelect = document.getElementById('voice-select');

let message = '';
let selectedVoice = null;

toggleButton.addEventListener('click', () => {
    modal.style.display = 'flex';
    populateVoiceOptions();
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

speakButton.addEventListener('click', () => {
    message = textInput.value;
    speakText();
});

function setTextMessage(text) {
    message = text;
}

function speakText() {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(message);
        if (selectedVoice) {
            utterance.voice = selectedVoice;
        }
        window.speechSynthesis.speak(utterance);
    } else {
        console.log('SpeechSynthesis is not supported in this browser.');
    }
}

function populateVoiceOptions() {
    const voices = window.speechSynthesis.getVoices();
    voiceSelect.innerHTML = '';
    voices.forEach((voice) => {
        const option = document.createElement('option');
        option.value = voice.name;
        option.textContent = `${voice.name} (${voice.lang})`;
        voiceSelect.appendChild(option);
    });

    voiceSelect.addEventListener('change', () => {
        selectedVoice = voices.find(voice => voice.name === voiceSelect.value);
    });
}

// Populate voice options on page load
populateVoiceOptions();
