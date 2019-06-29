
export const downloadPhoto = (url) =>
  fetch(`${process.env.REACT_APP_PROXY_URL}/${encodeURIComponent(url)}`)
    .then(res => res.blob());
