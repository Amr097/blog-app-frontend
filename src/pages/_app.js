import "@/styles/globals.scss";
import "@/styles/header.scss";
import "@/styles/homePage.scss";
import "@/styles/recentPosts.scss";
import "@/styles/singlePost.scss";
import "@/styles/AllPosts.scss";
import "@/styles/accessBoard.scss";
import "@/styles/createPost.scss";
import { MenuContextProvider } from "@/store/MenuContext";
// pages/_app.js
import { UserProvider } from "@auth0/nextjs-auth0/client";

export default function App({ Component, pageProps }) {
  return (
    <MenuContextProvider>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </MenuContextProvider>
  );
}
