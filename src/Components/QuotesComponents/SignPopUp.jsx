import { useNavigate } from "react-router-dom";



export const SignUpPop = ({setShowPop}) => {

    const navigate = useNavigate();

        return(
        <div onClick={()=> setShowPop(false)} className="fixed inset-0 bg-black/40  flex justify-center items-center z-50">
            <div className="w-[800px] flex flex-col absolute bg-[#A8A8A8] items-center h-[400px] rounded-3xl gap-10 max-[900px]:w-[300px] ">
                <h1 className="mt-20 font-bold text-[1.2em] w-[250px] text-center">Sign in to add favorites review them and more !</h1>

                <div className="flex flex-row gap-5">
                    <button onClick={()=>{
                        navigate("/user");
                        setShowPop(false);
                    }} className="bg-yellow-100 px-5 py-2 rounded-xl cursor-pointer transition-opacity duration-200 hover:opacity-80 active:opacity-60">Sign in</button>
                    <button className="bg-red-300 px-5 py-2 rounded-xl cursor-pointer transition-opacity duration-200 hover:opacity-80 active:opacity-60">Cancel</button>
                </div>

                            <p onClick={()=>setShowReset(false)} className="absolute top-1 right-4 text-[1.6em] cursor-pointer transition-opacity hover:opacity-70 active:opacity-50">&times;</p>
            </div>
        </div>
    )
}