import { tableGoods } from './elems.js';
import { currencyFormatRUB } from './utils.js';

const fillingRow = (rowGoods, { id, title, category, price }) => {
  rowGoods.textContent = '';
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
  button.insertAdjacentHTML(
    'afterbegin',
    `<svg width="30" height="30">
      <use href="#delete" />
    </svg>`,
  );
  tdButton.append(button);
  rowGoods.append(tdId, tdTitle, tdCategory, tdPrice, tdButton);
  return rowGoods;
};

export const renderRow = data => {
  const rowGoods = document.createElement('tr');
  rowGoods.className = 'table-row table-goods-item';
  rowGoods.dataset.id = data.id;

  tableGoods.append(fillingRow(rowGoods, data));
};

export const editRow = data => {
  const goodsRow = document.querySelector(`[data-id="${data.id}"]`);
  fillingRow(goodsRow, data);
};

export const tableRender = goods => {
  tableGoods.textContent = '';
  goods.forEach(renderRow);
};
