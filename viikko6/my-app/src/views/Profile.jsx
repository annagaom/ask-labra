import { useEffect, useState } from "react";
import {Link} from "react-router-dom";


export const Profile = () => {
  const {user, setUser} = useState(null);
  const {getUserByToken} = useUser();


  useEffect (() => {
    const getUser = async ( )=> {
      const token = localStorage.getItem('token');
      const userDate = await getUserByToken(token);
      setUser(userData.user);
    };
    useEffect(() => {
      getUser();
   


  }, []);





  return <div>
      <h2 className="text-2xl font-bold"> Tämä on minun profiilisivu</h2>

      <p>
      <Link to ="/">Etusivulle</Link>
      </p>
      <div>
        {user && (
          <>
          <p>Käyttäjätunnus: {user.username}</p>
          <p>email: {user.email}</p>
          <p>Luotu: {}new Date()</p>
          
          </>
        )
      
      <p>Käyttäjätunnus: {user.username}</p>}
      </div>
      
    </div>
  
};

export default Profile;