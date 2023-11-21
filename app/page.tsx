"use client";

import { ArrowDownToLine, Upload } from "lucide-react";
import Image from "next/image";
import UploadBtn from "./CldBtn";
import CloudImage from "./CloudImage";
import { useState } from "react";
import { Url } from "url";

export default function Home({ pictureId }: any) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [transformation, setTransformation] = useState<
    undefined | "removeBackground" | "pixelate" | "grayscale"
  >();
  const [imageId, setImageId] = useState<string | undefined>();
  const handleUploadSuccess = (result: any) => {
    // 'result.info.public_id' contains the Cloudinary public ID
    // console.log("Upload successful. Picture ID:", result.info.public_id);
    setImageId(result.info.public_id);
    // You can store the picture ID in state or use it as needed
  };
  const handleRemoveBackground = async () => {
    setIsLoading(true);

    // Simulate a delay to show loading (remove this in a real implementation)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setTransformation("removeBackground");
    setIsLoading(false);
  };
  const handlePixalate = async () => {
    setIsLoading(true);

    // Simulate a delay to show loading (remove this in a real implementation)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setTransformation("pixelate");
    setIsLoading(false);
  };
  const handleGrayScale = async () => {
    setIsLoading(true);

    // Simulate a delay to show loading (remove this in a real implementation)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setTransformation("grayscale");
    setIsLoading(false);
  };
  const handleDownload = () => {
    if (imageId && transformation === "removeBackground") {
      // Generate Cloudinary URL with transformation for the background-removed image
      const cloudinaryUrl = `https://res.cloudinary.com/your-cloud-name/image/upload/${transformation}/${imageId}.png`;

      // Open the Cloudinary URL in a new tab for download
      window.open(cloudinaryUrl, "_blank");
    }
  };

  return (
    <>
      <div className="flex justify-center m-8">
        <div className="w-3/4 flex flex-col justify-center items-center">
          <h2 className="text-7xl font-bold custom_gray text-center m-6">
            Upload an image to remove the background
          </h2>
          <div className="card shadow-2xl w-72 m-10 p-2 rounded-lg">
            <div className=" flex justify-center p-4">
              <Image src="/images/logo.png" alt="Logo" width={70} height={70} />
            </div>
            <div className="button flex justify-center">
              <UploadBtn onUploadSuccess={handleUploadSuccess} />
            </div>
            <p className="text-center text-gray-600 mb-10">or drop a file</p>
          </div>
        </div>
      </div>

      {imageId && ( // Conditionally render the last div only if there is an image
        <div className="last-div">
          <div className="image flex justify-center p-20 gap-6">
            <div className="original w-1/2">
              <p className="my-9 text-gray-500 font-semibold text-center">
                Original
              </p>
              <CloudImage src={imageId} width={550} height={250} />
            </div>
            <div className="bg-removed w-1/2">
              <p className="my-6 text-gray-500 font-semibold text-center">
                <button
                  onClick={handleRemoveBackground}
                  disabled={isLoading}
                  className="bg-blue-600 p-3 text-white rounded-full mx-2"
                >
                  {isLoading ? "Processing..." : "Remove Background"}
                </button>
                <button
                  onClick={handlePixalate}
                  disabled={isLoading}
                  className="bg-blue-600 p-3 text-white rounded-full mx-2"
                >
                  {isLoading ? "Processing..." : "Pixelate"}
                </button>
                <button
                  onClick={handleGrayScale}
                  disabled={isLoading}
                  className="bg-blue-600 p-3 text-white rounded-full mx-2"
                >
                  {isLoading ? "Processing..." : "Gray scale"}
                </button>
              </p>

              {transformation === "removeBackground" && (
                <CloudImage
                  src={imageId}
                  width={550}
                  height={250}
                  alt="You should purchase the plan"
                  removeBackground
                />
              )}
              {transformation === "grayscale" && (
                <CloudImage
                  src={imageId}
                  width={550}
                  height={250}
                  alt="an image of something"
                  grayscale
                />
              )}
              {transformation === "pixelate" && (
                <CloudImage
                  src={imageId}
                  width={550}
                  height={250}
                  alt="an image of something"
                  pixelate
                />
              )}
            </div>
          </div>

          <div className="button flex justify-center">
            <button
              onClick={handleDownload}
              className="flex justify-end bg-blue-600 p-2 gap-1 ps-2 rounded-full my-4 text-white"
            >
              Download <ArrowDownToLine />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
