import React from "react";
import { Helmet } from "react-helmet";
import { Div, Title, Subtitle } from "./styles";

export const Layout = ({
  children,
  title,
  subtitle,
  showDescription = false,
  showTitle = false,
}) => {
  return (
    <>
      <Helmet>
        {title && <title>Pettagram 🐶| {title}</title>}
        {subtitle && <meta name="description" content={subtitle} />}
      </Helmet>
      <Div>
        {title && showTitle && <Title>{title}</Title>}
        {subtitle && showDescription && <Subtitle>{subtitle}</Subtitle>}
        {children}
      </Div>
    </>
  );
};
