<template>
  <v-app>
    <v-main class="blue-grey lighten-4">
      <!-- Login Component -->
      <v-container
        style="max-width: 450px"
        fill-height
      >
        <v-row
          align-center
          row
          wrap
        >
          <v-col xs12>
            <v-card>
              <div class="pa-10">
                <h1
                  style="text-align: center"
                  class="mb-10"
                >
                  Worker Login
                </h1>
                <form>
                  <v-container
                    fluid
                    class="checkbox"
                  >
                    <v-checkbox v-model="isWorker">
                      <template #label>
                        <div>
                          <v-tooltip bottom>
                            <template #activator="{ on }">
                              <div
                                @click.stop
                                v-on="on"
                              >
                                Are you Worker?
                              </div>
                            </template>
                            Click Me
                          </v-tooltip>
                        </div>
                      </template>
                    </v-checkbox>
                  </v-container>
                  <v-text-field
                    v-model="username"
                    label="ID"
                    prepend-inner-icon="mdi-account"
                  />
                  <v-text-field
                    v-model="password"
                    prepend-inner-icon="mdi-lock"
                    type="password"
                    label="Password"
                  />
                  <v-btn
                    color="blue lighten-1 text-capitalize"
                    depressed
                    large
                    block
                    dark
                    class="mb-3"
                    @click="authentication"
                  >
                    {{ login }}
                    <v-progress-circular
                      v-show="loading"
                      :indeterminate="loading"
                      color="red"
                    />
                  </v-btn>
                  <v-btn
                    color="blue lighten-1 text-capitalize"
                    depressed
                    large
                    block
                    dark
                    @click="addUserShow"
                  >
                    Sign Up
                  </v-btn>
                </form>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  components: {},
  data () {
    return {
      username: 'user1',
      password: '1',
      login: 'Login',
      loading: false,
      isWorker: true // 구직자 or 기업
    }
  },
  methods: {
    ...mapActions(['saveUser']),
    authentication: function () {
      this.loading = true
      this.login = ''

      setTimeout(() => {
        this.$axios.get(`/users/${this.username}/${this.password}`, { username: this.username, password: this.password })
          .then((res) => {
            if (res.status === 200) {
              if (res.data.isauth) {
                this.saveUser(res.data.basicinfo)
                this.$router.push('/main-worker')
              } else {
                // 아이디 or 비빌번호 틀림
                window.alert('아이디 비밀번호가 존재하지 않습니다.')
              }
            } else {
              window.alert('서버 응답오류가 발생하였습니다')
            }
          })
          .catch((error) => {
            window.alert('서버 에러')
            console.log(error)
          })
          .finally(() => {
            this.loading = false
            this.login = 'Login'
          })
      }, 1000)
    },
    addUserShow: function () {
      window.alert('미구현')
    }

  }

}
</script>

<style scoped>
.checkbox {
  margin-top: 0px;
  margin-bottom: 10px;
  padding: 0px;
  height: 30px;
}

</style>
