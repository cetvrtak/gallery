const images = [
  "https://picsum.photos/id/230/1920/1080",
  "https://picsum.photos/id/231/1920/1080",
  "https://picsum.photos/id/232/1920/1080",
  "https://picsum.photos/id/233/1920/1080",
  "https://picsum.photos/id/234/1920/1080",
  "https://picsum.photos/id/235/1920/1080",
  "https://picsum.photos/id/236/1920/1080",
  "https://picsum.photos/id/237/1920/1080",
  "https://picsum.photos/id/238/1920/1080",
  "https://picsum.photos/id/239/1920/1080",
  "https://picsum.photos/id/240/1920/1080",
  "https://picsum.photos/id/241/1920/1080",
  "https://picsum.photos/id/242/1920/1080",
  "https://picsum.photos/id/243/1920/1080",
  "https://picsum.photos/id/244/1920/1080",
  "https://picsum.photos/id/251/1920/1080",
  "https://picsum.photos/id/247/1920/1080",
  "https://picsum.photos/id/248/1920/1080",
  "https://picsum.photos/id/249/1920/1080",
  "https://picsum.photos/id/250/1920/1080",
];

for (const img of images) {
  const imgEl = document.createElement("img");
  imgEl.src = img;
  document.body.querySelector(".container").append(imgEl);
}
