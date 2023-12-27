import React from "react";
import axios from "axios";
import { useState } from "react";
const UploadFile = () => {
    const preset_key = "zbjyj2cg";
    const cloud_name = "dpsb2fe5f";
    const [image, setImage] = useState("");

    const handleFile = (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", preset_key);
        axios
           .post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    return (
        <div className="uploadFile">
            <input type="file" className="file" onChange={handleFile} />
        </div>
    );
};

export default UploadFile;
