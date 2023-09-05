import ImageShow from "./ImageShow";
import "./ImageList.css";

function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });

  return <article className="image-list">{renderedImages}</article>;
}

export default ImageList;
