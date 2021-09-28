import productService from '../services/productService';

const getProductList = async (req, res) => {
  res.send(await productService.getProductList());
};

const getProductDetail = async (req, res) => {
  const id = req.params.id;
  return res.send(await productService.getProductDetail(id));
};

const getCategory = async (req, res) => {
  return res.send(await productService.getCategory());
};

export default { getCategory, getProductDetail, getProductList };
