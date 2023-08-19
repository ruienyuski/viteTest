<template>
  <div class="container-fluid bg-light my-4">
    <div class="py-4" v-if="!cartList.carts.length">購物車沒有任何品項</div>
    <table v-else class="table align-middle">
      <tbody>
        <tr v-for="item in cartList.carts" :key="item.id">
          <th width="100">
            <a href="#" class="text-dark" @click.prevent="removeCartItem(item.id)"
              ><i class="fas fa-times"></i
            ></a>
          </th>
          <th width="100">
            <img class="fluid-img table-image" :src="item.product.imageUrl" alt="" />
          </th>
          <th>{{ item.product.title }}</th>
          <th width="200">
            <select
              class="form-select"
              :value="item.qty"
              @change="
                (e) => {
                  setCartQty(item.productId, e.target.value)
                }
              "
            >
              <option :value="i" v-for="i in 20" :key="i">{{ i }}</option>
            </select>
          </th>
          <th width="200" class="text-end">$ {{ item.subTotal }}</th>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="5" class="text-end">總金額 NT$ {{ cartList.total }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
<script>
import { mapState, mapActions } from "pinia";
import cartStore from '../stores/cartStore.js'

export default {
  computed: {
    ...mapState(cartStore, ['cartList'])
  },
  methods: {
    ...mapActions(cartStore, ['removeCartItem', 'setCartQty'])
  }
}
</script>