import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import TestVue from '../testVue.vue'


test('renders a todo', () => {
    const wrapper = mount(TestVue)
  
    const todo = wrapper.get('[data-test="todo"]')
  
    expect(todo.text()).toBe('Apprendre Vue.js 3')
})