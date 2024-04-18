import { Link, Outlet } from "react-router-dom"

const Layout = () => (
  // <div>
  //   <header>
  //     <nav>
  //       <Link to="/">Home 🏠</Link>
  //       <Link to="/profile">Profile 😃</Link>
  //       <Link to="/upload">Upload</Link>
  //     </nav>
  //   </header>
  //   <main>
  //     <Outlet />
  //   </main>
  //   <footer className="m-12 text-xl">
  //     Copyright 2024
  //   </footer>
  // </div>
  <div>
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/upload">Upload</Link>
      </li>
    </ul>
  </nav>
  <main>
    <Outlet />
  </main>
</div>
)

export default Layout