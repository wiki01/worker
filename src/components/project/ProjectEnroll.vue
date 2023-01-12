<template>
  <v-container>
    프로젝트 등록
    <v-row>
      <v-col>
        <v-text-field
          label="프로젝트 이름"
          :rules="nameRules"
          hide-details="auto"
        />
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col
        cols="6"
      >
        시작일
        <v-date-picker v-model="picker" />
      </v-col>
      <v-col
        cols="6"
      >
        종료일
        <v-date-picker v-model="picker" />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-text-field
          label="요청자"
          :rules="nameRules"
          hide-details="auto"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-text-field
          label="프로젝트 주소"
          :rules="nameRules"
          hide-details="auto"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-subheader>프로젝트 예상 비용</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field
          label="Cost"
          value="10.00"
          prefix="$"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <grid
          ref="grid"
          :data="[]"
          :columns="columns"
          :column-options="columnOptions"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import 'tui-grid/dist/tui-grid.css'
import 'tui-date-picker/dist/tui-date-picker.css'
import 'tui-time-picker/dist/tui-time-picker.css'
import { Grid } from '@toast-ui/vue-grid'

export default {
  components: {
    grid: Grid
  },
  data: function () {
    return {
      nameRules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters'
      ],
      columns: [
        {
          header: '분야',
          name: 'field'
        },
        {
          header: '언어',
          name: 'lang'
        },
        {
          header: '등급',
          name: 'class'
        }
      ],
      columnOptions: {
        resizable: true,
        frozenCount: 1
      }
    }
  }
}
</script>

<style scoped>
@import "https://uicdn.toast.com/tui-grid/latest/tui-grid.css";
@import "https://uicdn.toast.com/tui.context-menu/latest/tui-context-menu.css";
</style>
