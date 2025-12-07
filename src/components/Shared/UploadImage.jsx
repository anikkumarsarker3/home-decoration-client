import axios from 'axios';
import React from 'react';

const UploadImage = async (imageFile) => {
    const formData = new FormData()
    formData.append('image', imageFile);
    const res = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_img_key}`, formData);
    // console.log(res.data.data.url)
    const photoURL = res.data.data.url;
    return photoURL;
};

export default UploadImage;