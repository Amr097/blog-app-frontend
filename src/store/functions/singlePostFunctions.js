export function SavePost(id, setIsSaved) {
  fetch("/api/savedposts", {
    method: "POST",
    body: JSON.stringify(id),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => data && setIsSaved(true));
}

export function unSavePost(id, setIsSaved) {
  fetch("/api/delete", {
    method: "POST",
    body: JSON.stringify(id),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => data && setIsSaved(false));
}
