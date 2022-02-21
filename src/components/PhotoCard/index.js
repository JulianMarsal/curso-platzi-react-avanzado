import React from "react";
import { Article, ImgWrapper, Img } from "./styles";
import { useNearScreen } from "../../hooks/useNearScreen";
import { FavButton } from "../FavButton";
import { useLikePhoto } from "../../hooks/useToggleLikeMutations";
import { Link } from "react-router-dom";

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
              <Img src={src} />
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
