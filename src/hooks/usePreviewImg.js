import { useState } from "react";
import useShowToast from "./useShowToast";

const usePreviewImg = () => {
  const [imgUrl, setImgUrl] = useState(null);
  const showToast = useShowToast();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reaader = new FileReader();

      reaader.onloadend = () => {
        setImgUrl(reaader.result);
      };
      reaader.readAsDataURL(file);
    } else {
      showToast("Invalid file type", " Please select an image file", "error");
      setImgUrl(null);
    }
  };
  console.log(imgUrl)
  return {
    handleImageChange,
    imgUrl,
  };
};

export default usePreviewImg;
