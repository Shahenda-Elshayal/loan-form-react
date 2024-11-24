import "./FormStyle.css"

export default function Result({ isVisible, title = "" }) {
    if (isVisible) {
        return (
            <div className="outterRes">
                <div className="titleStyle" style={{ color: title === "" ? "green" : "red" }}>
                    {title === "" ? "The form has been submitted successfully" : title}
                </div>
            </div>
        )
    }
}