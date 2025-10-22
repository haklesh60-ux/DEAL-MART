window.onload = function() {
  var publicSpreadsheetUrl = 'YOUR_GOOGLE_SHEET_PUBLISHED_URL';

  Tabletop.init({
    key: publicSpreadsheetUrl,
    callback: showProducts,
    simpleSheet: true
  });
};

function showProducts(data, tabletop) {
  let container = document.getElementById('products');
  data.forEach(product => {
    container.innerHTML += `
      <div class="product-item">
        <img src="${product['Image URL']}" alt="${product['Product Name']}">
        <h3>${product['Product Name']}</h3>
        <p>${product['Description']}</p>
        <p class="price">₹${product['Price']}</p>
        <a href="${product['WhatsApp Order Link']}" class="btn">Order Now</a>
      </div>
    `;
  });
}
