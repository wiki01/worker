<template>
  <v-container>
    <div
      ref="map"
      style="width:500px;height:400px;"
    />
    <v-btn
      @click="test"
    />
  </v-container>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  mounted () {
    const kakao = window.kakao

    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    }

    // eslint-disable-next-line no-unused-vars
    const map = new kakao.maps.Map(this.$refs.map, options)
  },
  methods: {
    test: function () {
      debugger
      const kakao = window.kakao
      const geocoder = new kakao.maps.services.Geocoder()
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
      }
      const map = new kakao.maps.Map(this.$refs.map, options)

      geocoder.addressSearch('경기 성남시 분당구 판교역로 235 에이치스퀘어', function (result, status) {
        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
          const coords = new kakao.maps.LatLng(result[0].y, result[0].x)
          // let message = 'latlng: new kakao.maps.LatLng(' + result[0].y + ', '
          // message += result[0].x + ')'

          // const resultDiv = document.getElementById('clickLatlng')
          // resultDiv.innerHTML = message

          // 결과값으로 받은 위치를 마커로 표시합니다
          const marker = new kakao.maps.Marker({
            map: map,
            position: coords
          })

          // 인포윈도우로 장소에 대한 설명을 표시합니다
          const infowindow = new kakao.maps.InfoWindow({
            content: '<div style="width:150px;text-align:center;padding:6px 0;">장소</div>'
          })
          infowindow.open(map, marker)

          // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
          map.setCenter(coords)
        }
      })
    }
  }
}
</script>

<style>

</style>
