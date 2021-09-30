import { productService } from '../services';

const productList = async (req, res) => {
  try{
    const productList = await productService.productList();
    res.json(productList);
  }
  catch(err) {
    console.error(err);
  };
};

const productsDetail = async (req, res) => {
  try{
    const productsDetail = await productService.productsDetail();
    res.json(productsDetail);
  }
  catch(err) {
    console.error(err);
  };
};

const productDetailById = async (req, res) => {
  try{
    const id = req.params.id;
    const productDetailById = await productService.productDetailById(id);
    res.json(productDetailById);
  }
  catch(err) {
    const {statusCode, message} = err
    res.status(statusCode || 500).json({
      message
    })
  };
};

export default {
  productList,
  productsDetail,
  productDetailById,
};