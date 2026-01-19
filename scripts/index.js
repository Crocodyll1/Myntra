let itemsContainerElement = document.querySelector('.items-container');

itemsContainerElement.innerHTML = `
  <div class="item-container">
    <img class="item-image" src="images/1.jpg" alt="earring">

    <div class="rating">4.3 ⭐ | 1.9K</div>
    <div class="company-name">Carlton London</div>
    <div class="item-name">Rhodium-Plated CZ Floral Studs</div>

    <div class="price">
      <span class="current-price">Rs 606</span>
      <span class="original-price">Rs 1045</span>
      <span class="discount">(42% off)</span>
    </div>

    <button class="btn-add-bag">Add to Bag</button>
  </div>
`;
