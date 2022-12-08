import { defineStore } from "pinia";
import { Socket } from "socket.io-client";
import { modalAlertStore } from "@/stores/modal";

export const GameSocketStore = defineStore({
  id: "GameSocketStore",
  state: () => ({
    socket: Socket.prototype,
  }),
  actions: {
    disConnected() {
      this.socket.disconnect();
    },
  },
});

const gameSocketStore = GameSocketStore();

/**게임신청을 할 수 없을 때(게임중, 게임신창중), 수락을 눌렀는데 상대가 방을 나간상태 일 때 */
gameSocketStore.socket?.on("canNotAvailableGame", () => {
  modalAlertStore().alertMsg("게임을 할 수 없습니다");
});

gameSocketStore.socket?.on("noExitGame", () => {
  modalAlertStore().alertMsg("관전을 할 수 없습니다");
});
