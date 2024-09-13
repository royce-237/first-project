// InputPassword.test.ts
import { mount } from '@vue/test-utils';
import { createI18n } from 'vue-i18n';
import { describe, it, expect } from 'vitest';
import InputPassword from './InputPassword.vue';
import { Locale } from 'vue-i18n';

const i18n = createI18n({
  locale: 'en',
  messages,
});

describe('InputPassword', () => {
  it('renders the correct label and placeholder', () => {
    const wrapper = mount(InputPassword, {
      global: {
        plugins: [i18n],
      },
    });

    
    expect(wrapper.find('label').text()).toBe('Password');
    expect(wrapper.find('input').attributes('placeholder')).toBe('Enter your password');
  });

  it('shows an error message when password is too short', async () => {
    const wrapper = mount(InputPassword, {
      global: {
        plugins: [i18n],
      },
    });

    const input = wrapper.find('input');
    await input.setValue('123'); 
    await wrapper.vm.$nextTick();

    
    expect(wrapper.find('p').text()).toBe('Password must be at least 6 characters long');
  });

  it('supports French translations', async () => {
    i18n.global.locale = 'fr';

    const wrapper = mount(InputPassword, {
      global: {
        plugins: [i18n],
      },
    });

    await wrapper.vm.$nextTick();

    
    expect(wrapper.find('label').text()).toBe('Mot de passe'); 
    expect(wrapper.find('input').attributes('placeholder')).toBe('Entrez votre mot de passe'); 
  });
});
