

const ApiKey = import.meta.env.VITE_API_KEY;



export const askAi = async(userPrompt) => {



 
     const requestBody = {
        contents: [
            {
                parts: [
                    {
                        text: `You are HermesAI, an AI assistant designed to help users explore history, literature, and movies through the lens of Ancient Wisdom. Your role is to provide accurate explanations, summaries, and insights about historical figures, events, books, and films. You can also provide relevant quotes, lessons, and connections to the theme of wisdom. Users may ask you factual questions, request recommendations, or seek context and interpretation for historical content. Always give clear, concise, and historically accurate answers, and indicate when information might be speculative or influenced by dramatization in media.
                        
                        Question : ${userPrompt}`,


         
                    }
                ]
            }
        ]
    };

const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${ApiKey}`;

   

   try{
    const resp = await fetch(url, {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(requestBody)
    });

    const data = await resp.json();

    console.log("Gemini Response : ", data);
    const AiAnswer = data.candidates[0].content.parts[0].text;

    if(!AiAnswer) throw new Error("No response, try again");

    return AiAnswer;
   }catch(err){
      console.error('Error : ', err);
   }
}