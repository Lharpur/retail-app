import React from 'react'

const Register = () => {
    return (
        <div>
            <form action="../server/ws.php" method="post">
                <input type="text" />
                <input type="text" />
                <input type="email" />
                <input type="password" />
                <input type="password" />
            </form>
        </div>
    )
}

export default Register
