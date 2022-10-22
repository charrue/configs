module.exports = {
  parser: "vue-eslint-parser",
  extends: ["plugin:vue/vue3-recommended"],
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
  },
};
