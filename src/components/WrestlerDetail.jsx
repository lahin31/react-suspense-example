import React from "react";
import { unstable_createResource } from "react-cache";
import { fetchWrestler } from "../api";

const WrestlerDetailsResource = unstable_createResource(fetchWrestler);
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

const WrestlerDetail = ({ wrestlerId, goBack }) => {
  const wrestler = WrestlerDetailsResource.read(wrestlerId);
  return (
    <div>
      <button onClick={goBack}>Back</button>
      <p>Name is {wrestler.name}</p>
      <React.Suspense
        maxDuration={5000}
        fallback={
          <img
            src={wrestler.img}
            className="preview"
            alt=""
            style={{ width: "25%" }}
          />
        }
      >
        <Img
          src={wrestler.img}
          className="loaded"
          alt=""
          style={{ width: "25%" }}
        />
      </React.Suspense>
    </div>
  );
};

export default WrestlerDetail;
