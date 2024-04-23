
import {useUser} from "../contexts/UserContext";
import useForm from "../hooks/formHooks";
import Button from "./UI/Button";


const RegisterForm = () => {
}import {Registeri} from "../views/Registeri";

// RegisteriForm.jsx
const re = () => {

    const {Registeri} = useAuthentication();

    const {handSubmit, handleChange, input} = useForm();

    const initValues= {
        username: '',
        password: '',
      };
    
      const dolRegisteri = async (credentials) => {
        console.log(inputs);
        try {
          const userData = await Registeri(inputs);
            console.log('doRegisteri', userData);
        
        } catch (e) {
            alert(e.message);
            }
       

    
        console.log(userData);
      };

    return (
        <>
            <h1>Registeri</h1>
            <form onSubmit={ (handleSubmit) => {} }>
                 <div>
                     <label htmlFor="Registeriuser">Username</label>
                    <input
                        name="username"
                        type="text"
                        id="Registeriuser"
                        onChange={ () => {} }
                    
                    />
                </div>
                <div>
                    <label htmlFor="Registeripassword">Password</label>
                     <input
                        name="password"
                        type="password"
                        id="Registeripassword"
                        onChange={ (handleChange, input) => {} }
                      
                    />
                </div>
                <div>
                     <label htmlFor="Registeriemail">Useremail</label>
                    <input
                        name="useremail"
                        type="text"
                        id="Registeriemail"
                        onChange={ () => {} }
                    
                    />
                </div>
                <button type="submit">Registeri</button>
            </form>
        </>
    );
};

export default RegisteriForm;