<template>
  <div>
  <CityHeader></CityHeader>
  <CitySearch></CitySearch>
  <CityList :cities="cities" :hot="hotCities"></CityList>
  <CityAlphabet :cities="cities"></CityAlphabet>

  </div>

</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default {
  name: 'city',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.data && res.ret) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    }
  },
  data () {
    return {
      cities: {},
      hotCities: []
    }
  },
  mounted () {
    this.getCityInfo()
  }

}
</script>

<style lang="stylus" scoped>
</style>
