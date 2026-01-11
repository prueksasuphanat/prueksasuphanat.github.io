import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Home from '@/components/Home.vue'

describe('Home Component', () => {
  it('renders properly', () => {
    const wrapper = mount(Home, {
      global: {
        mocks: {
          t: (key: string) => key, // Mock i18n
        },
      },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('displays social links', () => {
    const wrapper = mount(Home, {
      global: {
        mocks: {
          t: (key: string) => key,
        },
      },
    })
    const socialLinks = wrapper.findAll('.home__social-icon')
    expect(socialLinks.length).toBe(3) // LinkedIn, GitHub, Instagram
  })
})
