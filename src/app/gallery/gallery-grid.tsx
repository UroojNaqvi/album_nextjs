 "use client";

import { CloudinayImage }  from "../../components/cloudinary-image";
import { ImageGrid } from "@/components/image-grid";
import { SearchResult } from "./page";

export default function GalleryGrid({images}:{images: SearchResult[] }) {
  // console.log({images})
 return (
        <ImageGrid
        images={images}
        getImage={ (imageData: SearchResult)  => {
          return( 
            <CloudinayImage
            key={imageData.public_id}
            imageData={imageData}
            width="400"
            height="300"
            alt="an image of something"
            />
          );
        } }
       />
    );
      }