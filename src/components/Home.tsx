import * as React from "react";

import Articles from "./Articles";

import { Articles as ApiArticles} from "../api/get-articles";


interface Props {
  articles: ApiArticles
}

const Home: React.FC<Props> = ({ articles }) => {
  const bannerContent = <p>A place to store my notes.</p>;
  return (
    <Articles
      articles={articles}
      bannerContent={bannerContent}
      bannerTitle="Notes by V"
      bannerLink={{
        url: "/about",
        text: "About",
      }}
      backgroundImageUrl="https://notesbyvmedia.blob.core.windows.net/images/pen-idea-bulb-paper-web-optimized.jpg"
    />
  );
};

export { Home as default };
