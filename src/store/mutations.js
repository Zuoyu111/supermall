import {
  ADD_COUNTER,
  ADD_TO_CART
} from "./mutations-type";


export default {
  [ADD_COUNTER](state,payload) {
    payload.count ++
  },
  [ADD_TO_CART](state,payload) {
    state.cartList.push(payload)
  }
  //mutations唯一的目的就是修改state中的状态
  //mutations中的每个方法尽可能完成的事情比较单一一点
  // addCart(state,payload) {
  //   //payload新添加的商品
  //   let oldProduct = null;
  //   for(let item of state.cartList) {
  //     if(item.iid === payload.iid)  {
  //       oldProduct = item
  //     }
  //   }
  //
  //   //2.判断oldProduct
  //   if(oldProduct) {
  //     oldProduct.count += 1
  //   }else {
  //     payload.count = 1
  //     state.cartList.push(payload)
  //   }
  // }
}
