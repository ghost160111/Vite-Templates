<script lang="ts">
import HelloWorld from 'components/HelloWorld.vue';
import InputText from 'components/InputText.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    HelloWorld,
    InputText
  },
  data() {
    return {
      message: "Hello world"
    }
  },
  methods: {
    receiveMessageFromChild(message: string): void {
      this.$data.message = message;
    }
  }
});
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <InputText :msg="message" @send-message="receiveMessageFromChild" />
  <p>This is result in parent component: {{ message }}</p>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
