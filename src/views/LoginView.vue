<template>
  <div class="login-page">
    <div class="auth-container">
      <div class="auth-card">
        <div class="auth-header">
          <h1 class="auth-title">{{ isLogin ? "Login" : "Register" }}</h1>
          <p class="auth-subtitle">
            {{
              isLogin
                ? "Welcome back! Please login to your account."
                : "Create a new account to get started."
            }}
          </p>
        </div>

        <form class="auth-form" @submit.prevent="handleSubmit">
          <div v-if="!isLogin" class="form-group">
            <label for="name">Full Name</label>
            <input
              type="text"
              id="name"
              v-model="formData.name"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              v-model="formData.email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              v-model="formData.password"
              placeholder="Enter your password"
              required
            />
          </div>

          <div v-if="!isLogin" class="form-group">
            <label for="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              v-model="formData.confirmPassword"
              placeholder="Confirm your password"
              required
            />
          </div>

          <div v-if="isLogin" class="form-options">
            <div class="remember-me">
              <input
                type="checkbox"
                id="remember"
                v-model="formData.remember"
              />
              <label for="remember">Remember me</label>
            </div>
            <a href="#" class="forgot-password">Forgot Password?</a>
          </div>

          <div class="form-error" v-if="errorMessage">
            {{ errorMessage }}
          </div>

          <button type="submit" class="btn btn-primary btn-block">
            {{ isLogin ? "Login" : "Register" }}
          </button>
        </form>

        <div class="auth-footer">
          <p>
            {{
              isLogin ? "Don't have an account?" : "Already have an account?"
            }}
            <a href="#" @click.prevent="toggleAuthMode">
              {{ isLogin ? "Register" : "Login" }}
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isLogin = ref(true);
const errorMessage = ref("");

const formData = reactive({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  remember: false,
});

const toggleAuthMode = () => {
  isLogin.value = !isLogin.value;
  errorMessage.value = "";
};

const handleSubmit = () => {
  // 这里会调用后端API进行实际的登录/注册操作
  // 目前仅作为示例，使用本地存储模拟登录状态

  if (!isLogin.value && formData.password !== formData.confirmPassword) {
    errorMessage.value = "Passwords do not match";
    return;
  }

  try {
    // 模拟API调用
    setTimeout(() => {
      // 成功登录后设置认证状态
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userEmail", formData.email);

      // 跳转到仪表板页面
      router.push("/dashboard");
    }, 1000);
  } catch (error) {
    errorMessage.value = "Authentication failed. Please try again.";
  }
};
</script>

<style scoped>
.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 200px);
  padding: 2rem 0;
}

.auth-container {
  width: 100%;
  max-width: 500px;
  padding: 0 1rem;
}

.auth-card {
  background-color: var(--light-color);
  border-radius: 8px;
  box-shadow: var(--card-shadow);
  padding: 2rem;
}

.auth-header {
  text-align: center;
  margin-bottom: 2rem;
}

.auth-title {
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.auth-subtitle {
  color: #666;
}

.auth-form {
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-group input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus {
  border-color: var(--primary-color);
  outline: none;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.remember-me {
  display: flex;
  align-items: center;
}

.remember-me input {
  margin-right: 0.5rem;
}

.forgot-password {
  color: var(--primary-color);
  text-decoration: none;
}

.forgot-password:hover {
  text-decoration: underline;
}

.form-error {
  color: #f44336;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.btn-block {
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
}

.auth-footer {
  text-align: center;
}

.auth-footer a {
  color: var(--primary-color);
  text-decoration: none;
}

.auth-footer a:hover {
  text-decoration: underline;
}
</style>
