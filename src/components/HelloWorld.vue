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

    <form v-on:submit.prevent="addHome">
      <input type="number" name="bedroom" placeholder="bedroom" v-model="home.bedroom">
      <input type="number" name="bathroom" placeholder="bathroom" v-model="home.bathroom">
      <input type="url" name="imgUrl" placeholder="imgUrl" v-model="home.imgUrl">
      <input type="number" name="level" placeholder="level" v-model="home.level">
      <input type="number" name="year" placeholder="year" v-model="home.year">
      <input type="number" name="price" placeholder="price" v-model="home.price">
      <input type="text" name="description" placeholder="description" v-model="home.description">
      <button type='submit'>Submit</button>
    </form>

    <form v-on:submit.prevent="addJob">
      <input type="text" name="company" placeholder="company" v-model="job.company">
      <input type="text" name="jobTitle" placeholder="jobTitle" v-model="job.jobTitle">
      <input type="number" name="hour" placeholder="hour" v-model="job.hour">
      <input type="number" name="rate" placeholder="rate" v-model="job.rate">
      <input type="text" name="description" placeholder="description" v-model="job.description">
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
      <button @click="deleteCar(car)">Sold!</button>
    </div>

    <div class="home" v-for="home in homes">
        <h3>Bedrooms: {{home.bedroom}}</h3>
        <h3>Bathrooms: {{home.bathroom}}</h3>
        <img :src="home.imgUrl">
        <h3>Levels: {{home.level}}</h3>
        <h3>Years: {{home.years}}</h3>
        <h3>Price: {{home.price}}</h3>
        <p>Description: {{home.description}}</p>
        <button @click="bid(home)">Bid</button>
        <button @click="deleteHome(home)">Sold!</button>
      </div>

    <div class="job" v-for="job in jobs">
        <img :src="job.imgUrl">
        <h3>Company: {{job.Company}}</h3>
        <h3>Job Title: {{job.jobTitle}}</h3>
        <h3>Hours: {{job.hour}}</h3>
        <h3>Rate: {{job.rate}}</h3>
        <p>Description {{job.description}}</p>
        <button @click="bid(job)">Bid</button>
        <button @click="deleteCar(job)">Sold!</button>
      </div>

  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    mounted() {
      this.$store.dispatch('getCars')
      this.$store.dispatch('getHomes')
      this.$store.dispatch('getJobs')
    },

    data() {
      return {
        car: {
          make: '',
          model: '',
          year: '',
          price: '',
          description: '',
          imgUrl: ''
        }, 
      home: {
        bedroom: '',
        bathroom: '',
        imgUrl: '',
        year: '',
        level: '',
        price: '',
        description: '',
      },
      job: {
        company: '',
        jobTitle: '',
        hours: '',
        rate: '',
        description: '',
      }

      }
    },

    computed: {
      cars() {
        return this.$store.state.cars
      },
      homes() {
        return this.$store.state.homes
      },
      jobs() {
        return this.$store.state.jobs
      }
    },

    methods: {
      addCar() {
        this.$store.dispatch('addCar', this.car)
      },
      bid(car) {
        car.price *= 1.05
        this.$store.dispatch('editCar', car)
      },
      deleteCar(car) {
        this.$store.dispatch('deleteCar', car)
      },

      addHome() {
        this.$store.dispatch('addHome', this.home)
      },
      bid(home) {
        home.price *= 1.05
        this.$store.dispatch('editHome', home)
      },
      deleteHome(home) {
        this.$store.dispatch('deleteHome', home)
      },
    
      addJob() {
        this.$store.dispatch('addJob', this.job)
      },
      bid(job) {
        job.price *= 1.05
        this.$store.dispatch('editJob', job)
      },
      deleteHome(job) {
        this.$store.dispatch('deleteJob', job)
      }
    }
  }

</script>

<style scoped>
  img {
    height: 200px;
  }
</style>