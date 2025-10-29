import { signOut } from "firebase/auth";
import { auth, db } from "../../Config/fireBase";
import { use, useState } from "react";
import { LogOutPop } from "./LogOutPop";
import { doc, updateDoc } from "firebase/firestore";
export const UserInfo = ({ userData }) => {

    const [showPop, setShowPop] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [newBio, setNewBio] = useState(userData.bio || "");
    
  if (!userData) return(<div className="mt-10">
  <p>No user data found.</p>
  <button onClick={()=>signOut(auth)}>Log out</button>
  </div>)

  const handleModifButton = async() => {
      if(newBio.length > 500) return;

      try{
        const userRef = doc(db,"users", userData.uid);
        await updateDoc(userRef, {bio : newBio});

        setShowInput(false);
      }catch(err){
        console.error("Error in updating bio : ", err);
      }
  }


  return (
    <div className="flex flex-col justify-center items-center gap-10">
    <div className="flex flex-col justify-center items-center mt-10 gap-5 w-[360px] border border-gray-400 rounded-xl p-5 max-[400px]:w-[320px]">
      <div className="text-[3em]"><i className="fa-solid fa-user"></i></div>
      <div className="flex flex-col justify-center gap-2">
        <p>Name : {userData.nom}</p>
        <p>Email : {userData.email}</p>
        <p>Account creation date : {userData.dateCreation}</p>
        <p>Favorites : {userData.favorites?.length || 0}</p>
        <p>Bio : {userData.bio === "" ? "(No bio)" : userData.bio}</p>
        <button className="bg-amber-800 text-white w-[110px] h-[30px] rounded-lg font-bold text-[0.9em] cursor-pointer transition-opacity duration-200 hover:opacity-70 active:opacity-60 mt-2" onClick={()=> setShowInput(true)}>Modify Bio</button>

        {showInput && <div className="flex flex-row justify-center items-center gap-2">
           <input 
            type="text" 
            maxLength="500" 
            placeholder="Max 500 Characters" 
            className="w-[170px] border border-gray-400 p-2 rounded-lg"
            value={newBio}
            onChange={(e)=> setNewBio(e.target.value)}
            />
            
           <button className="h-[30px] px-2 bg-amber-800 rounded-lg text-white cursor-pointer transition-opacity duration-200 hover:opacity-80 active:opacity-60" onClick={handleModifButton}>Modify</button>
          </div>}
      </div>
    </div>

    <button className="w-[100px] h-[35px] text-bold bg-[#A8A8A8] rounded-2xl cursor-pointer transition-opacity duration-200 hover:opacity-80 active:opacity-60 mb-20" onClick={()=> setShowPop(true)}>Log out</button>


    {showPop && 
      <LogOutPop
      showPop={showPop}
      setShowPop={setShowPop}
      />
    }
    </div>
  );
};
