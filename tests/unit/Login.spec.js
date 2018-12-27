import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Login from "@/components/Login.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Login.vue", () => {
  it("calls the login action on form submit", () => {
    const loginMock = jest.fn(() => {
      Promise.reject("error");
    });
    const store = new Vuex.Store({
      actions: {
        // mock function
        login: loginMock
      }
    });
    const wrapper = shallowMount(Login, { localVue, store });
    // Finding the button and triggering a click doesn't trigger submit :(
    wrapper.find("form").trigger("submit.prevent");
    expect(loginMock).toHaveBeenCalled();
  });
});
