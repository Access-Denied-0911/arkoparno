
function renderProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const item = items.find(i => i.id === productId);

    if (!item) {
        document.querySelector('main').innerHTML = `<h1 style="text-align:center; margin-top:100px;">Product Not Found</h1>`;
        return;
    }

    // Update Image
    const imageContainer = document.getElementById('product-image');
    if (imageContainer) {
        imageContainer.innerHTML = `<img src="${item.image}" style="width: 100%; border-radius: 4px; object-fit: contain;">`;
    }

    // Update Detailed Info
    const infoContainer = document.getElementById('product-info');
    if (infoContainer) {
        infoContainer.innerHTML = `
            <h1 style="font-size: 32px; font-weight: 700; color: #282c3f; margin-bottom: 5px;">${item.company}</h1>
            <p style="font-size: 22px; color: #535665; margin-bottom: 15px;">${item.item_name}</p>
            
            <div style="display: inline-flex; align-items: center; border: 1px solid #eaeaec; padding: 5px 10px; border-radius: 4px; margin-bottom: 20px; font-weight: 700;">
                <span style="display: flex; align-items: center; gap: 4px;">
                    ${item.rating.stars} <span class="material-symbols-outlined" style="font-size: 18px; color: #14958f; font-variation-settings: 'FILL' 1;">star</span>
                </span>
                <span style="color: #7e818c; margin-left: 10px; padding-left: 10px; border-left: 1px solid #d4d5d9;">
                    ${item.rating.count} Ratings
                </span>
            </div>

            <hr style="border: 0.5px solid #eee; margin-bottom: 20px;">

            <div style="margin-bottom: 10px;">
                <span style="font-size: 28px; font-weight: 700; color: #282c3f;">₹${item.current_price}</span>
                <span style="text-decoration: line-through; color: #888; font-size: 20px; margin-left: 12px;">MRP ₹${item.original_price}</span>
                <span style="color: #ff3f6c; font-size: 20px; margin-left: 12px; font-weight: 700;">(${item.discount_percentage}% OFF)</span>
            </div>
            <p style="color: #03a685; font-size: 14px; font-weight: 700; margin-bottom: 25px;">Inclusive of all taxes</p>

            <div style="display: flex; gap: 15px; margin-bottom: 30px;">
                <button class="btn-add-bag" onclick="addToBag('${item.id}')" 
                    style="flex: 2; padding: 18px; background: #ff3f6c; color: white; border: none; border-radius: 4px; font-weight: 700; font-size: 16px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 10px;">
                    <span class="material-symbols-outlined">shopping_bag</span> ADD TO BAG
                </button>
                <button style="flex: 1; padding: 18px; background: white; color: #282c3f; border: 1px solid #d4d5d9; border-radius: 4px; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 10px;">
                    <span class="material-symbols-outlined">favorite</span> WISHLIST
                </button>
            </div>

            <div style="border-top: 1px solid #eee; padding-top: 25px;">
                <h4 style="font-size: 16px; font-weight: 700; margin-bottom: 15px; color: #282c3f; text-transform: uppercase; letter-spacing: 1px;">Product Details</h4>
                <p style="font-size: 15px; color: #282c3f; line-height: 1.8;">
                    This authentic <strong>${item.item_name}</strong> from the house of <strong>${item.company}</strong> is a perfect blend of style and utility. Crafted with high-quality materials, it ensures durability and a premium feel. 
                </p>
                <ul style="padding-left: 20px; margin-top: 15px; font-size: 14px; color: #535665; line-height: 2;">
                    <li>100% Original ${item.company} Product</li>
                    <li>Pay on delivery available</li>
                    <li>Easy 14 days returns and exchanges</li>
                    <li>Try & Buy might be available</li>
                </ul>
            </div>

            <div style="margin-top: 30px; padding: 15px; background: #f5f5f6; border-radius: 4px;">
                <h4 style="font-size: 14px; font-weight: 700; margin-bottom: 10px;">DELIVERY OPTIONS <span class="material-symbols-outlined" style="font-size: 18px; vertical-align: middle;">local_shipping</span></h4>
                <p style="font-size: 13px; color: #535665;">Enter pincode to check delivery time & Pay on Delivery Availability</p>
            </div>
        `;
    }
}

renderProductDetails();