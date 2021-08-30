import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <button onClick={() => logout({ returnTo: window.location.origin })}>
            Log Out
        </button>
    );
};


const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    if (isAuthenticated && user) {
        return (
            (
                <div>
                    <img src={user.picture} alt={user.name} />
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            )
        );
    } else {
        return (<div />)
    }
};

export {
    LoginButton,
    LogoutButton,
    Profile
};