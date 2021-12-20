import { mount } from "@vue/test-utils";
import { test, expect } from 'vitest'
import App from "../src/App.vue";

test("mount component", async () => {
  const wrapper = mount(App);

  expect(wrapper.text()).toContain("Vitest");
});
