// bag.js
let bagItemObjects = [];

// This function acts as the "Master Control"
function onLoad() {
    loadBagItemObjects();
    displayBagItems();
    displayPriceSummary();
}

function loadBagItemObjects() {
    // Sync the global 'bag' variable with LocalStorage first
    bag = JSON.parse(localStorage.getItem("bag")) || [];

    const counts = {};
    bag.forEach(id => { 
        counts[id] = (counts[id] || 0) + 1; 
    });

    bagItemObjects = Object.keys(counts).map(id => {
        const item = items.find(item => item.id === id);
        if (item) {
            return { ...item, quantity: counts[id] };
        }
    }).filter(item => item !== undefined);
}

function displayBagItems() {
    const containerElement = document.querySelector('#bag-items-container');
    if (!containerElement) return;

    let innerHTML = '';
    
    if (bagItemObjects.length === 0) {
        containerElement.innerHTML = `<h2 style="text-align:center; margin-top:50px;">Your bag is empty</h2>`;
        return;
    }

    bagItemObjects.forEach(item => {
        innerHTML += `
        <div class="bag-item-container" style="display: flex; margin-bottom: 20px; background: rgba(0,0,0,0.5); padding: 15px; border-radius: 12px; border: 1px solid #444;">
            <div class="bag-item-left">
                <img src="${item.image}" style="width: 120px; border-radius: 8px;">
            </div>
            <div class="bag-item-right" style="margin-left: 20px; flex-grow: 1;">
                <div class="company_name" style="font-weight: bold; font-size: 1.1rem;">${item.company}</div>
                <div class="item_name" style="color: #ccc;">${item.item_name}</div>
                
                <div class="quantity-controls" style="margin: 15px 0; display: flex; align-items: center; gap: 15px;">
                    <button class="qty-btn" onclick="removeFromBag('${item.id}')" style="padding: 5px 12px; cursor:pointer;">-</button>
                    <span style="font-size: 1.2rem; font-weight: bold;">${item.quantity}</span>
                    <button class="qty-btn" onclick="addToBag('${item.id}')" style="padding: 5px 12px; cursor:pointer;">+</button>
                </div>

                <div class="price">
                    <span class="current_price" style="color: #00ffff; font-weight: bold; font-size: 1.1rem;">₹${item.current_price * item.quantity}</span>
                    <span style="color: #888; font-size: 0.9rem; margin-left: 10px;">(₹${item.current_price} each)</span>
                </div>
            </div>
        </div>`;
    });
    containerElement.innerHTML = innerHTML;
}

function displayPriceSummary() {
    const summaryElement = document.querySelector('#price-summary');
    if (!summaryElement) return;

    let totalMRP = 0;
    let totalDiscount = 0;

    bagItemObjects.forEach(item => {
        totalMRP += (item.original_price * item.quantity);
        totalDiscount += (item.original_price - item.current_price) * item.quantity;
    });

    let finalPayment = totalMRP - totalDiscount;

    summaryElement.innerHTML = `
        <div style="display: flex; justify-content: space-between; margin: 10px 0;">
            <span>Total MRP (${bag.length} items)</span>
            <span>₹${totalMRP}</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin: 10px 0;">
            <span>Bag Discount</span>
            <span style="color: #00ff88">-₹${totalDiscount}</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin: 10px 0;">
            <span>Convenience Fee</span>
            <span>FREE</span>
        </div>
        <hr style="border: 0.5px solid #444; margin: 15px 0;">
        <div style="display: flex; justify-content: space-between; font-weight: bold; font-size: 1.3rem;">
            <span>Total Amount</span>
            <span style="color: #00ffff;">₹${finalPayment}</span>
        </div>
    `;
}

// Initialize the page
onLoad();