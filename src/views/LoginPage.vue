<template>
  <div class="content Forms">
    <div class="blob-container">
      <div class="blob blob1"></div>
      <div class="blob blob2"></div>
      <div class="blob blob3"></div>
    </div>
    
    <div class="content-area">   
      <div class="container login-forms form-container">
        <form class="form login-form" :class="{ active: currentForm === 'login' }" @submit.prevent="handleLogin">
          <h1>Welcome Back</h1>
          <div class="flex-column">
            <label>Email </label>
          </div>
          <div class="inputForm">
            <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg">
              <g id="Layer_3" data-name="Layer 3">
                <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
              </g>
            </svg>
            <input type="text" class="input" placeholder="Enter your Email" v-model="loginForm.email">
          </div>

          <div class="flex-column">
            <label>Password </label>
          </div>
          <div class="inputForm">
            <svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
              <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
            </svg>
            <input type="password" class="input" placeholder="Enter your Password" v-model="loginForm.password">
          </div>

          <div class="flex-row">
            <div>
              <label class="check check-dark"> <input type="checkbox" /> Remember me </label>
            </div>
            <span class="span" @click="currentForm = 'forgot'">Forgot password?</span>
          </div>
          <button class="button-submit" type="submit">Log In</button>
          <p class="p">Don't have an account? <span class="span" @click="currentForm = 'signup'">Sign Up</span></p>
          <span class="divider divider-text divider-light">OR</span>

          <div class="social-row">
            <a href="#"><img src="@/assets/images/google-icon-removebg-preview.png" alt="Google"></a>
            <a href="#"><img src="@/assets/images/facebook-logo.jpg" alt="Facebook"></a>
          </div>
        </form>
        
        <form class="form signup-form" :class="{ active: currentForm === 'signup' }" @submit.prevent="handleSignup">
          <h1>Sign Up</h1>
          <div class="flex-column">
            <label>Username </label>
          </div>
          <div class="inputForm">
            <i class="bx bxs-user"></i>
            <input type="text" class="input" placeholder="Enter Username" v-model="signupForm.username">
          </div>
          <div class="flex-column">
            <label>Email </label>
          </div>
          <div class="inputForm">
            <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg">
              <g id="Layer_3" data-name="Layer 3">
                <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
              </g>
            </svg>
            <input type="text" class="input" placeholder="Enter your Email" v-model="signupForm.email">
          </div>

          <div class="flex-column">
            <label>Password </label>
          </div>
          <div class="inputForm">
            <svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
              <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
            </svg>
            <input type="password" class="input" placeholder="Enter your Password" v-model="signupForm.password">
          </div>

          <div class="flex-column">
            <label>Confirm Password </label>
          </div>
          <div class="inputForm">
            <svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
              <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
            </svg>
            <input type="password" class="input" placeholder="Confirm Password" v-model="signupForm.confirmPassword">
          </div>

          <button class="button-submit" type="submit">Sign Up</button>
          <p class="p">Already have an account? <span class="span" @click="currentForm = 'login'">Login</span></p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()

const currentForm = ref('login')

const loginForm = ref({
  email: '',
  password: ''
})

const signupForm = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
})

function handleLogin() {
  userStore.login({
    email: loginForm.value.email,
    name: loginForm.value.email.split('@')[0]
  })
  router.push('/')
}

function handleSignup() {
  if (signupForm.value.password !== signupForm.value.confirmPassword) {
    alert('Passwords do not match!')
    return
  }
  userStore.login({
    email: signupForm.value.email,
    name: signupForm.value.username
  })
  router.push('/')
}
</script>

<style scoped>
.blob-container {
  position: static;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

.blob {
  position: absolute;
  border-radius: 50%;
  opacity: 0.7;
  animation: float 5s infinite ease-in-out;
}

.blob1 {
  background: #10182f;
  width: 200px;
  height: 200px;
  top: 20%;
  left: 30%;
  animation-delay: 0s;
}

.blob2 {
  background: black;
  width: 300px;
  height: 300px;
  top: 60%;
  left: 50%;
  animation-delay: 1s;
}

.blob3 {
  background: rgb(163, 171, 196);
  width: 250px;
  height: 250px;
  top: 80%;
  left: 20%;
  animation-delay: 2s;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px);
  }
  100% {
    transform: translateY(0);
  }
}

.form {
  display: none;
}

.form.active {
  display: block;
}
</style>
