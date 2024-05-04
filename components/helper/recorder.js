export const startRecording = async (
    setAudioSettings,
    mediaRecorderRef,
    CONTROLS
) => {
    try {
        // Get user media stream
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
        });
        // Create AudioContext
        const audioContext = new window.AudioContext();
        // Create MediaStreamSource
        const mediaStreamSource = audioContext.createMediaStreamSource(stream);
        // Create MediaRecorder
        const mediaRecorder = new MediaRecorder(mediaStreamSource.mediaStream);
        // Set the mediaRecorderRef.current
        mediaRecorderRef.current = mediaRecorder;
        const chunks = [];
        // Handle data available event
        mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
                chunks.push(event.data);
            }
        };
        // Start recording
        mediaRecorder.start();
        // Handle start event
        mediaRecorder.onstart = () => {
            // setAudioSettings({  playbackAudio: null });
        };
        // Handle stop event
        mediaRecorder.onstop = async () => {
            const blob = new Blob(chunks, { type: 'audio/mp3' });
            setAudioSettings({
                ...CONTROLS,
                listening: false,
                playBack: false,
                isRecording: false,
                playbackAudio: blob,
                multiLanguage: { src: '', play: false, playing: 0 },
            });
        };
    } catch (error) {
        return error;
    }
};

export const stopRecording = (mediaRecorderRef) => {
    if (
        mediaRecorderRef.current &&
        mediaRecorderRef.current.state === 'recording'
    ) {
        mediaRecorderRef.current.stop();
    }
};

export const blobToBase64 = async (blobProp) => {
    try {
        const response = await fetch(blobProp);
        const arrayBuffer = await response.arrayBuffer();
        const base64String = btoa(
            new Uint8Array(arrayBuffer).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                ''
            )
        );
        return base64String;
    } catch (error) {
        return error;
    }
};
