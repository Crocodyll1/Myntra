let itemsContainerElement = document.querySelector('.items-container');

let item = {
  item_image : '1.jpg',
  rating: {
    stars: 4.5,
    reviews : 2000,
  },
  company_name: 'Carlton London',
  item_name: 'Rhodium-Plated CZ Floral Studs',
  current_price:'606',
  original_price: '1045',
  discount: '42'
}; // mking components generic

itemsContainerElement.innerHTML = `
  <div class="item-container">
    <img class="item-image" src="${item.item_image}" alt="earring">

    <div class="rating">${item.rating.stars} ⭐ | ${item.rating.reviews}</div>
    <div class="company-name">${item.company_name}</div>
    <div class="item-name">${item.item_name}</div>

    <div class="price">
      <span class="current-price">Rs ${item.current_price}</span>
      <span class="original-price">Rs ${item.original_price}</span>
      <span class="discount">(${item.discount}% OFF)</span>
    </div>

    <button class="btn-add-bag">Add to Bag</button>
  </div>
`;
