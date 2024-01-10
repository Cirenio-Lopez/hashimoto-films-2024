import { InstagramEmbed } from "react-social-media-embed";
import { useEffect, useState } from "react";

interface MultiMediaProps {
  data: { [key: string]: { url: string; type: string } } | null;
}

export default function MultiMedia({ data }: MultiMediaProps) {
  data = data === null ? {} : data;
  const sortedData = Object.values(data);
  const [totalItems, setTotalItems] = useState<number>(6);
  const listSize = sortedData.length;
  const slice = sortedData.slice(0, totalItems);

  function loadMore() {
    if (totalItems + 6 > listSize) {
      setTotalItems(listSize);
    } else {
      setTotalItems(totalItems + 6);
    }
  }

  return (
    <div className="multi-media" key="multi-media">
      {slice.map((content, index) =>
        content.type === "content/instagram" ? (
          <div className="media-container" key={index}>
            <InstagramEmbed url={content.url} width={450} />
          </div>
        ) : (
          <div className="media-container" key={index}>
            <video src={content.url} controls width="100%" />
          </div>
        )
      )}
      {totalItems < listSize && (
        <div className="load-more">
          <button className="load-button" onClick={loadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
