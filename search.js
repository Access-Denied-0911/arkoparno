const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        if (query.length === 0) {
            searchResults.innerHTML = '';
            searchResults.style.display = 'none';
            return;
        }

        // Searching through your items array
        const matches = items.filter(item => 
            item.item_name.toLowerCase().includes(query) || 
            item.company.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query)
        );

        renderSearchDropdown(matches);
    });
}

function renderSearchDropdown(results) {
    if (results.length === 0) {
        searchResults.innerHTML = `<div style="padding: 20px; color: #888; text-align: center;">No results found for "${searchInput.value}"</div>`;
    } else {
        let html = '';
        results.slice(0, 6).forEach(item => {
            html += `
                <div class="search-dropdown-item" 
                     onclick="window.location.href='product-details.html?id=${item.id}'"
                     style="display: flex; padding: 12px; border-bottom: 1px solid #f0f0f0; cursor: pointer; align-items: flex-start;">
                    <img src="${item.image}" style="width: 60px; height: 70px; object-fit: cover; border-radius: 4px; margin-right: 15px;">
                    <div style="flex-grow: 1;">
                        <div style="font-size: 14px; font-weight: 700; color: #282c3f;">${item.item_name}</div>
                        <div style="font-size: 12px; color: #ff3f6c; margin: 2px 0;">${item.company} | ${item.category}</div>
                        <div style="font-size: 11px; color: #7e818c; line-height: 1.2; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${item.description}</div>
                    </div>
                    <div style="text-align: right; min-width: 70px;">
                        <div style="font-size: 14px; font-weight: 700; color: #282c3f;">₹${item.current_price}</div>
                        <div style="font-size: 10px; color: #ff905a;">(${item.discount_percentage}% OFF)</div>
                    </div>
                </div>
            `;
        });
        searchResults.innerHTML = html;
    }
    searchResults.style.display = 'block';
}

// Close search if user clicks anywhere else on the screen
document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.style.display = 'none';
    }
});