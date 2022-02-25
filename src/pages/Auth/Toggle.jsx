const Toggle = ({handleToggle, toggleBtnText, toggleDescriptionText}) => {
    return (
        <div className="flex w-full justify-center items-center text-xs">
            <p className="mr-2 font-semibold">{toggleDescriptionText}</p>
            <p className="font-bold underline text-blue-600 cursor" onClick={handleToggle}>{toggleBtnText}</p>
        </div>
    );
}
export default Toggle;