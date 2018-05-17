<template>
  <div>
    <form v-on:submit.prevent="addCar">
      <input type="text" name="make" placeholder="make" v-model="car.make">
      <input type="text" name="model" placeholder="model" v-model="car.model">
      <input type="number" name="year" placeholder="year" v-model="car.year">
      <input type="number" name="price" placeholder="price" v-model="car.price">
      <input type="text" name="description" placeholder="description" v-model="car.description">
      <input type="url" name="imgUrl" placeholder="imgUrl" v-model="car.imgUrl">
      <button type='submit'>Submit</button>
    </form>
    <div class="car" v-for="car in cars">
      <img :src="car.imgUrl">
      <h3>Make: {{car.make}}</h3>
      <h3>Model: {{car.model}}</h3>
      <h3>Year: {{car.year}}</h3>
      <h3>Price: {{car.price}}</h3>
      <p>Description {{car.description}}</p>
      <button @click="bid(car)">Bid</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    mounted(){
      this.$store.dispatch('getCars')
    },
    data() {
      return {
        car: {
          make: '',
          model: '',
          year: 'year',
          price: 'price',
          description: '',
          imgUrl: ''
        }
      }
    },
    computed: {
      cars(){
        return this.$store.state.cars
      }
    },
    methods: {
      addCar(){
        this.$store.dispatch('addCar', this.car)
      },
      bid(car){
        car.price *= 1.05
        this.$store.dispatch('editCar', car)
      }
    }
  }

</script>


<style scoped>
img{
  height: 200px;
}

</style>
