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
export default {
  components: {},
  data () {
    return {
      username: 'admin',
      password: '1',
      login: 'Login',
      loading: false,
      isWorker: true // 구직자 or 기업
    }
  },
  methods: {
    authentication: function () {
      this.loading = true
      this.login = ''

      setTimeout(() => {
        this.loading = false
        this.login = 'Success'
        setTimeout(() => {
          this.login = 'Login'
          this.password = ''
          // goto MainWorkerView
          this.$router.push('/main-worker')
        }, 1000)
      },
      2000)
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
