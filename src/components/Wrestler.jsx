import React from "react";
import { unstable_createResource } from "react-cache";

const ImageResource = unstable_createResource(
  source =>
    new Promise(resolve => {
      const img = new Image();
      img.src = source;
      img.onload = resolve;
    })
);
const Img = ({ src, alt, ...props }) => {
  ImageResource.read(src);
  return <img src={src} alt={alt} {...props} />;
};

const Wrestler = props => {
  const { wrestler, onWrestlerClick } = props;
  return (
    <div className="wrestler">
      <p
        onClick={() => onWrestlerClick(wrestler.id)}
        style={{ cursor: "pointer" }}
      >
        {wrestler.name}
      </p>
      <div>
        <React.Suspense
          maxDuration={600}
          fallback={
            <img
              src={wrestler.img}
              className="preview"
              alt=""
              style={{ width: "25%", borderRadius: "50%" }}
            />
          }
        >
          <Img
            src={wrestler.img}
            alt=""
            className="loaded"
            style={{ width: "25%", borderRadius: "50%", cursor: "pointer" }}
            onClick={() => onWrestlerClick(wrestler.id)}
          />
        </React.Suspense>
      </div>
    </div>
  );
};

export default Wrestler;
