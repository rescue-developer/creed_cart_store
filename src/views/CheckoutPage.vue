<template>
  <div class="content-area">
    <div class="breadcrumbs-container">
      <h4>Checkout Page</h4>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/" class="breadcrumb-link">Home</router-link></li>
        <li class="breadcrumb-item"><router-link to="/cart" class="breadcrumb-link">Cart</router-link></li>
        <li class="breadcrumb-item active">Checkout Page</li>
      </ol>
    </div>
    
    <div class="container container-checkout">
      <div class="shipping-address-form">
        <form class="add-ship-address" @submit.prevent="handleCheckout">
          <h4>Add Shipping Address</h4>
          <hr>
          <div class="inputs">
            <div class="form-row">
              <div class="field">
                <input style="font-size: 16px; font-family: sans-serif;" type="text" class="field-text" placeholder="First Name" v-model="form.firstName" />
              </div>
              <div class="field">
                <input style="font-size: 16px; font-family: sans-serif;" type="text" class="field-text" placeholder="Last Name" v-model="form.lastName" />
              </div>
            </div>
            <div class="form-row">
              <div class="field">
                <input style="font-size: 16px; font-family: sans-serif;" type="email" class="field-text" placeholder="Enter Email" v-model="form.email" />
              </div>
              <div class="field">
                <input style="font-size: 16px; font-family: sans-serif;" type="tel" class="field-text" placeholder="Enter Phone Number" v-model="form.phone" />
              </div>
            </div>
            <div class="form-row">
              <div class="field">
                <select style="font-size: 14px; font-family: sans-serif;" class="field-select" v-model="form.city">
                  <option value="">State / City</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Karachi">Karachi</option>
                </select>
              </div>
              <div class="field">
                <input style="font-size: 14px; font-family: sans-serif;" type="text" class="field-text" placeholder="ZIP Code" v-model="form.zipCode" />
              </div>
            </div>
            <div class="field text-area">
              <textarea class="field-textarea" rows="5" placeholder="Enter your Address..." v-model="form.address"></textarea>
            </div>
            <div class="save-btn">
              <button type="button" class="btn btn-info btn-pill">Save</button>
            </div>
          </div>
          
          <h4>Select Payment Methods</h4>
          <hr>
          <div class="payment-container"> 
            <label class="check check-info check-radio"> 
              <input type="radio" name="payment" value="cash" v-model="paymentMethod"/> 
              Cash on Delivery 
            </label>
            <label class="check check-info check-radio"> 
              <input type="radio" name="payment" value="credit" v-model="paymentMethod"/> 
              Credit Card 
            </label>
            <label class="check check-info check-radio"> 
              <input type="radio" name="payment" value="wallet" v-model="paymentMethod"/> 
              Wallet 
            </label>
          </div>
          
          <div v-if="paymentMethod === 'credit'" class="hidden-fields">
            <div class="grp">
              <input type="text" placeholder="Name on card" />
              <input type="number" placeholder="Card number" />
            </div>
            <div class="grp">
              <input type="text" placeholder="Expiry date (MM/YY)" />
              <input type="number" placeholder="CVC" />
            </div>
            <button type="submit" class="btn btn-info btn-pill">Make Payment</button>
          </div>
          
          <div v-if="paymentMethod === 'wallet'" class="hidden-fields">
            <div class="row">
              <div class="col-6" style="width: 300px;">
                <div class="card balance-card" style="background-image: url('https://img.freepik.com/premium-vector/green-light-line-dark-grey-geometric-background_33869-1258.jpg');background-repeat: no-repeat;background-size: cover;">
                  <div class="card-head">Available Balance</div>
                  <div class="card-body d-flex" style="gap: 10px;">
                    <span style="font-size: 20px;">Rs</span>
                    <div class="card-title" style="color: white;font-size: 35px;font-family: emoji;">19,546.89</div>
                  </div>
                  <div class="card-foot">
                    <button type="button" class="btn btn-dark">Add Balance</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      
      <div class="checkout-form">
        <div class="card card-checkout-summary">
          <div class="card-head">
            <div class="shipping-address">
              <h6>Select Shipping Address</h6>
              <div class="media">
                <div class="media-head">
                  <i class="bx bx-map"></i>
                </div>
                <div class="media-body">
                  <div class="card-subtitle">{{ form.firstName }} {{ form.lastName }}</div>
                  <div class="card-subtitle">{{ form.phone }}</div>
                  <div class="card-desc text-ellipsis text-ellipsis-2">{{ form.address }}</div>
                </div>
                <div class="media-foot">
                  <label class="check check-info">
                    <input type="checkbox" class="shipping-checkbox" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <hr>
          
          <div class="card-body">
            <h6>Summary</h6>
            <div v-for="item in cartStore.items" :key="item.id" class="media">
              <div class="media-head">
                <img :src="item.image" alt="">
              </div>
              <div class="media-body">
                <div class="text-ellipsis text-ellipsis-2">{{ item.name }}</div>
                <div class="media-foot">
                  <div class="qty">x {{ item.quantity }}</div>
                  <div class="card-subtitle">Rs {{ item.price * item.quantity }}</div>
                </div>
              </div>
            </div>
          </div>
          <hr>
          
          <div class="card-foot">
            <div class="card-subtitle">Subtotal<span>Rs {{ cartStore.cartTotal }}</span></div>
            <div class="card-subtitle">Discount<span>Rs 0</span></div>
            <div class="card-subtitle">Shipping<span>Rs 10</span></div>
            <div class="card-title">Total<span>Rs {{ cartStore.cartTotal + 10 }}</span></div>
            <button class="btn btn-info btn-block btn-pill" @click="handleCheckout">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'

const router = useRouter()
const cartStore = useCartStore()

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  city: '',
  zipCode: '',
  address: ''
})

const paymentMethod = ref('cash')

function handleCheckout() {
  alert('Order placed successfully!')
  cartStore.clearCart()
  router.push('/')
}
</script>
