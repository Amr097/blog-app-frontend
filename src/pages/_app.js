import "@/styles/globals.scss";
import "@/styles/header.scss";
import "@/styles/homePage.scss";
import "@/styles/recentPosts.scss";
import "@/styles/singlePost.scss";
import "@/styles/AllPosts.scss";
import "@/styles/accessBoard.scss";
import { MenuContextProvider } from "@/store/MenuContext";

export default function App({ Component, pageProps }) {
  return (
    <MenuContextProvider>
      <Component {...pageProps} />
    </MenuContextProvider>
  );
}
