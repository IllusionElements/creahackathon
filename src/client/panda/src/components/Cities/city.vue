<template>
  <div>
    <CityDisplay
      v-on:findCity="onChange"
    />
  </div>
</template>

<script>
  import Vue from 'vue'
  const cities = {
    validator: (value) =>
      value.every(
        ({ _id, city }) => typeof _id === 'string' && typeof city === 'string'
      )
  }

  Vue.component('CityDisplay', {
    props: {
      cities
    },
    data: {
      cities: [],
    },
    methods: {
      onChange(city) {
        this.cities = this.$props.cities.filter(({ city: cityName })=> cityName === city )
      }
    },
    template: `
      <div class="city">
        <slot v-bind:post="post"></slot>
      </div>
    `
  })
</script>
