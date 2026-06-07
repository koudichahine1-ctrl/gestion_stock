
let products = JSON.parse(localStorage.getItem('stock_products')) || [];

const productTableBody = document.getElementById('product-table-body');
const productForm = document.getElementById('product-form');
const productModal = document.getElementById('product-modal');
const btnOpenModal = document.getElementById('btn-open-modal');
const btnCloseModal = document.querySelector('.close-modal');
const searchInput = document.getElementById('search-input');
const filterCategory = document.getElementById('filter-category');


const statTotalProducts = document.getElementById('stat-total-products');
const statTotalValue = document.getElementById('stat-total-value');
const statLowStock = document.getElementById('stat-low-stock');


document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    updateStats();
});

function renderProducts(productsToDisplay) {
    productTableBody.innerHTML = '';

    productsToDisplay.forEach(product => {
        const tr = document.createElement('tr');
        

        let statusBadge = '<span class="badge in-stock">En Stock</span>';
        if (product.quantity == 0) {
            statusBadge = '<span class="badge out-of-stock">Rupture</span>';
        } else if (product.quantity < 5) {
            statusBadge = '<span class="badge low-stock">Stock Bas</span>';
        }

        tr.innerHTML = `
            <td><strong>${product.name}</strong></td>
            <td>${product.category}</td>
            <td>${parseFloat(product.price).toFixed(3)} DT</td>
            <td>${product.quantity}</td>
            <td>${statusBadge}</td>
            <td>
                <button class="btn-edit" onclick="editProduct('${product.id}')">Modifier</button>
                <button class="btn-delete" onclick="deleteProduct('${product.id}')">Supprimer</button>
            </td>
        `;
        productTableBody.appendChild(tr);
    });
}

function updateStats() {
    statTotalProducts.textContent = products.length;

    const totalValue = products.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
    statTotalValue.textContent = `${totalValue.toFixed(3)} DT`;

    const lowStockCount = products.filter(p => p.quantity < 5 && p.quantity > 0).length;
    statLowStock.textContent = lowStockCount;

    localStorage.setItem('stock_products', JSON.stringify(products));
}

productForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const id = document.getElementById('product-id').value;
    const name = document.getElementById('product-name').value;
    const category = document.getElementById('product-category').value;
    const price = parseFloat(document.getElementById('product-price').value);
    const quantity = parseInt(document.getElementById('product-quantity').value);

    if (id) {
        // حالة التعديل (Update)
        const index = products.findIndex(p => p.id === id);
        products[index] = { id, name, category, price, quantity };
    } else {
        const newProduct = {
            id: Date.now().toString(),
            name, category, price, quantity
        };
        products.push(newProduct);
    }

    productForm.reset();
    closeModalWindow();
    renderProducts(products);
    updateStats();
});

function deleteProduct(id) {
    if (confirm('Voulez-vous vraiment supprimer ce produit ?')) {
        products = products.filter(p => p.id !== id);
        filterAndSearch();
        updateStats();
    }
}

function editProduct(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        document.getElementById('product-id').value = product.id;
        document.getElementById('product-name').value = product.name;
        document.getElementById('product-category').value = product.category;
        document.getElementById('product-price').value = product.price;
        document.getElementById('product-quantity').value = product.quantity;

        document.getElementById('modal-title').textContent = "Modifier le Produit";
        productModal.style.display = 'block';
    }
}

function filterAndSearch() {
    const searchValue = searchInput.value.toLowerCase();
    const categoryValue = filterCategory.value;

    const filtered = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchValue);
        const matchesCategory = categoryValue === 'all' || product.category === categoryValue;
        return matchesSearch && matchesCategory;
    });

    renderProducts(filtered);
}

searchInput.addEventListener('input', filterAndSearch);
filterCategory.addEventListener('change', filterAndSearch);

btnOpenModal.addEventListener('click', () => {
    document.getElementById('modal-title').textContent = "Ajouter un Produit";
    document.getElementById('product-id').value = '';
    productForm.reset();
    productModal.style.display = 'block';
});

btnCloseModal.addEventListener('click', closeModalWindow);
window.addEventListener('click', (e) => { if (e.target === productModal) closeModalWindow(); });

function closeModalWindow() { productModal.style.display = 'none'; }
