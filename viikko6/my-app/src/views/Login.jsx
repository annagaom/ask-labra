import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";


const Login = () => {

  const [toggleForm, setToggleForm] = useState(true);

  const toggle = () => {
    setToggleForm(!toggleForm);
  };

    return (
      <>
      {toggleForm ? <LoginForm />:<RegisterForm />}
      <Button text = {toggleForm ? 'Not registeri yet' : 'login'} handleClick={toggle}/>
      </>
    );
  };
  
  export default Login;