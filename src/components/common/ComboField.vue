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
      <v-combobox
        :value="value"
        :items="items"
        @change="changedValue"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: [Boolean, String],
      default: false
    },
    items: {
      type: Array,
      default: function () {
        return []
      }
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
