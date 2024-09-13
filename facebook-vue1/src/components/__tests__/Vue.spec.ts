import App from "@/App.vue"
// import router from "@/router"
import { mount } from "@vue/test-utils"
import {describe, it, expect, vi} from "vitest"


describe('App.vue',() => {
    it('renders RouteurView components', () =>{
        const wrapper = mount(App, {
            global: {
                mocks: {
                    $t: (d: string) => d
                },
            }
        })

        expect(wrapper.text()).toBe('Home component content')
        // expect(wrapper.text()).toBe('This is the footer text')
    })
})