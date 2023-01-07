let products_container = document.querySelector('.products');
let btns = document.querySelectorAll('.btn');

async function fetchProduct() {
    let data = await fetch('./product.json');
    let { products } = await data.json();
    products.map(({ image, title, price, reviews }) => {
        products_container.innerHTML += `
  <div class="product">
  <div class="product-img">
      <img src="${image}" alt="Product" />
  </div>
  <div class="product-details">
      <div>
          <h2 class="product-heading">${title}</h2>
          <h3 class="product-price">${price}</h3>
      </div>
      <div>
          <span class="review">${reviews}</span>
          <ion-icon name="star"></ion-icon>
      </div>
  </div>
</div>
  `;
    });

    function btn_active(btn) {
        btns.forEach((btn) => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');
    }

    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            let match = btn.classList;
            if (match.contains('list_view')) {
                products_container.classList.add('list-view');
                products_container.classList.remove('grid-view');
                btn_active(btn);
            } else {
                products_container.classList.add('grid-view');
                products_container.classList.remove('list-view');
                btn_active(btn);
            }
        });
    });
}
fetchProduct();