const navBarHeight = 60;

document.getElementById('btn-menu').addEventListener('click', function() {
  document.getElementById('nav').classList.toggle('show');
});

document.getElementById('btn-scroll').addEventListener('click', function(e) {

  var aboutOffsetTop = document.getElementById('about').offsetTop - 60;
  var scrollPosition = window.pageYOffset;

  var scrollFn = setInterval(function() {
    scrollPosition += 10;
    window.scrollTo(0, scrollPosition)
    if (window.pageYOffset >= aboutOffsetTop) {
      clearInterval(scrollFn);
    }
  }, 0);
});

var productGalleryPics = [
  {
    imageUrl: 'images/products-mug.jpg',
    alt: 'Gudetama mug'
  },
  {
    imageUrl: 'images/products-cellcase.jpg',
    alt: 'Gudetama cellphone case'
  },
  {
    imageUrl: 'images/products-bag.jpg',
    alt: 'Gudetama bag'
  },
  {
    imageUrl: 'images/products-keychains.jpg',
    alt: 'Gudetama keychains'
  },
];

var productPicIndex = 0;

document.getElementById('btn-next').addEventListener('click', function() {
  var productPic = document.getElementById('product-pic');
  productPicIndex++;

  if(productPicIndex >= productGalleryPics.length) {
    productPicIndex = 0;
  }

  var nextProduct = productGalleryPics[productPicIndex];

  productPic.src = nextProduct.imageUrl;
  productPic.alt = nextProduct.alt;
});
