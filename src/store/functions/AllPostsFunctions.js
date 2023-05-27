const incrementIndex = (
  pageIndex,
  setRenderIndex,
  setPageIndex,
  RecentPostData,
  event,
  setCurrentPagePosts,
  renderIndex
) => {
  if (pageIndex < Math.ceil(RecentPostData.length / 9)) {
    setRenderIndex((prev) => {
      return {
        start: prev.start + 9,
        end: prev.end + 9,
      };
    });
    setPageIndex((prev) => {
      window.localStorage.setItem("MY_APP_index", prev + 1);
      return prev + 1;
    });
    window.scrollTo(0, 0);

    // setCurrentPagePosts(
    //   RecentPostData.slice(renderIndex.start, renderIndex.end)
    // );
    //console.log(RecentPostData.slice(renderIndex.start, renderIndex.end));
    //console.log(renderIndex.start, renderIndex.end);
    //   location.reload();
  }
};
const DecrementIndex = (
  pageIndex,
  setRenderIndex,
  setPageIndex,
  RecentPostData,
  setCurrentPagePosts,
  renderIndex
) => {
  if (pageIndex > 1) {
    window.scrollTo(0, 0);
    setRenderIndex((prev) => {
      return {
        start: prev.start - 9,
        end: prev.end - 9,
      };
    });
    setPageIndex((prev) => {
      window.localStorage.setItem("MY_APP_index", prev - 1);
      return prev - 1;
    });

    // setCurrentPagePosts(
    //   RecentPostData.slice(renderIndex.start, renderIndex.end)
    // );
    //location.reload();
    // console.log(RecentPostData.slice(renderIndex.start, renderIndex.end));
    // console.log(renderIndex.start, renderIndex.end);
  }
};

export { incrementIndex, DecrementIndex };
