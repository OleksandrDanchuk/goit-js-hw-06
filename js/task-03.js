const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryListElement = document.querySelector('.gallery');
galleryListElement.style.display = 'flex';
galleryListElement.style.listStyle = 'none';
galleryListElement.style.gap = '40px';

const imageGalleryList = images
  .map(function ({ url, alt }) {
    let img;
    return (img = `<li><img src=${url} alt=${alt} style='width: 320px; height: 200px'/></li>`);
  })
  .join(' ');
galleryListElement.insertAdjacentHTML('beforeend', imageGalleryList);
