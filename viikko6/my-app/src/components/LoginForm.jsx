import {Login} from "../views/login";

// LoginForm.jsx
const LoginForm = () => {

    const {login} = useAuthentication();
    const navigate = useNavigate();

    const {handSubmit, handleChange, input} = useForm();

    const initValues= {
        username: '',
        password: '',
      };
    
      const dolLogin = async (credentials) => {
        console.log(inputs);
        try {
          const userData = await login(inputs);
            console.log('doLogin', userData);
            localStorage.setItem('token', userData.token);
            navigate('/');
        } catch (e) {
            alert(e.message);
            }
       

    
        console.log(userData);
      };

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={ (handleSubmit) => {} }>
                 <div>
                     <label htmlFor="loginuser">Username</label>
                    <input
                        name="username"
                        type="text"
                        id="loginuser"
                        onChange={ () => {} }
                        autoComplete="username"
                    />
                </div>
                <div>
                    <label htmlFor="loginpassword">Password</label>
                     <input
                        name="password"
                        type="password"
                        id="loginpassword"
                        onChange={ (handleChange, input) => {} }
                        autoComplete="current-password"
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </>
    );
};

export default LoginForm;