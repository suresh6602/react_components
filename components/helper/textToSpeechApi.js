import axios from 'axios';

export const ai4bharathTranslate = async (CONTENT, language, Engranslation) => {
    try {
        const apiUrl =
            '';
        const req = {
            config: {
                serviceId: import.meta.env.VITE_TRASLATOR_SERVICE_ID,
                language: {
                    sourceLanguage: language === 'en' ? 'kn' : 'en',
                    targetLanguage: language,
                },
            },
            input: [
                {
                    source: CONTENT,
                },
            ],
        };
        const response = await axios.post(apiUrl, req, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: import.meta.env.VITE_AI4BHARATH_API_KEY,
            },
        });
        const convertedText = response?.data?.output[0]?.target
            ? response?.data?.output[0]?.target
            : '';
        return Engranslation === true
            ? convertedText
            : language == 'en'
                ? CONTENT
                : convertedText;
    } catch (error) {
        return error;
    }
};

export const aiForBharathApiTTS = async (propText, voice, language) => {
    const serviceIdForAi4Bharath =
        language === 'en'
            ? import.meta.env.VITE_TEXT_TO_SPEECH_SERVICE_ID_FOR_ENGLISH
            : language === 'ta'
                ? import.meta.env.VITE_TEXT_TO_SPEECH_SERVICE_ID_FOR_TAMIL
                : language === 'kn'
                    ? import.meta.env.VITE_TEXT_TO_SPEECH_SERVICE_ID_FOR_KANNADA
                    : language === 'hi'
                        ? import.meta.env.VITE_TEXT_TO_SPEECH_SERVICE_ID_FOR_HINDI
                        : language === 'ml'
                            ? import.meta.env.VITE_TEXT_TO_SPEECH_SERVICE_ID_FOR_MALAYALAM
                            : language === 'te'
                                ? import.meta.env.VITE_TEXT_TO_SPEECH_SERVICE_ID_FOR_TELUGU
                                : '';

    try {
        const apiUrl = '';
        const req = {
            config: {
                language: {
                    sourceLanguage: language,
                },

                serviceId: serviceIdForAi4Bharath,
                gender: voice === 'machineFeMale' ? 'female' : 'male',
                samplingRate: 16000,
            },
            input: [
                {
                    source: propText,
                },
            ],
        };
        const response = await axios.post(apiUrl, req, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: import.meta.env.VITE_AI4BHARATH_API_KEY,
            },
        });

        const result = await response?.data?.audio[0]?.audioContent;
        var audio = 'data:audio/wav;base64,' + result;
        return audio;
    } catch (error) {
        return error;
    }
};
