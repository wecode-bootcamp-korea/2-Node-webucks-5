import Dao from '../models';

const productList = async () => {
  return await Dao.productDao.productsList()
};

const productDetail = async () => {
  return await Dao.productDao.productDetail()
};

const productDetailById = async (id) => {
  return await Dao.productDao.productDetailById(id)
};

const createProduct = async () => {
  return await Dao.productDao.createProduct()
};

export default {
  productList,
  productDetail,
  productDetailById,
  createProduct
};