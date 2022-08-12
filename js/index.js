import { modalBtn } from './elems.js';
import { formController } from './formController.js';
import { modalController } from './modalController.js';
import { previewController } from './previewController.js';
import { tableController } from './tableController.js';
import { sortController } from './sortController.js';

const init = () => {
  modalController({ modalBtn });
  previewController();
  tableController();
  formController();
  sortController();
};

init();
