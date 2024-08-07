import React from "react";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import favicon from "../images/favicon.png";
import { useCloudWatchRum } from "../hooks/useCloudWatchRum";

export const SEO = ({ title, description, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    icon,
  } = useSiteMetadata();

  useCloudWatchRum();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image,
    icon,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="icon" href={favicon} type="image/png" />
      {children}
    </>
  );
};
