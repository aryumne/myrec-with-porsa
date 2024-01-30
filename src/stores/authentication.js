import { Decode, Encode } from "@/plugins/cryptography";
import { authService } from "@/services";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { STORAGEKEY } from "@/configs";

export default defineStore(
  "authentication",
  () => {
    const router = useRouter();
    const authenticated = ref(false);
    const user = ref({});
    const token = ref(null);

    const getUser = computed(() => {
      if (Object.keys(user.value).length === 0) {
        const userFromLS = localStorage.getItem(STORAGEKEY.USER);
        if (userFromLS) {
          user.value = JSON.parse(Decode(userFromLS));
        }
      }
      return user.value;
    });

    const getToken = computed(() => {
      if (token.value === null) {
        const tokenFromLS = localStorage.getItem(STORAGEKEY.TOKEN);
        if (tokenFromLS) {
          token.value = JSON.parse(Decode(tokenFromLS));
        }
      }
      return token.value;
    });

    async function setUserLoggedIn(token) {
      try {
        if (!token) throw new Error("Token not found!");
        localStorage.setItem(STORAGEKEY.TOKEN, Encode(token));
        const res = await authService.getProfile({
          headers: { Authorization: "Bearer " + token },
        });
        if (res.data) {
          authenticated.value = true;
          user.value = res.data;
          localStorage.setItem(
            STORAGEKEY.USER,
            Encode(JSON.stringify(user.value))
          );
          router.push({ name: "Home", replace: true });
        }
      } catch (err) {
        console.error(err);
      }
    }

    function userLoggedOut() {
      authenticated.value = false;
      user.value = {};
      localStorage.clear();
      router.push({ name: "Landing", replace: true });
    }

    return { authenticated, getUser, getToken, setUserLoggedIn, userLoggedOut };
  },
  {
    persist: {
      paths: ["authenticated", "user.value"],
    },
  }
);
