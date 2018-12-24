const links = document.getElementsByTagName("a");
Array.from(links).forEach((link) => {
  if (link.hostname !== window.location.hostname) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
});
