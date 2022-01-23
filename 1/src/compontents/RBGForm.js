import React from "react";

const RBGForm = ({onChangeHex, label="", labelStyle}) => {
    let hex_value;

    const handleHexChange = evt => {
        const {name, value} = evt.target
        if (value.replace(/ +/g, '').length == 7 && value[0]=="#"){
            onChangeHex(value)
        }
    }

    return(
        <form>
            <input name="hex" id="hex" value={hex_value} onChange={handleHexChange}/>
            <label htmlFor="hex" style={labelStyle}>{label}</label>
        </form>
    )
}

export default RBGForm;