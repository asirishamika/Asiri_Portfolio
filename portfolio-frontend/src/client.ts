import { createClient, type ClientConfig } from "@sanity/client";
//import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import imageUrlBuilder from "@sanity/image-url";

const config: ClientConfig = {
  projectId: 'wu293m88',
  dataset: "production",
  useCdn: true, 
  apiVersion: "2023-12-19",
  token:'skFyCXgFkZidsC2wz9hmohZFlAGPM5LTspTygpPa9qabvdlM2hxHzpT61FaEJCAo2G6SdxCKRL28OyQAuwWExnPCJaXiSVINEfiJsgVAcL5BP9n2Gw1iULTOsfd1jCtk9wpkHvNp4sMpGulXSu6N6c6Az4lElhR2Qm6pynJkBUdiFWqUN1xQ' 
};
export const client = createClient(config);

const builder = imageUrlBuilder(client);
export const urlFor=(source:string)=>builder.image(source);







