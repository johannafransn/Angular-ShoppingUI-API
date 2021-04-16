//Class models for the API reference
export class Product {

  product_id: string;
  name: string;
  price: number;
  image: string;
  description: string;


  constructor(product_id = '', name = '', price = 0, image = '', description = '')
  {
    this.product_id = product_id;
    this.name = name;
    this.price = price;
    this.image = image;
    this.description = description;
  }
}

export class ProductObject {

  products: Product[];

  constructor(products = [])
  {
    this.products = products;

  }
}
