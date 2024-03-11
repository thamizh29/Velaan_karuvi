
export default function InputElement({ type, placeholder, name}){
    return(
        <input
        type={type}
        placeholder={placeholder}
        name={name}
        autocomplete="off"
        required
        />
    )
}