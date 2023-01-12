<template>
  <v-row
    align="center"
    align-content="center"
    justify="start"
  >
    <v-col
      cols="2"
    >
      <v-card-title>
        {{ label }}
      </v-card-title>
    </v-col>
    <v-col
      cols="8"
    >
      <MazPhoneNumberInput
        :value="value"
        style="width: 400px"
        default-country-code="KR"
        @change="changedValue"
      />
    </v-col>
  </v-row>
</template>

<script>
import { MazPhoneNumberInput } from 'maz-ui'

export default {
  components: {
    MazPhoneNumberInput
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isEditable: false
    }
  },
  methods: {
    changedValue: function (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style>

</style>
