export const apiUrl: string = 'https://localhost:7140/api/';

export const url = {
  // Company
  GetCompany: 'Company/GetCompany',
  UpdateCompany: 'Company/UpdateCompany',

  // Service Category
  CategoryService: 'CategoryService',
  GetAllCategory: 'CategoryService/GetAllCategory',
  GetCategoryById: 'CategoryService/GetCategory',
  UpdateCategory: 'CategoryService/UpdateCategory',
  DeleteCategory: 'CategoryService/DeleteCategory',

  // Service
  CreateService: 'Service',
  GetAllService: 'Service/GetAllService',
  GetServiceById: 'Service/GetService',
  UpdateService: 'Service/UpdateService',
  DeleteService: 'Service/DeleteService',

  // Product Category
  CategoryProduct: 'CategoryProduct/CategoryProduct',
  GetAllCategoryProduct: 'CategoryProduct/GetAllCategory',
  GetCategorProductyById: 'CategoryProduct/GetCategory',
  UpdateCategoryProduct: 'CategoryProduct/UpdateCategory',
  DeleteCategoryProduct: 'CategoryProduct/DeleteCategory',

  //Image
  ImageDelete: 'Image/delete',

  //Product
  AddProduct:'Products/AddProduct',
  GetAllProduct: 'Products/GetAllProduct',
  GetProductById: 'Products/GetProductById',
  UpdateProduct: 'Products/UpdateProduct',
  DeleteProduct: 'Products/DeleteProduct',
};
