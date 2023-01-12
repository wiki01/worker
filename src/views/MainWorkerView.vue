<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    />

    <v-navigation-drawer
      v-model="drawerNavi"
      :mini-variant.sync="miniNavi"
      permanent
      app
      left
    >
      <v-list-item>
        <v-list-item-icon>
          <v-app-bar-nav-icon
            @click.stop="miniNavi = !miniNavi"
          >
            <v-icon>mdi-menu</v-icon>
          </v-app-bar-nav-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title
            class="text-h6"
          >
            SubTitle
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider />

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="(tab, index) in tabs"
          :key="tab.name"
          link
          @click="toTab(index)"
        >
          <v-list-item-icon>
            <v-icon>{{ tab.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ tab.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-tabs
        v-model="tabIndex"
        vertical
      >
        <v-tab
          v-for="tab in tabs"
          :key="tab.name"
          class="hidden"
        />

        <v-tabs-items
          v-model="tabIndex"
        >
          <v-tab-item
            v-for="tab in tabs"
            :key="tab.name"
          >
            <component
              :is="tab.content().template"
              :ref="tab.tabName"
            />
          </v-tab-item>
        </v-tabs-items>
      </v-tabs>
    </v-main>
  </v-app>
</template>

<script>
import WorkerBasicInfo from '@/components/worker/WorkerBasicInfo.vue'
import ProjectList from '@/components/project/ProjectList.vue'
import ProjectEnroll from '@/components/project/ProjectEnroll.vue'

export default {
  components: {
    WorkerBasicInfo,
    ProjectList,
    ProjectEnroll
  },
  data () {
    return {
      drawerNavi: false,
      miniNavi: false,
      tabIndex: 0,
      tabs: [
        {
          name: '내 정보',
          icon: 'mdi-information-outline',
          content: function () {
            return { template: WorkerBasicInfo }
          }
        },
        {
          name: '프로젝트',
          icon: 'mdi-information-outline',
          content: function () {
            return { template: ProjectList }
          }
        },
        {
          name: '프로젝트 등록',
          icon: 'mdi-information-outline',
          content: function () {
            return { template: ProjectEnroll }
          }
        }
      ]
    }
  },
  methods: {
    toTab: function (index) {
      this.tabIndex = index
    }
  }

}

</script>

<style scoped>

.hidden {
  display: none;
}

</style>
