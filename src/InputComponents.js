export default function InputComponents({ title, value, handleClickInput }) {
    return (
        <>
            <label>{title}</label>
            <input type="text"
                value={value}
                onChange={(e) => {
                    handleClickInput(e.target.value);
                }}
            ></input>
        </>
    )
}