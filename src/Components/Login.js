import React, { useState } from 'react';
import Loginn from './Loginpage.js';
import Register from './RegisterPage.js';

function AuthPage() {
    const [isRegister, setIsRegister] = useState(false);

    return (
        <div>
            {isRegister ? (
                <Register setIsRegister={setIsRegister} />
            ) : (
                <Loginn setIsRegister={setIsRegister} />
            )}
        </div>
    );
}

export default AuthPage;
