<template>
  <v-sheet
    color="green"
    elevation="24"
    height="700"
    width="600"
  >
    <TextFieldVue
      v-model="name"
      label="이름"
      @change="test"
    />
  </v-sheet>
</template>

<script>
import TextFieldVue from '@/components/common/TextField.vue'

export default {
  components: {
    TextFieldVue
  },
  data () {
    return {
      isEditable: true,
      name: '이기리'
    }
  },
  methods: {
    test: function (value) {
      console.log(value)
    }
  }
}
</script>

<style>

</style>
