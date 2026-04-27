const container = document.getElementById("itemsContainer");

function renderProducts() {
    let html = "";

    items.forEach(item => {
        html += `
        <div class="item_container">
            <div class="product-clickable-area" onclick="window.location.href='product-details.html?id=${item.id}'" style="cursor: pointer;">
                <img class="sale_image" src="${item.image}">

                <div class="rating">
                    ${item.rating.stars} ⭐ | ${item.rating.count}
                </div>

                <div class="company_name">${item.company}</div>
                <div class="item_name">${item.item_name}</div>
            </div>

            <div class="price">
                <span class="current_price">₹${item.current_price}</span>
                <span class="original_price">₹${item.original_price}</span>
                <span class="discount">(${item.discount_percentage}% OFF)</span>
            </div>

            <button class="btn-add-bag" onclick="addToBag('${item.id}')">
                Add to Bag
            </button>
        </div>
        `;
    });

    container.innerHTML = html;
}

renderProducts();