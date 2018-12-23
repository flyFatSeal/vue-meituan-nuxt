export const getChangeCity = {
  computed: {
    isChangeCity() {
      return this.$store.state.geo.position.city
    }
  },
  watch: {
    isChangeCity(newCity) {
      this.setHot()
    }
  },
}
