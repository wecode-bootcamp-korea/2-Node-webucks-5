import { productDao } from '../models';

const productList = async () => {
  return await productDao.productsList();
};

const productsDetail = async () => {
  return await productDao.productsDetail();
};

const productDetailById = async (id) => {
  if(id == undefined) {
    const err = new ERROR ("NOT_FOUND")
    err.statusCode = 404;
    err.message = "NOT_FOUND"
    throw err
  }
  return await productDao.productDetailById(id);
};

export default {
  productList,
  productsDetail,
  productDetailById,
};