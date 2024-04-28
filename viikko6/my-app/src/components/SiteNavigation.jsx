import { Link } from 'react-router-dom';
import Button from './UI/Button';
import { useUserContext } from '../contexts/UserContext';

const SiteNavigation = () => {
  const { user, handleLogout } = useUserContext()
  console.log("user", user)
  return (
    <nav>
      <ul>
      <li>
      <Link to="/">Etusivu 🏠</Link>

      </li>
      
        {user !== undefined && <>
        <li>
        <Link to="/profile">Profiili 😃</Link>

      </li>
      <li>
      <Link to="/upload">Upload</Link>

      </li>
      <li>
      <Button text="Logout" handleClick={handleLogout} />

      </li>

      </>}
      {!user && <Link to="/login">Login</Link>}
      </ul>
    </nav>
  );
}

export default SiteNavigation;