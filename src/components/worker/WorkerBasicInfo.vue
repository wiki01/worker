<template>
  <v-sheet
    style="overflow:scroll"
    elevation="24"
    height="800"
    width="600"
  >
    <TextFieldVue
      v-model="name"
      label="이름"
    />
    <ResidentNum
      v-model="residentNum"
      label="주민번호"
    />
    <ComboField
      v-model="sex"
      :items="['남자', '여자']"
      dense
      label="성별"
    />
    <PhoneNumField
      v-model="phoneNum"
      label="전화번호"
    />
    <EmailField
      v-model="email"
      label="이메일"
    />
    <ComboField
      v-model="isArmy"
      :items="[true, false]"
      dense
      label="군복무"
    />
    <TextFieldVue
      v-model="address1"
      label="주소1"
    />
    <TextFieldVue
      v-model="address2"
      label="주소2"
    />
    <TextFieldVue
      v-model="address3"
      label="주소3"
    />

    <v-btn
      @click="saveUser"
    >
      Save
    </v-btn>
  </v-sheet>
</template>

<script>
import TextFieldVue from '@/components/common/TextField.vue'
import PhoneNumField from '@/components/common/PhoneNumField.vue'
import EmailField from '@/components/common/EmailField.vue'
import ComboField from '@/components/common/ComboField.vue'
import ResidentNum from '@/components/common/ResidentNum.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    TextFieldVue,
    PhoneNumField,
    EmailField,
    ComboField,
    ResidentNum
  },
  data () {
    return {
      name: '',
      residentNum: '',
      phoneNum: '',
      sex: '남자',
      email: '',
      isArmy: false,
      address1: '',
      address2: '',
      address3: ''
    }
  },
  created () {
    const user = this.getUser()
    // loading
    this.userid = user.userid
    this.name = user.name ?? ''
    this.residentNum = user.resident_number ?? ''
    this.phoneNum = user.phone ?? ''
    this.email = user.email ?? ''
    this.isArmy = user.army_service === 1
    this.sex = user.sex === 'M' ? '남자' : '여자'
    this.address1 = user.address1 ?? ''
    this.address2 = user.address2 ?? ''
    this.address3 = user.address3 ?? ''
  },
  methods: {
    ...mapGetters(['getUser']),
    ...mapActions(['saveUser']),
    saveUser: function () {
      // todo
      // 유효성 검사 추가해야함
      // server 에서 저장이 완료 된경우 저장함
      const user = {
        userid: this.userid,
        name: this.name,
        resident_number: this.residentNum,
        phone: this.phoneNum,
        email: this.email,
        army_service: this.isArmy,
        sex: this.sex === '남자' ? 'M' : 'W',
        address1: this.address1,
        address2: this.address2,
        address3: this.address3
      }
      this.$axios.post('/TBUSERBASIC/update', user)
        .then((res) => {
          if (res.status === 200) {
            if (res.data.result === 'success') {
              this.saveUser(user)
              window.alert('내용이 수정되었습니다')
            } else {
              window.alert(`${res.data.error}`)
            }
          } else {
            window.alert('서버 응답오류가 발생하였습니다')
          }
        })
        .catch((error) => {
          window.alert('서버 에러')
          console.log(error)
        })
    },
    test: function (value) {
      console.log(value)
    }
  }
}
</script>

<style>

</style>
