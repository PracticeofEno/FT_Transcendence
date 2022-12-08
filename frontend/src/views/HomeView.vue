<script setup lang="ts">
import AppNav from "@/components/home/AppNav.vue";
import LeftSidebar from "@/components/home/LeftSidebar.vue";
import ChannelList from "@/components/channel/ChannelList.vue";
import { onBeforeMount, onBeforeUnmount } from "vue";
import { useUserStore } from "@/stores/user";
import { getSelf } from "@/api/UserService";
import ProfileModal from "@/components/home/ProfileModal.vue";
import { UserListStore } from "@/stores/userList";
import { ChatStore } from "@/stores/chatting";
import { useRouter } from "vue-router";
import { GameSocketStore } from "@/stores/gameSocket";
import { gameRoomInfoStore, gameWatchStore } from "@/stores/game";
import RecvBattle from "@/components/game/ModalRecvBattle.vue";
import AlertModal from "@/components/home/AlertModal.vue";
import { useCookies } from "vue3-cookies";
import { io } from "socket.io-client";
import { modalAlertStore } from "@/stores/modal";
import { getFriends, getLoginUser, getBlock } from "@/api/UserService";

const { cookies } = useCookies();
const socketOptions = {
  transportOptions: {
    polling: {
      extraHeaders: {
        Authorization: "Bearer " + cookies.get("jwt"),
      },
    },
  },
};

UserListStore().socket = io("/api/", socketOptions);
GameSocketStore().socket = io("/api/game", socketOptions);
ChatStore().socket = io("/api/chat", socketOptions);

const router = useRouter();
// import { CurrentUserStore } from "@/stores/tmp";

const self = useUserStore();

UserListStore().socket?.on("connect", async () => {
  console.log("socket connected");
  UserListStore().allList = await getLoginUser();
  UserListStore().friendList = await getFriends();
  UserListStore().blockList = await getBlock();
  UserListStore().showViewList();
});

UserListStore().socket.on("alreadyLogin", () => {
  console.log("이미 로그인된 유저입니다");
  modalAlertStore().alertMsg("중복 로그인입니다. 다시 로그인 해주세요");
  router.push('/login');
});

onBeforeMount(async () => {
  self.data = await getSelf();
});

onBeforeUnmount(() => {
  UserListStore().disConnect();
});

GameSocketStore().socket?.on("vsbattle", () => {
  gameRoomInfoStore().data.mode = 1;
  router.push("battle");
});

GameSocketStore().socket?.on("watchGame", () => {
  gameWatchStore().data.isWatch = true;
  gameRoomInfoStore().data.mode = -2;
  router.push("battle");
});
</script>

<template>
  <div class="wrapper">
    <AlertModal />
    <AppNav />
    <LeftSidebar
      :class="{ slide: $route.name === 'rank' || $route.name === 'battle' }"
    />
    <div
      class="main_wrap"
      :class="{
        wide: $route.name === 'rank' || $route.name === 'battle',
      }"
    >
      <router-view></router-view>
    </div>
    <ChannelList />
    <Teleport to="body">
      <ProfileModal />
    </Teleport>
  </div>
  <RecvBattle />
</template>

<style scoped>
.wrapper {
  position: relative;
  min-width: 1240px;
  width: 1240px;
  height: 824px;
  display: flex;
  overflow: hidden;
}

.main_wrap {
  position: relative;
  padding: 94px 30px 30px 24px;
  min-width: 554px;
}

.wide {
  padding: 30px 30px 30px 50px;
}

.main {
  width: 500px;
  height: 700px;
}
.game_btn_box {
  display: flex;
  justify-content: space-between;
}
.game_list {
  margin-top: 20px;
  height: 532px;
  overflow-y: scroll;
}
.slide {
  margin-left: -397px;
}
</style>
