import React, { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";

const LikeButton = (props) => {
  const [likeactive, setLikeactive] = useState(false);
  const [dislikeactive, setDislikeactive] = useState(false);

  function likeFunction() {
    if (likeactive) {
      setLikeactive(false);
    } else {
      setLikeactive(true);
      if (dislikeactive) {
        setDislikeactive(false);
      }
    }
  }

  function dislikeFunction() {
    if (dislikeactive) {
      setDislikeactive(false);
    } else {
      setDislikeactive(true);
      if (likeactive) {
        setLikeactive(false);
      }
    }
  }
  return (
    <div>
      <button
        onClick={likeFunction}
        className={[likeactive ? "likeactive" : null, "button"].join(" ")}
      >
        <FaThumbsUp />
      </button>
      <button
        onClick={dislikeFunction}
        className={[dislikeactive ? "dislikeactive" : null, "button"].join(" ")}
      >
        <FaThumbsDown />
      </button>
    </div>
  );
};

export default LikeButton;
