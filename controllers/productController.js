import { productService } from '../services';

const getProductList = async (req, res) => {
  return res.status(200).send(await productService.getProductList());
};

const getProductDetail = async (req, res) => {
  const id = req.params.id;
  return res.status(200).send(await productService.getProductDetail(id));
};

const getCategory = async (req, res) => {
  return res.status(200).send(await productService.getCategory());
};

export default { getCategory, getProductDetail, getProductList };
