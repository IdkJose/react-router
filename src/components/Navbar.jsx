import { Link } from "react-router";
import { auth } from "../configs/firebase";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

function Navbar() {
  const [user, setUser] = useState(null);
  useEffect (() => {
    const unsub = onAuthStateChanged(auth, setUser);
    return unsub;
    }, []);
  return (
    <nav>
      <Link to ="/">Inicio</Link>
      {user &&<Link to="/login">Login</Link>}
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
}

export default Navbar;
