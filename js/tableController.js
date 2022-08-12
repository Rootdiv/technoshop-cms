import { getGoods, deleteProduct } from './serviceAPI.js';
import { tableRender } from './tableView.js';
import { modalController } from './modalController.js';
import { tableGoods } from './elems.js';

export const tableController = async () => {
  modalController({
    delegation: {
      parent: tableGoods,
      target: '.table-goods-item',
      targetExclude: '.btn-delete',
    },
  });

  tableGoods.addEventListener('click', async ({ target }) => {
    const btnDelete = target.closest('.btn-delete');
    if (btnDelete) {
      const row = btnDelete.closest('.table-goods-item');
      const isDel = await deleteProduct(row.dataset.id);
      if (isDel) {
        row.remove();
      }
    }
  });

  const goods = await getGoods();
  tableRender(goods);
};
