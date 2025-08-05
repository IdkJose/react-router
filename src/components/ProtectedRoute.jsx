import { Children, use, useEffect, useState } from "react";
import { Navigate } from "react-router";
import { auth } from "../configs/firebase";
import { onAuthStateChanged } from "firebase/auth";

function ProtectedRoute({children}){
    const [user,setUser] = useState(undefined)

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, setUser);
        return unsub;
    }, []);

    if(user===undefined) return <p>Cargando...</p>
    return user ? children : <Navigate to="/login"/>
}

export default ProtectedRoute;