import {useSpeech} from "react-text-to-speech";
import {RefObject} from "react";


export type TTsContent = {
    content?: string
}

export const Tts = (ttsProps: {
    className: string,
    button: string,
    buttonRef?: RefObject<HTMLButtonElement>,
    ttsState: string
}) => {
    const {
        // Text, // Component that returns the modified text property
        // speechStatus, // String that stores current speech status
        // isInQueue, // Boolean that stores whether a speech utterance is either being spoken or present in queue
        start, // Function to start the speech or put it in queue
        // pause, // Function to pause the speech
        // stop, // Function to stop the speech or remove it from queue
    } = useSpeech({
        voiceURI: 'Tingting',
        volume: 100, lang: 'zh-CN', text: ttsProps?.ttsState ?? ""
    });
    // console.log('ttsProps?', ttsProps)
    return (
        <button
            className={[ttsProps.className].join('')}
            ref={ttsProps.buttonRef}
            onClick={start}>{ttsProps.button}
        </button>
    )
}