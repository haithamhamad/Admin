import "./styles.css";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

function Home() {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const database = [
        {
            username: "user1",
            password: "pass1"
        },
        {
            username: "user2",
            password: "pass2"
        }
    ];

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );
    const handleSubmit = (event) => {
        // Prevent page reload
        event.preventDefault();
        let { uname, pass } = document.forms[0];

        // Find user login info
        const userData = database.find((user) => user.username === uname.value);

        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }
        } else {
            // Username not found
            setErrorMessages({ name: "uname", message: errors.uname });
        }



    };
    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };
    const form=(
        <div className="login-form">
            <form className={'form'} onSubmit={handleSubmit}>
                <div className="input-container">
                    <label style={{color:"white"}}>Username </label>
                    <input type="text" name="uname" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label style={{color:"white"}}>Password </label>
                    <input type="password" name="pass" required />
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>

    )
    const navigate = useNavigate();
    function handleClick(event) {
        navigate('/NewUsers');
    }

    return (

        <div className="app">
            <div className="login-form">
                {isSubmitted ? handleClick() : form}
            </div>
        </div>
    );
}

export default Home;
