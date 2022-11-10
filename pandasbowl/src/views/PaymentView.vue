<template>
  <div>
    <stripe-checkout
      ref="checkoutRef"
      mode="payment"
      :pk="publishableKey"
      :line-items="lineItems"
      :success-url="successURL"
      :cancel-url="cancelURL"
      @loading="v => loading = v"
    />
    <!--The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images. -->
    <div class="flex items-center justify-center">
        <div class="m-auto">
            <img src="../assets/pandaEat.jpg" style="width:500px;height:500px;">
            <button class="btn btn-secondary w-full" @click="submit">Pay now!</button>
        </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";
import { StripeCheckout } from '@vue-stripe/vue-stripe';
import {useRoute} from "vue-router";
export default {
  components: {
    StripeCheckout,
  },
  async mounted(){
    const route = useRoute();
    this.foodId = route.params.id;

    await axios.post('transactions', null,
      {
        headers: {
          'Authorization': "Bearer " + localStorage.getItem("token")
        },
        params:{
          foodId: this.foodId
        }
      })
    .then(() => {
      console.log("success");
    })
    .catch((error) => {
      console.log(error.message);
    });
  },
  data () {
    this.publishableKey = "pk_test_51Lx8C0I9sZZbC79llCOMS8oUnvK3F8tDbeaXJVWUZVGj6WzshAh5q6spUKRgvOKwpAXJupLKS0fc5D7p5E4hnwth00biB97Vgk";
    return {
      foodName: "",
      loading: false,
      lineItems: [
        {
          price: 'price_1Lx9oII9sZZbC79lvJSmPtut', // The id of the one-time price you created in your Stripe dashboard
          quantity: 1,
        },
      ],
      successURL: `${window.location.origin}/myOrders`,
      cancelURL: `${window.location.origin}/failure`,
    };
  },
  methods: {
    async submit () {
       await axios.get('fooditems/fooditem', { params: { foodId: this.foodId } });
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
};
</script>