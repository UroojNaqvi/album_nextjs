"use client";
import { useEffect, useState } from "react";
import { SearchResult } from "../gallery/page";
import { ImageGrid } from "@/components/image-grid";
import { CloudinayImage } from "../../components/cloudinary-image";

export default function FavouritesList ( {
    initialResources,
}:  
{
    initialResources : SearchResult[];
}) {
    const [resources, setResources] = useState(initialResources);


    useEffect(() =>  {
     setResources(initialResources);
    },[initialResources]);

          return(
            <ImageGrid
            images={resources}
            getImage={(imageData: SearchResult) => {
              return(
                <CloudinayImage
                key={imageData.public_id}
                imageData={imageData}
                width="400"
                height="300"
                alt="an image of something"
                onUnheart={(unheartResources)=> {
                    setResources((currentResources) =>
                    currentResources.filter(
                        (resource) => 
                        resource.public_id !== unheartResources.public_id
                    )
                     );
                    }}
                    />
                     );
                }}
                />
                );
            }






