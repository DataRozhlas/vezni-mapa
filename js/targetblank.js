document.addEventListener("DOMContentLoaded", () => {
  const links = document.getElementsByTagName("a");

  Array.prototype.forEach.call(links, (link) => {
    if (link.hostname !== window.location.hostname) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
  });
});
