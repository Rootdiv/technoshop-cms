import { tableGoods } from './elems.js';
import { currencyFormatRUB } from './utils.js';

export const renderRow = ({ id, title, category, price }) => {
  const rowGoods = document.createElement('tr');
  rowGoods.className = 'table-row table-goods-item';
  rowGoods.dataset.id = id;
  const tdId = document.createElement('td');
  tdId.textContent = id;
  const tdTitle = document.createElement('td');
  tdTitle.textContent = title;
  const tdCategory = document.createElement('td');
  tdCategory.textContent = category;
  const tdPrice = document.createElement('td');
  tdPrice.textContent = currencyFormatRUB(price);
  const tdButton = document.createElement('td');
  tdButton.className = 'd-flex';
  const button = document.createElement('button');
  button.className = 'btn-table btn-delete';
  button.dataset.id = id;
  button.insertAdjacentHTML(
    'afterbegin',
    `<svg width="30" height="30">
      <use href="#delete" />
    </svg>`,
  );
  tdButton.append(button);
  rowGoods.append(tdId, tdTitle, tdCategory, tdPrice, tdButton);
  tableGoods.append(rowGoods);
};

export const tableRender = goods => {
  tableGoods.textContent = '';
  goods.forEach(renderRow);
};
