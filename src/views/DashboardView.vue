<template>
  <div class="dashboard">
    <div class="page-header">
      <h1 class="page-title">Dashboard</h1>
      <p class="page-description">Welcome back, {{ userEmail }}</p>
    </div>

    <div class="dashboard-grid">
      <div class="section dashboard-card">
        <h2 class="card-title">Profile Overview</h2>
        <div class="profile-content">
          <div class="profile-avatar">
            <img src="/images/avatar.png" alt="Profile avatar" />
          </div>
          <div class="profile-info">
            <h3>{{ userEmail }}</h3>
            <p>Member since: January 2023</p>
            <button class="btn btn-secondary">Edit Profile</button>
          </div>
        </div>
      </div>

      <div class="section dashboard-card">
        <h2 class="card-title">Statistics</h2>
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-value">12</div>
            <div class="stat-label">Projects</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">148</div>
            <div class="stat-label">Commits</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">8</div>
            <div class="stat-label">Skills</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">24</div>
            <div class="stat-label">Contacts</div>
          </div>
        </div>
      </div>

      <div class="section dashboard-card">
        <h2 class="card-title">Recent Activities</h2>
        <ul class="activity-list">
          <li class="activity-item" v-for="(activity, index) in recentActivities" :key="index">
            <div class="activity-icon" :class="activity.type"></div>
            <div class="activity-content">
              <div class="activity-title">{{ activity.title }}</div>
              <div class="activity-time">{{ activity.time }}</div>
            </div>
          </li>
        </ul>
      </div>

      <div class="section dashboard-card">
        <h2 class="card-title">Quick Actions</h2>
        <div class="actions-grid">
          <button class="action-btn">
            <span class="action-icon">✏️</span>
            <span class="action-label">New Project</span>
          </button>
          <button class="action-btn">
            <span class="action-icon">📊</span>
            <span class="action-label">View Analytics</span>
          </button>
          <button class="action-btn">
            <span class="action-icon">📝</span>
            <span class="action-label">Add Skill</span>
          </button>
          <button class="action-btn">
            <span class="action-icon">📁</span>
            <span class="action-label">Manage Files</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const userEmail = ref('')
const recentActivities = ref([
  {
    type: 'project',
    title: 'Added new project "E-commerce Website"',
    time: '2 hours ago',
  },
  {
    type: 'skill',
    title: 'Updated skill "React" to 80%',
    time: 'Yesterday',
  },
  {
    type: 'profile',
    title: 'Updated profile information',
    time: '3 days ago',
  },
  {
    type: 'project',
    title: 'Added new project "Task Management App"',
    time: '1 week ago',
  },
  {
    type: 'contact',
    title: 'Received new contact message from John',
    time: '2 weeks ago',
  },
])

onMounted(() => {
  // 从本地存储获取用户信息
  userEmail.value = localStorage.getItem('userEmail') || 'User'
})
</script>

<style scoped>
.dashboard {
  padding: 2rem 0;
}

.page-header {
  margin-bottom: 2rem;
}

.page-title {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.dashboard-card {
  height: 100%;
}

.card-title {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--background-color);
}

.profile-content {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.profile-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
}

.profile-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-info h3 {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.profile-info p {
  margin-bottom: 1rem;
  color: #666;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.stat-card {
  background-color: var(--background-color);
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  color: #666;
}

.activity-list {
  list-style: none;
}

.activity-item {
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid var(--background-color);
}

.activity-item:last-child {
  border-bottom: none;
}

.activity-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.activity-icon.project {
  background-color: rgba(255, 87, 34, 0.2);
}

.activity-icon.skill {
  background-color: rgba(255, 152, 0, 0.2);
}

.activity-icon.profile {
  background-color: rgba(33, 150, 243, 0.2);
}

.activity-icon.contact {
  background-color: rgba(76, 175, 80, 0.2);
}

.activity-content {
  flex: 1;
}

.activity-title {
  margin-bottom: 0.3rem;
}

.activity-time {
  font-size: 0.8rem;
  color: #666;
}

.actions-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.action-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background-color: var(--background-color);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    background-color 0.3s ease;
}

.action-btn:hover {
  transform: translateY(-3px);
  background-color: rgba(255, 87, 34, 0.1);
}

.action-icon {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.action-label {
  font-size: 0.9rem;
  color: var(--text-color);
}

@media (max-width: 992px) {
  .dashboard-grid {
    grid-template-columns: 1fr;
  }
}
</style>
