import React from "react";
import { Article, ImgWrapper, Img } from "./styles";

import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";
import { FavButton } from "../FavButton";
import { useLikePhoto } from "../../hooks/useToggleLikeMutations";
import { Link } from "react-router-dom";

const DEFAULT_IMAGE =
  "https://3.bp.blogspot.com/-T_2Mk0VWsPs/WKh_DNP_02I/AAAAAAAABF4/oBTlwNI52u8mdo9Y5deIxBzg7Em4n2pvQCLcB/s400/loading%2Bgif%2B1.gif";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen();
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);
  const [toggleLike] = useLikePhoto();

  const handleFavClick = () => {
    setLiked(!liked);
    !liked && toggleLike({ variables: { input: { id } } });
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
