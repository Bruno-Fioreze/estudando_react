import "./styles.css";

export const Button = ( { onClick, children, disabled } ) => {
    return (
        <button disabled={disabled} className="button" onClick={ onClick }>
            {children}
        </button>
    )
}