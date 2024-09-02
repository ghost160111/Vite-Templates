<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "input-text",
  props: {
    msg: String
  },
  methods: {
    setMsg(evt: InputEvent): void {
      const target: HTMLInputElement = evt.target as HTMLInputElement;
      this.$emit("send-message", target.value);
    }
  }
});
</script>

<template>
  <div class="child-component">
    <input type="text" @input="setMsg" :value="this.$props.msg" />
    <input type="text" @input="setMsg" :value="this.$props.msg" />
    <input type="text" @input="setMsg" :value="this.$props.msg" />
    <p>Result in child component: {{ this.$props.msg }}</p>
  </div>
</template>

<style scoped>
.child-component {
  display: flex;
  flex-flow: column;
}
</style>
