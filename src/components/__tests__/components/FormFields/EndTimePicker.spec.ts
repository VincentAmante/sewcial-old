import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import EndTimePicker from '@/components/FormFields/EndTimePicker.vue'

describe('EndTimePicker', () => {
  it('renders a select element with options for ending times based on a given startTime', () => {
    const wrapper = mount(EndTimePicker, {
      props: {
        // 4 PM
        startTime: new Date('Sun Mar 27 2022 09:00:00 GMT+0400 (Gulf Standard Time)'),
        modelValue: new Date('2022-03-27T09:00:00.000Z'),
        isDisabled: false
      }
    })

    const selectElement = wrapper.find('select[name="end-time"]')
    expect(selectElement.exists()).toBe(true)

    const options = selectElement.findAll('option')
    expect(options).toHaveLength(10) // assuming opening hours from 6am to 7pm with hour intervals

    // assuming the first available end time is 10am
    expect(options[0].attributes('value')).toBe('Sun Mar 27 2022 10:00:00 GMT+0400 (Gulf Standard Time)')
    expect(options[0].text()).toBe('10:00 am (1 HR)')

    // assuming the second available end time is 11am
    expect(options[1].attributes('value')).toBe('Sun Mar 27 2022 11:00:00 GMT+0400 (Gulf Standard Time)')
    expect(options[1].text()).toBe('11:00 am (2 HRS)')

    // assuming the last available end time is 7pm
    expect(options[options.length - 1].attributes('value')).toBe('Sun Mar 27 2022 19:00:00 GMT+0400 (Gulf Standard Time)')
    expect(options[options.length - 1].text()).toBe('07:00 pm')
  })
})
