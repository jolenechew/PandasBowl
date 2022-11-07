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
    <button class="btn btn-secondary" @click="submit">Pay now!</button>
  </div>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
export default {
  components: {
    StripeCheckout,
  },
  data () {
    this.publishableKey = "pk_test_51Lx8C0I9sZZbC79llCOMS8oUnvK3F8tDbeaXJVWUZVGj6WzshAh5q6spUKRgvOKwpAXJupLKS0fc5D7p5E4hnwth00biB97Vgk";
    return {
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
    submit () {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
};
</script>