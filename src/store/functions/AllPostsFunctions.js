const incrementIndex = (
  pageIndex,
  setRenderIndex,
  setPageIndex,
  RecentPostData,
  event
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
  }
};
const DecrementIndex = (
  pageIndex,
  setRenderIndex,
  setPageIndex,
  RecentPostData
) => {
  if (pageIndex > 1) {
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
  }
};

export { incrementIndex, DecrementIndex };
