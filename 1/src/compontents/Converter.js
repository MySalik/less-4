import React, { useState } from "react";
import RBGForm from "./RBGForm"
import hexToRGB from "./utils/hexToRgb"


const Converter = () => {
    const [hex, setHex] = useState("rgb(255, 255, 255)");
    const [label, setLabel] = useState("#ffffff")

    const blockStyle = { backgroundColor: hex };

    const onChangeHex = data => {
        const rgb = hexToRGB(data)
        if (rgb){
            setLabel(rgb)
            setHex(rgb)
        }
        else{
            setLabel("Ошибка!")
            setHex("rgb(255, 0, 0)")
        }
    }

    return(
        <div style={blockStyle} className="form-hex">
            <RBGForm 
                onChangeHex={onChangeHex}
                label={label}
                labelStyle={blockStyle}
            />
        </div>
    )

}

export default Converter;