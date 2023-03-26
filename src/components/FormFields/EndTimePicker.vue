<script setup lang="ts">
    // TODO: Consider abstracting shared states with EndTimePicker
    import { computed, watch, reactive } from 'vue';

    const props = defineProps({
      startTime: {
        type: Date,
        required: true
      },
      modelValue: {
        type: Date,
        required: true
      },
      isDisabled: {
        type: Boolean,
        required: true
      }
    })

    function toTimeFormat(time: number){

      
      return new Intl.DateTimeFormat('en-GB', 
      { 
        timeStyle: 'short', 
        timeZone: 'Asia/Dubai',
        hourCycle: 'h12'
      }).format(time);
    }

    function getHoursDiff(olderTime: number, newerTime: number){
      if (newerTime - olderTime == 1){
        return '(1 HR)'
      } else if (newerTime) {
        return `(${newerTime - olderTime} HRS)`
      }
    }

    const emit = defineEmits(['update:modelValue'])
    const startTime = computed({
        get(){
            return props.modelValue
        },
        set(value){
            emit('update:modelValue', value)
        }
    })

    // TODO: refactor somehow
    const openingHours = {
      start: 6,
      end: 19
    }

    const endingTimes = computed(() => {
      let endingTimesList: {
        timeValue: Date,
        timeFormat: string
      }[] = []
      
      const originalHour = props.startTime.getHours()
      for (let hour = new Date(props.startTime).getHours() + 1; hour < openingHours.end + 1; hour++){
        
        let time = new Date(props.startTime).setHours(hour);
        let timeValue = new Date(time);
        let timeFormat = toTimeFormat(time)

        if (hour - originalHour < 4){
          timeFormat = `${timeFormat} ${getHoursDiff(originalHour, hour)}`
        }

        endingTimesList.push({
          timeValue,
          timeFormat
        })
      }

      return endingTimesList
    })
</script>

<template>
    <label for="end-time">
        <caption>
            End Time
        </caption>
        <select name="end-time" v-model="startTime" :disabled="isDisabled">
          <option v-for="availableTime in endingTimes" :value="availableTime.timeValue">
            {{ availableTime.timeFormat }}
          </option>
        </select>
    </label>
</template>

<style scoped lang="scss">
  label {
    @include flex-col;
    // align-items: flex-start;
    width: 100%;
    text-transform: capitalize;
    position: relative;
    gap: .25em;

    caption {
      text-align: left;
      color: white;
      text-transform: uppercase;
    }

    select {
      outline: grey;
      border-radius: 5px;
      padding: .5em;
      // padding-block: 1em;
      border: 1px solid grey;
    }
  }
</style>