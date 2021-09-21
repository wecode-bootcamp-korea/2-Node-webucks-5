import Service from '../services';

const productList = async (req, res) => {
  const productList = await Service.productService.productList()
  res.json(productList);
};

const productDetail = async (req, res) => {
  const productDetail = await Service.productService.productDetail()
  res.json(productDetail);
};

const productDetailById = async (req, res) => {
  const id = req.params.id
  const productDetailById = await Service.productService.productDetailById(id)
  res.json(productDetailById);
};

const createProduct = async (req, res) => {
  const createProduct = await Service.productService.createProduct()
  res.json(createProduct);
};

export default {
  productList,
  productDetail,
  productDetailById,
  createProduct
};