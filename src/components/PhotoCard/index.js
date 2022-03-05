import React from "react";
import { Article, ImgWrapper, Img } from "./styles";
import { useNearScreen } from "../../hooks/useNearScreen";
import { FavButton } from "../FavButton";
import { useLikePhoto } from "../../hooks/useToggleLikeMutations";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const DEFAULT_IMAGE =
  "https://3.bp.blogspot.com/-T_2Mk0VWsPs/WKh_DNP_02I/AAAAAAAABF4/oBTlwNI52u8mdo9Y5deIxBzg7Em4n2pvQCLcB/s400/loading%2Bgif%2B1.gif";

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen();

  const [toggleLike] = useLikePhoto();

  const handleFavClick = () => {
    toggleLike({ variables: { input: { id } } });
  };

  return (
    <Article ref={element}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt="Animal image" />
            </ImgWrapper>
          </Link>

          <FavButton
            liked={liked}
            likes={likes}
            onClick={() => handleFavClick(id)}
          />
        </>
      )}
    </Article>
  );
};

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName];

    if (propValue === undefined) {
      return new Error(`${propName} is a required prop.`);
    }

    if (typeof propValue !== "number") {
      return new Error(`${propName} must be a number.`);
    }
    if (propValue < 0) {
      return new Error(`${propName} must be greater than 0.`);
    }
  },
};
