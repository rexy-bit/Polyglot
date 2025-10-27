import { useState } from "react";



const User = ({name, age, isMarried} : {name : string, age : number, isMarried : boolean}) => {

    const [isShownInfo, setIsShowInfo] = useState<boolean>(false);

    const [bio, setBio] = useState<string | null>("")

        const toggleInfo = () => {
            setIsShowInfo(prev => !prev);
        }


        const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {

            setBio(event.target.value);
        }

    return(
        <div>
            {isShownInfo && <>
           <p>name : {name}</p>
           <p>age : {age}           </p>
           <p>{isMarried ? "married" : "not married"}</p>
           </>
            }


            <button onClick={toggleInfo}>Toggle Info</button>

            <p>{name} bio : {bio === null ? "No bio available" : bio}</p>

            <input type="text" onChange={handleChange}/>
        </div>

        
    )
}

export default User;