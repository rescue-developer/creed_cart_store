<template>
  <div class="content-area">
    <div class="breadcrumbs-container">
      <h4>My Orders</h4>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/" class="breadcrumb-link">Home</router-link></li>
        <li class="breadcrumb-item active">My Orders</li>
      </ol>
    </div>
    
    <div class="container">
      <div class="orders-container">
        <div v-if="orders.length === 0" class="empty-orders">
          <p>You have no orders yet</p>
          <router-link to="/products" class="btn btn-primary">Start Shopping</router-link>
        </div>
        
        <div v-else class="orders-list">
          <div v-for="order in orders" :key="order.id" class="order-card card">
            <div class="order-header">
              <div>
                <strong>Order #{{ order.id }}</strong>
                <span class="order-date">{{ order.date }}</span>
              </div>
              <span class="order-status" :class="order.status">{{ order.status }}</span>
            </div>
            
            <div class="order-items">
              <div v-for="item in order.items" :key="item.id" class="order-item">
                <img :src="item.image" :alt="item.name">
                <div class="item-details">
                  <h6>{{ item.name }}</h6>
                  <p>Quantity: {{ item.quantity }}</p>
                </div>
                <div class="item-price">
                  Rs {{ item.price * item.quantity }}
                </div>
              </div>
            </div>
            
            <div class="order-footer">
              <div class="order-total">Total: <strong>Rs {{ order.total }}</strong></div>
              <button class="btn btn-sm btn-primary">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const orders = ref([
  {
    id: '12345',
    date: '2024-01-15',
    status: 'Delivered',
    total: 1500,
    items: [
      {
        id: 1,
        name: 'Stylish T-Shirt',
        quantity: 2,
        price: 295,
        image: '/src/assets/web-assets/assets/images/t-shirt_product.jpg'
      }
    ]
  }
])
</script>

<style scoped>
.orders-container {
  padding: 30px 0;
}

.empty-orders {
  text-align: center;
  padding: 50px;
}

.orders-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.order-card {
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.order-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.order-date {
  margin-left: 15px;
  color: #666;
  font-size: 14px;
}

.order-status {
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}

.order-status.Delivered {
  background: #d4edda;
  color: #155724;
}

.order-status.Pending {
  background: #fff3cd;
  color: #856404;
}

.order-items {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
}

.order-item {
  display: flex;
  align-items: center;
  gap: 15px;
}

.order-item img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
}

.item-details {
  flex: 1;
}

.item-details h6 {
  margin-bottom: 5px;
}

.item-details p {
  color: #666;
  font-size: 14px;
}

.item-price {
  font-weight: 600;
  font-size: 16px;
}

.order-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  border-top: 1px solid #eee;
}

.order-total {
  font-size: 18px;
}
</style>
