import { React, useState } from "react";

export function RagistrationForm() {
    const [userId, setUserId] = useState({ value: "", isValid: false });
    const [password, setPassword] = useState({ value: "", isValid: false });
    const [name, setName] = useState({ value: "", isValid: false });
    const [address, setAddress] = useState({ value: "", isValid: false });
    const [country, setCountry] = useState("");
    const [zipCode, setZipCode] = useState({ value: "", isValid: false });
    const [email, setEmail] = useState({ value: "", isValid: false });
    const [sex, setSex] = useState("");
    const [language, setLanguage] = useState("English");
    const [about, setAbout] = useState({ value: "", isValid: false });


    function handleUserIdChange(event) {
        const value = event.target.value;
        const isValid = isValidUserId(value);
        event.target.className = isValid ? 'valid' : 'invalid';
        if (isValid) {
            setUserId({ value, isValid });
        }
    }

    function isValidUserId(UserId) {
        const len = UserId.length;
        return len == 6;
    }

    function handlePasswordChange(event) {
        const value = event.target.value;
        const isValid = isValidPassword(value);
        event.target.className = isValid ? 'valid' : 'invalid';
        if (isValid) {
            setPassword({ value, isValid });
        }
    }

    function isValidPassword(Password) {
        const len = Password.length;
        return len > 7 && len < 12;
    }

    function handleNameChange(event) {
        const value = event.target.value;
        const isValid = isValidName(value);
        event.target.className = isValid ? 'valid' : 'invalid';
        if (isValid) {
            setName({ value, isValid });
        }
    }

    function isValidName(Name) {
        const regex = /^[a-zA-Z]+$/;
        return regex.test(Name);
    }

    function handleAddressChange(event) {
        const value = event.target.value;
        const isValid = isValidAddress(value);
        event.target.className = isValid ? 'valid' : 'invalid';
        if (isValid) {
            setAddress({ value, isValid });
        }
    }

    function isValidAddress(Address) {
        const regex = /^[a-zA-Z0-9\s]+$/;
        return regex.test(Address);
    }

    function handleCountryChange(event) {
        const value = event.target.value;
        event.target.className = 'valid';
        setCountry(value);
    }

    function handleZipCodeChange(event) {
        const value = event.target.value;
        const isValid = isValidZipCode(value);
        event.target.className = isValid ? 'valid' : 'invalid';
        if (isValid) {
            setZipCode({ value, isValid });
        }
    }

    function isValidZipCode(ZipCode) {
        const regex = /^[a-zA-Z0-9]+$/;
        return regex.test(ZipCode);
    }

    function handleEmailChange(event) {
        const value = event.target.value;
        const isValid = isValidEmail(value);
        event.target.className = isValid ? 'valid' : 'invalid';
        if (isValid) {
            setEmail({ value, isValid });
        }
    }

    function isValidEmail(Email) {
        const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        return regex.test(Email);
    }

    function handleSexChange(event) {
        const value = event.target.value;
        setSex(value);
    }

    function handleLanguageChange(event) {
        const value = event.target.value;
        setLanguage(value);
    }

    function handleAboutChange(event) {
        const value = event.target.value;
        setAbout(value);
    }

    function isValidForm() {
        return (
            userId.isValid && password.isValid &&
            name.isValid && address.isValid &&
            zipCode.isValid && email.isValid
        ) && (
                country != "" && sex != "" &&
                language != "" && about != ""
            );
    }

    // function 

    function handleSubmit(event) {
        event.preventDefault();
        if (isValidForm()) {
            alert("Form is valid");
        }
        else {
            alert("Form is invalid");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Registration Form</legend>
                <div className="form-block">
                    <label htmlFor="user-id">User id [6 characters]:</label>
                    <input type="text" id="user-id" onChange={handleUserIdChange} />
                </div>
                <div className="form-block">
                    <label htmlFor="pwd">Password [7 to 12 characters]:</label>
                    <input type="password" id="pwd" onChange={handlePasswordChange} />
                </div>
                <div className="form-block">
                    <label htmlFor="name">Name [Alphabets characters]:</label>
                    <input type="text" id="name" onChange={handleNameChange} />
                </div>
                <div className="form-block">
                    <label htmlFor="address">Address [alphanumeric characters]:</label>
                    <input type="text" id="address" onChange={handleAddressChange} />
                </div>
                <div className="form-block">
                    <label htmlFor="country">Country [Must select a country]:</label>
                    <select id="country" onChange={handleCountryChange}>
                        <option value="" selected disabled hidden>Choose here</option>
                        <option value="Australia">Australia</option>
                        <option value="Canada">Canada</option>
                        <option value="Germany">Germany</option>
                        <option value="Japan">Japan</option>
                        <option value="South Africa">South Africa</option>
                        <option value="Norway">Norway</option>
                        <option value="Mexico">Mexico</option>
                        <option value="New Zealand">New Zealand</option>
                    </select>
                </div>
                <div className="form-block">
                    <label htmlFor="zip-code">ZIP Code [alphanumeric characters]:</label>
                    <input type="text" id="zip-code" onChange={handleZipCodeChange} />
                </div>
                <div className="form-block">
                    <label htmlFor="email">Email [Valid email]:</label>
                    <input type="email" id="email" onChange={handleEmailChange} />
                </div>
                <div className="form-block">
                    <label>Sex [Select Male or Female]:</label>
                    <div>
                        <input type="radio" name="Sex" id="male" text='Male' onChange={handleSexChange} />
                        <label htmlFor="male">Male</label>
                        <input type="radio" name="Sex" id="female" text='Female' onChange={handleSexChange} />
                        <label htmlFor="female">Female</label>
                    </div>
                </div>
                <div className="form-block">
                    <label htmlFor="lang">Language [Optional]:</label>
                    <select id="lang" onChange={handleLanguageChange}>
                        <option value="English">English</option>
                        <option value="Non English">Non English</option>
                    </select>
                </div>
                <div className="form-block">
                    <label htmlFor="about">About [Optional]:</label>
                    <textarea id="about" onChange={handleAboutChange}></textarea>
                </div>
                <button type="submit">Submit</button>
            </fieldset>
        </form>
    );
}