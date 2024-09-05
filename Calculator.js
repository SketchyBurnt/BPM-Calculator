// Function to calculate milliseconds per beat
function calculateMsPerBeat(bpm) {
    const msPerMinute = 60000; // Number of milliseconds in a minute
    return msPerMinute / bpm;
}

// Function to get BPM from user input
function getBpm() {
    const bpm = prompt("Enter the BPM:"); // Prompt user for BPM input
    return parseFloat(bpm); // Convert input to a floating-point number
}

// Main function
function main() {
    alert("Welcome to the BPM Calculator!"); // Display welcome message

    const bpm = getBpm(); // Get BPM from user input
    const msPerBeat = calculateMsPerBeat(bpm); // Calculate milliseconds per beat
    const msPerHalfBeat = msPerBeat / 2;
    const msPerQuarterBeat = msPerBeat / 4;
    const msPerEighthBeat = msPerBeat / 8;
    const msPerSixteenthBeat = msPerBeat / 16;

    // Display the results
    alert(`${msPerBeat.toFixed(2)} milliseconds per beat at ${bpm} BPM.\n` +
          `${msPerHalfBeat.toFixed(2)} milliseconds per half beat at ${bpm} BPM.\n` +
          `${msPerQuarterBeat.toFixed(2)} milliseconds per quarter beat at ${bpm} BPM.\n` +
          `${msPerEighthBeat.toFixed(2)} milliseconds per eighth beat at ${bpm} BPM.\n` +
          `${msPerSixteenthBeat.toFixed(2)} milliseconds per sixteenth beat at ${bpm} BPM.`);
}

// Execute the main function
main();
