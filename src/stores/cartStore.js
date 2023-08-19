import { defineStore } from "pinia";
import productStore from '../stores/productStore.js';

export default defineStore('cartStore', {
  state: () => ({   
    cart: [],
  }),
  actions: {
    addToCart(productId, qty = 1) {
      const repeat = this.cart.find((el) => el.productId === productId);
      if(repeat) {
        repeat.qty += qty;
      } else {
        this.cart.push({
          id: new Date().getTime(),
          productId,
          qty
        })
      }
      console.log(this.cart)
    },
    removeCartItem(id) {
      const index = this.cart.findIndex((el) => el.id === id);
      this.cart.splice(index, 1);
    },
    setCartQty(productId, value) {
      const repeat = this.cart.find((el) => el.productId === productId);
      repeat.qty = value * 1;
    }
  },
  getters: {
    cartList: ({cart}) => {
      const { products } = productStore();
      const carts = cart.map((el) => {
        const product = products.find(product => product.id === el.productId)
        return {
          ...el,
          product,
          subTotal: product.price * el.qty
        }
      })
      const total = carts.reduce((a, b) => a + b.subTotal, 0)
      return {
        carts,
        total
      }
    }
  }
})