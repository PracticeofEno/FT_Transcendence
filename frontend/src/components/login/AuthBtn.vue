<script setup lang="ts">
const authUrl = 'https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email&include_granted_scopes=true&response_type=token&redirect_uri=http://ec2-54-180-29-79.ap-northeast-2.compute.amazonaws.com/auth&client_id=86284776012-0covoldjsbrr962qki0295r3quqr8ik3.apps.googleusercontent.com';
</script>

<template>
  <button class="login-btn">
    <a :href="authUrl">42 LOGIN </a>
  </button>
</template>

<style scoped>
.login-btn {
  width: 172px;
  height: 60px;
  font-size: 24px;
  border-radius: 30px;
  background: var(--btn-red);
  overflow: hidden;
  padding: 0;
}
.login-btn a {
  display: inline-block;
  width: 172px;
  height: 60px;
  line-height: 60px;
}
</style>
