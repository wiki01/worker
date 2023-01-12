<template>
  <div class="container">
    <v-btn
      @click="getAllProj"
    >
      All Proj
    </v-btn>
    <grid
      ref="grid"
      :data="[]"
      :columns="columns"
      :column-options="columnOptions"
      :options="options"
      @check="onCheck"
      @uncheck="onUnCheck"
      @change="onChange"
      @click="onClick"
      @editingStart="onEditingStart"
      @editingFinish="onEditingFinish"
    />
    <div id="tui-context-menu-container" />
    <div id="tui-context-menu-target">
      asdsadasd
    </div>
    <Map />
  </div>
</template>

<script>
import 'tui-grid/dist/tui-grid.css'
import 'tui-date-picker/dist/tui-date-picker.css'
import 'tui-time-picker/dist/tui-time-picker.css'
import { Grid } from '@toast-ui/vue-grid'
import ContextMenu from 'tui-context-menu'
import Map from '@/components/KakaoMap.vue'

export default {
  components: {
    grid: Grid,
    Map
  },
  data () {
    return {
      columns: [
        // for columnData prop
        {
          header: '프로젝트 이름',
          name: 'name'
        },
        {
          header: '시작일',
          name: 'start_date',
          editor: {
            type: 'datePicker',
            options: {
              format: 'yyyy-MM-dd'
            }
          }
        },
        {
          header: '종료일',
          name: 'end_date',
          editor: {
            type: 'datePicker',
            options: {
              format: 'yyyy-MM-dd'
            }
          }
        },
        {
          header: '고객사',
          name: 'customer'
        },
        {
          header: '위치',
          name: 'address'
        },
        {
          header: '모집인원',
          name: ''
        }
      ],
      columnOptions: {
        resizable: true,
        frozenCount: 1
      },
      options: {
        rowHeaders: ['checkbox']
      }
    }
  },
  mounted () {
    debugger
    const container = document.getElementById('tui-context-menu-container')
    const ctxMenu = new ContextMenu(container)
    // const target = document.getElementById('tui-context-menu-target')

    ctxMenu.register('#tui-context-menu-target', () => {

    }, [
      { title: 'Open' },
      {
        title: 'Create',
        menu: [
          { title: 'a File', cmd: 'Create a file' },
          { title: 'a Folder', cmd: 'Create a folder' }
        ]
      }
    ])
  },
  methods: {
    getAllProj: function () {
      this.$axios.post('/TBPROJ/get-all-list', {})
        .then((res) => {
          if (res.status === 200) {
            this.$refs.grid.invoke('resetData', res.data.data)
          } else {
            window.alert('서버 에러')
          }
        })
    },
    onCheck (ev) {
      console.log('check event: ', ev)
    },
    onUnCheck (ev) {
      console.log('uncheck event: ', ev)
    },
    onChange (ev) {
      console.log(ev)
    },
    onClick (ev) {
      console.log(ev)
    },
    onEditingStart (ev) {
      console.log(ev)
    },
    onEditingFinish (ev) {
      console.log(ev)
    }
  }
}
</script>

<style scoped>
@import "https://uicdn.toast.com/tui-grid/latest/tui-grid.css";
@import "https://uicdn.toast.com/tui.context-menu/latest/tui-context-menu.css";
</style>
