let itemsContainerElement = document.querySelector('.items-container');
// displayBagIcon();
displayItemsOnHomePage();

let bagItems =[];
function addToBag(itemID){
  bagItems.push(itemID);
  displayBagIcon();


}

function displayBagIcon(){
  let bagItemCountElement = document.querySelector('.add-item-count');
  if(bagItems.length > 0){
    
    bagItemCountElement.innerHTML = bagItems.length;
  } else {
    bagItemCountElement.style.visibility = 'hidden';
  }
}


function displayItemsOnHomePage() {
  let innerHTML = '';
items.forEach(item => { 
  innerHTML += `
  <div class="item-container">
    <img class="item-image" src="${item.image}" alt="earring">

    <div class="rating">${item.rating.stars} ⭐ | ${item.rating.count}</div>
    <div class="company-name">${item.company}</div>
    <div class="item-name">${item.item_name}</div>

    <div class="price">
      <span class="current-price">Rs ${item.current_price}</span>
      <span class="original-price">Rs ${item.original_price}</span>
      <span class="discount">(${item.discount_percentage}% OFF)</span>
    </div>

    <button class="btn-add-bag" onclick= "addToBag(${item.id})">Add to Bag</button>
  </div>`
})

itemsContainerElement.innerHTML = innerHTML;


}

// mking components generic
