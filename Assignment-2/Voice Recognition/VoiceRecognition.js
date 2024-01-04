import React, { useState } from 'react';

const VoiceRecognition = () => {
  const [transcript, setTranscript] = useState('');
  const recognition = new window.webkitSpeechRecognition(); // Create a SpeechRecognition object

  recognition.onresult = (event) => {
    const currentTranscript = event.results[event.results.length - 1][0].transcript;
    setTranscript(currentTranscript);
    console.log('Transcript:', currentTranscript); // Log the transcript for demonstration

    handleCommand(currentTranscript);
  };
  
  const handleCommand = (transcript) => {
    const commands = transcript.toLowerCase();
    
    if (commands.includes('play')) 
    {
    console.log('Play command recognized!');
    // Simulate playing something - you could trigger a video or audio player
    } else if (commands.includes('stop')) 
    {
    console.log('Stop command recognized!');
    // Simulate stopping whatever is playing
    } else if (commands.includes('search')) 
    {
    const searchTerm = commands.split('search')[1]?.trim();
    if (searchTerm) {
      console.log(`Search command recognized! Search term: ${searchTerm}`);
      // Perform a search operation based on the recognized search term
    }
    } else {
    console.log('Unrecognized command:', transcript);
    // Handle other unrecognized commands or perform a default action
    }
};

  const startRecognition = () => {
    recognition.start(); // Start listening for speech input
    console.log('Listening...'); // Log a message when listening starts
  };

  const stopRecognition = () => {
    recognition.stop(); // Stop listening
    console.log('Stopped listening.'); // Log a message when listening stops
  };

  return (
    <div>
      <button onClick={startRecognition}>Start Listening</button>
      <button onClick={stopRecognition}>Stop Listening</button>
      <p>{transcript}</p>
    </div>
  );
};

export default VoiceRecognition;
