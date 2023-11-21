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
  const [assetId, setAssetId] = useState<string | undefined>();
  const handleUploadSuccess = (result: any) => {
    // 'result.info.public_id' contains the Cloudinary public ID
    setAssetId(result.info.asset_id);
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
    if (
      imageId &&
      (transformation === "removeBackground" ||
        transformation === "pixelate" ||
        transformation === "grayscale")
    ) {
      // Generate Cloudinary URL with transformation for the image
      const cloudinaryUrl = `https://console.cloudinary.com/console/c-1b03fc7bbac6e00e1179123caa1d3f/media_library/homepage/asset/${assetId}/manage?context=manage`;

      // Open the Cloudinary URL in a new tab for download
      window.open(cloudinaryUrl, "_blank");
    }
  };

  return (
    <>
      <div className="flex justify-center m-8">
        <div className="w-3/4 flex flex-col justify-center items-center">
          <h2 className="text-3xl md:text-7xl lg:text-7xl font-bold custom_gray text-center m-6 ">
            Transform your Photo
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
        <div className="last-div p-6">
          <div className="image flex flex-col md:flex-row lg:flex-row justify-center md:p-20 lg:p-20 gap-6">
            <div className="original md:w-1/2 lg:w-1/2">
              <p className="my-9 text-gray-500 font-semibold text-center">
                Original
              </p>
              <CloudImage src={imageId} width={550} height={250} />
            </div>
            <div className="bg-removed md:w-1/2 lg:1/2">
              <p className="my-6 text-gray-500 font-semibold md:flex md:items-center text-center">
                <button
                  onClick={handleRemoveBackground}
                  disabled={isLoading}
                  className="bg-blue-600 p-3 hidden md:block lg:block text-white rounded-full mx-2"
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
