import React from "react";
import { CldImage } from "next-cloudinary";

interface Props {}

const CloudImage = (props: any) => {
  return <CldImage {...props} />;
};

export default CloudImage;
