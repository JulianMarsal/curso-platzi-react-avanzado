import React from "react";
import { Grid, Image, NavLink } from "./styles";

export const ListOfFavs = ({ favs = [] }) => {
  return (
    <Grid>
      {favs.map((fav) => (
        <NavLink key={fav.id} to={`/detail/${fav.id}`}>
          <Image src={fav.src} />
        </NavLink>
      ))}
    </Grid>
  );
};
