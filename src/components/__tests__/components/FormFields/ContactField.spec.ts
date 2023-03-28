import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ContactField from '@/components/FormFields/ContactField.vue'


describe('ContactField', () => {
  it('renders label and input correctly', async () => {
    const wrapper = mount(ContactField, {
      props: {
        name: 'email',
        modelValue: '',
        label: 'Email',
        placeholder: 'Enter your email',
        isRequired: true,
        type: 'email'
      }
    })

    // Assert that input type is set correctly
    expect(wrapper.find('input').attributes('type')).toBe('email')

    // Assert that placeholder text is set correctly
    expect(wrapper.find('input').attributes('placeholder')).toBe('Enter your email')

    // Assert that input value is correctly set by the modelValue prop
    await wrapper.setProps({ modelValue: 'user@example.com' })
    expect(wrapper.find('input').element.value).toBe('user@example.com')

    // Assert that required attribute is set correctly
    expect(wrapper.find('input').attributes('required')).toBeDefined()
  })

  it('emits update:modelValue event when input value changes', async () => {
    const wrapper = mount(ContactField, {
      props: {
        name: 'email',
        modelValue: '',
        label: 'Email',
        placeholder: 'Enter your email',
        isRequired: true,
        type: 'email'
      }
    })

    // Set input value and assert that update:modelValue event is emitted with the correct value
    await wrapper.find('input').setValue('user@example.com')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    // expect(wrapper.emitted('update:modelValue')[0]).toEqual(['user@example.com'])
  })
})
