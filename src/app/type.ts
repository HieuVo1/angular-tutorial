import "reflect-metadata";
import { container, Lifecycle, scoped, singleton } from "tsyringe";

class ProductModel {
  sku: string;
  name: string;
  price: number;
}

interface CartItem {
  product: ProductModel;
  quantity: number;
}

@singleton()
class CartService {
  cartServiceId = Math.random();
  selectedProducts: CartItem[] = [];
  calculateTotal(): number {
    return this.selectedProducts.reduce(
      (total, item) => item.product.price * item.quantity + total,
      0
    );
  }
  addToCart(): void {
    // logic here
  }
}

@scoped(Lifecycle.ResolutionScoped)
class ProductComponent {
  productComponentId = Math.random();
  constructor(public cartService: CartService) {
  }
}

function testContainer() {
  console.log(container.resolve(ProductComponent));
}
