<template>
  <div class="content-area">
    <div class="breadcrumbs-container">
      <h4>Manage My Account</h4>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/" class="breadcrumb-link">Home</router-link></li>
        <li class="breadcrumb-item active">My Account</li>
      </ol>
    </div>
    
    <div class="container account-container">
      <div class="account-sidebar">
        <h6>My Account</h6>
        <ul>
          <li><router-link to="/account">Profile Information</router-link></li>
          <li><router-link to="/my-orders">My Orders</router-link></li>
          <li><router-link to="/wishlist">My Wishlist</router-link></li>
          <li><router-link to="/my-reviews">My Reviews</router-link></li>
        </ul>
      </div>
      
      <div class="account-content">
        <h4>Edit Profile</h4>
        <form @submit.prevent="updateProfile" class="profile-form">
          <div class="form-row">
            <div class="field">
              <label class="field-label">First Name</label>
              <input type="text" class="field-text" v-model="profileForm.firstName" placeholder="First Name" />
            </div>
            <div class="field">
              <label class="field-label">Last Name</label>
              <input type="text" class="field-text" v-model="profileForm.lastName" placeholder="Last Name" />
            </div>
          </div>
          
          <div class="form-row">
            <div class="field">
              <label class="field-label">Email</label>
              <input type="email" class="field-text" v-model="profileForm.email" placeholder="Email" />
            </div>
            <div class="field">
              <label class="field-label">Phone</label>
              <input type="tel" class="field-text" v-model="profileForm.phone" placeholder="Phone Number" />
            </div>
          </div>
          
          <div class="field">
            <label class="field-label">Address</label>
            <textarea class="field-textarea" v-model="profileForm.address" placeholder="Address" rows="4"></textarea>
          </div>
          
          <button type="submit" class="btn btn-primary">Save Changes</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

const profileForm = ref({
  firstName: '',
  lastName: '',
  email: userStore.user?.email || '',
  phone: '',
  address: ''
})

function updateProfile() {
  userStore.updateProfile(profileForm.value)
  alert('Profile updated successfully!')
}
</script>

<style scoped>
.account-container {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 30px;
  padding: 30px 0;
}

.account-sidebar {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
}

.account-sidebar h6 {
  margin-bottom: 15px;
  font-weight: 600;
}

.account-sidebar ul {
  list-style: none;
  padding: 0;
}

.account-sidebar ul li {
  margin-bottom: 10px;
}

.account-sidebar ul li a {
  color: #666;
  text-decoration: none;
  transition: color 0.3s;
}

.account-sidebar ul li a:hover,
.account-sidebar ul li a.router-link-active {
  color: #ff7f00;
}

.account-content {
  background: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.profile-form .form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.profile-form .field {
  margin-bottom: 20px;
}

.field-label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
}

.field-text,
.field-textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}
</style>
