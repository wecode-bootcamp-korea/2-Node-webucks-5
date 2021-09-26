import productDao from "../Models/productDao";

const getProductList = async () => {
  return await productDao.getProductList();
};

const getProductDetail = async (id) => {
  return await productDao.getProductDetail(id);
};

const getCategory = async () => {
  return await productDao.getCategory();
};

export default { getCategory, getProductDetail, getProductList };
