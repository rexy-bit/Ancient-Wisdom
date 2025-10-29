import { memo } from "react"
import { useAiContext } from "../../Context/AiContext";
import { askAi } from "./ai";

const AiInputs = () => {

    const {setResponse, setLoading} = useAiContext();

    const getPrompt = async(e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const userPrompt = formData.get("prompt");

        if(!userPrompt || !userPrompt.trim()) return;

        setLoading(true);

        try{
            const aiResponse = await askAi(userPrompt);
            setResponse(aiResponse);
        }catch(err){
            console.log("Error : ", err);
        } finally{
            setLoading(false);
            e.target.reset();
        }
    }

    return(
        <form onSubmit={getPrompt} className="flex flex-row justify-center items-center gap-5 mt-8 relative">
            <textarea 
            name="prompt"
            placeholder="Ask HermesAI a Question"
            className="w-[400px] max-[450px]:w-[300px] bg-gray-100 border border-gray-400 rounded-3xl p-3 pr-12 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows={1}
            ></textarea>
            <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white cursor-pointer p-2 px-4 rounded-full hover:bg-blue-600">&#8593;</button>
        </form>
    )
}

export default memo(AiInputs);