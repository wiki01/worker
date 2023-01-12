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
      <input
        v-model="firstRRNView"
        type="text"
        inputmode="numeric"
        pattern="[0-9]*"
        maxlength="6"
        class="tf_register"
        placeholder="주민번호 앞자리"
        @input="firstRRNCheck($event.data)"
      > -
      <input
        v-model="secondRRNView"
        type="text"
        pattern="[0-9]*"
        inputmode="numeric"
        maxlength="7"
        placeholder="OOOOOOO"
        @input="secondRRNCheck($event.data)"
      >
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
      firstRRN: [],
      secondRRN: []
    }
  },
  computed: {
    firstRRNView: {
      get () {
        if (this.value.includes('-')) {
          return this.value.slice(0, this.value.indexOf('-'))
        } else {
          return ''
        }
      },
      set (value) {
        this.firstRRN = value.split('')
        return value
      }
    },

    secondRRNView: {
      get () {
        if (this.value.includes('-')) {
          // return this.value.slice(this.value.indexOf('-') + 1)
          return this.secondRRN[0] + String(this.secondRRN.join('')).replace(/./g, '•').substr(1)
        } else {
          return ''
        }
      },
      set (value) {
        return this.secondRRN[0] + String(this.secondRRN.join('')).replace(/./g, '•').substr(1)
      }
    }
  },

  mounted () {
    if (this.value.includes('-')) {
      this.firstRRN = this.value.slice(0, this.value.indexOf('-')).split('')
      this.secondRRN = this.value.slice(this.value.indexOf('-') + 1).split('')
    } else {
      this.firstRRN = []
      this.secondRRN = []
    }
  },
  methods: {
    firstRRNCheck (e) {
      // if (this.isNumber(e) && this.firstRRN.length < 6) {
      //   this.firstRRN.push(e)
      // } else if (e === null && this.firstRRN.length > 0) {
      //   this.firstRRN.pop()
      // }
      this.$emit('input', `${this.firstRRN.join('')}-${this.secondRRN.join('')}`)
    },
    secondRRNCheck (e) {
      if (this.isNumber(e) && this.secondRRN.length < 7) {
        this.secondRRN.push(e)
      } else if (e === null && this.secondRRN.length > 0) {
        this.secondRRN.pop()
      }

      let convertStr = ''
      if (this.secondRRN.length > 0) {
        convertStr = this.secondRRN[0] + String(this.secondRRN.join('')).replace(/./g, '•').substr(1)
      }
      this.secondRRNView = convertStr
      this.$emit('input', `${this.firstRRN.join('')}-${this.secondRRN.join('')}`)
    },
    isNumber (data) {
      if (/^[0-9]$/g.test(data)) {
        return true
      } else {
        return false
      }
    },
    validateRRN () {
      if (this.firstRRN.length < 6 && this.secondRRN.length < 7) return false

      let N = 0
      for (let i = 1; i < 7; i++) {
        N += this.firstRRN[i - 1] * (i + 1)
      }

      for (let j = 1; j < 7; j++) {
        if (j < 3) {
          N += this.secondRRN[j - 1] * (j + 7)
        } else {
          N += this.secondRRN[j - 1] * (j - 1)
        }
      }

      return ((11 - (N % 11)) % 10) === Number(this.secondRRN[6])
    },
    resultRRN () {
      return this.firstRRN.join('') + '-' + this.secondRRN.join('')
    }
  }
}
</script>

<style>

</style>
