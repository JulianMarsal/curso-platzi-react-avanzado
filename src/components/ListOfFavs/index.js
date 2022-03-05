import React from "react";
import { Grid, Image, NavLink } from "./styles";
import PropTypes from "prop-types";

export const ListOfFavs = ({ favs = [] }) => {
  return (
    <Grid>
      {favs.map((fav) => (
        <NavLink key={fav.id} to={`/detail/${fav.id}`}>
          <Image src={fav.src} alt="Animal image" />
        </NavLink>
      ))}
    </Grid>
  );
};

ListOfFavs.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
};
