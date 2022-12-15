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
      <v-text-field
        :value="value"
        :append-outer-icon="isEditable ? 'mdi-pencil' : 'mdi-pen-off'"
        :readonly="!isEditable"
        @click:append-outer="isEditable = !isEditable"
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
