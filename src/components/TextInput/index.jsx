import "./styles.css"

export const TextInput = ({onChange, value, type}) => {
    return (
        <input 
            className="text-input"
            onChange={onChange}
            value={value}
            type={type}
            placeholder="type your search"
        />
    )
}