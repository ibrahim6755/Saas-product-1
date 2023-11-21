"use client";

import React from "react";
import { CldUploadButton } from "next-cloudinary";
import { Upload } from "lucide-react";

interface Props {
  onUploadSuccess: (result: any) => void; // Modify the type of 'result' as needed
}

const UploadBtn: React.FC<Props> = ({ onUploadSuccess }) => {
  return (
    <div>
      <CldUploadButton
        className="flex justify-center items-center text-center m-8 mb-2 rounded-full p-4 bg-blue-600 font-bold text-white text-xl"
        uploadPreset="saasirnyxo97"
        onUpload={onUploadSuccess}
      />
    </div>
  );
};

export default UploadBtn;
