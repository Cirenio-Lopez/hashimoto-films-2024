import ImageGallery from "react-image-gallery";

export default function Gallery(images: any) {
  return (
    <>
      <ImageGallery items={images.images} />
    </>
  );
}
