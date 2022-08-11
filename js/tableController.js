import { getGoods, deleteProduct } from './serviceAPI.js';
import { tableRender } from './tableView.js';
import { modalController } from './modalController.js';
import { tableGoods } from './elems.js';

export const deleteGoods = async rowGoods => {
  deleteProduct(rowGoods.dataset.id);
  rowGoods.remove();
};

export const tableController = async () => {
  modalController({
    delegation: {
      parent: tableGoods,
      target: '.table-goods-item',
      targetExclude: '.btn-delete',
    },
  });
  const goods = await getGoods();
  tableRender(goods);
};
