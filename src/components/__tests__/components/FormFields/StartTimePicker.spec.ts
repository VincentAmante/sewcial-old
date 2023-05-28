import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils';
import StartTimePicker from '@/components/FormFields/StartTimePicker.vue';

describe('StartTimePicker', () => {
  it('displays available starting times', () => {
    const date = new Date('2023-03-27T10:00:00');
    const modelValue = new Date('2023-03-27T10:00:00');
    const wrapper = mount(StartTimePicker, {
      props: {
        date,
        modelValue,
      },
    });
    const startingTimes = wrapper.findAll('option');
    expect(startingTimes.length).toBe(13); // should display 13 starting times (from 6:00 to 18:00)
    expect(startingTimes[0].text()).toBe('06:00 am');
    expect(startingTimes[12].text()).toBe('06:00 pm');
  });

  it('updates the selected starting time', async () => {
    const date = new Date('2023-03-27T10:00:00');
    const modelValue = new Date('2023-03-27T10:00:00');
    const wrapper = mount(StartTimePicker, {
      props: {
        date,
        modelValue,
      },
    });
    const startingTimes = wrapper.find('select');
    await startingTimes.setValue(new Date('2023-03-27T11:00:00')); // select 11:00 AM
    expect(wrapper.emitted('update:modelValue')).toBeTruthy(); // should emit update event
    // expect(wrapper.emitted('update:modelValue')[0][0].toString()).toBe(new Date('2023-03-27T11:00:00').toString()); // should emit the selected time
  });
});
