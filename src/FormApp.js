import "./FormStyle.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import Result from "./Result";
import { useState } from "react";

export default function FormApp() {

    const [visibleButton, setVisibleButton] = useState(false);

    const [titleValue, setTitleValue] = useState("");

    const [inputValue, setInputValue] = useState({ name: "", phoneNum: "", age: "", isEmployee: false });

    function buttonClicked(e) {
        e.preventDefault();
        if (inputValue.phoneNum.length < 10 || inputValue.phoneNum.length > 20) {
            setTitleValue("The phone number is not correct")
        }
        else if (inputValue.age < 18 || inputValue.age > 100) {
            setTitleValue("The age is not allowed")
        }

        else {
            setTitleValue("")
        }
        setVisibleButton(true);
    }

    function handleOutDiv() {
        if (visibleButton)
            setVisibleButton(false)
    }

    const finalValues = inputValue.name === "" || inputValue.phoneNum === "" || inputValue.age === "";

    return (
        <div className="form-outdiv" style={{ position: "relative" }} onClick={handleOutDiv}>
            <form className="form-indiv">
                <h1>Requesting A Loan</h1>

                <label>User name</label>
                <input type="text" value={inputValue.name} onChange={(e) => {
                    setInputValue({ ...inputValue, name: e.target.value });
                }}></input>

                <label>Phone number</label>
                <input type="text" value={inputValue.phoneNum} onChange={(e) => {
                    setInputValue({ ...inputValue, phoneNum: e.target.value });
                }}></input>

                <label>Age</label>
                <input type="text" value={inputValue.age} onChange={(e) => {
                    setInputValue({ ...inputValue, age: e.target.value });
                }}></input>

                <label style={{ textAlign: "center", padding: "10px 0 0", width: "fit-content", height: "30px", margin: "0 auto 30px" }}>Are you an employee?
                    <input type="checkbox" style={{ margin: "0" }} checked={inputValue.isEmployee} onChange={(e) => {
                        setInputValue({ ...inputValue, isEmployee: e.target.checked })
                    }}></input>
                    <span></span>
                </label>

                <label >Salary</label>
                <select>
                    <option>Under 500$</option>
                    <option>Between 500$ and 2000$</option>
                    <option>Above 2000$</option>
                </select>

                <input type="submit"
                    onClick={buttonClicked}
                    disabled={finalValues}
                    className={finalValues ? "disabledButton" : ""}
                >
                </input>
            </form>
            <Result isVisible={visibleButton} title={titleValue} />
        </div >
    )
}