import { productDao } from '../models';

const productList = async () => {
  return await productDao.productsList();
};

const productsDetail = async () => {
  return await productDao.productsDetail();
};

const productDetailById = async (id) => {
  return await productDao.productDetailById(id);
};

export default {
  productList,
  productsDetail,
  productDetailById,
};