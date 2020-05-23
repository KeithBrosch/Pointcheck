<template>
  <div class="player-form">
      <loading :active.sync="isLoading"
        :can-cancel="true"
        :on-cancel="onCancel"
        :is-full-page="fullPage">
    </loading>
    <label>Gamertag 1</label>
    <br>
    <input type="text" v-model="gamertag1"/>
    <br>
    <br>
    <label>Gamertag 2</label>
    <br>
    <input type="text" v-model="gamertag2"/>
    <br>
    <div v-if="!(gamertag1.length && gamertag2.length)" class="info-container">
    <p class="info">* you must enter the CURRENT gamertag on the account</p>
    <p class="info">* only matches from before 2011 are recoverable</p>
    </div>
    <button v-if="gamertag1.length && gamertag2.length" @click="submit()"
    type="submit">Search</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';


export default {
  name: 'PlayerForm',
  data() {
    return {
      gamertag1: '',
      gamertag2: '',
      isLoading: false,
      fullPage: true,
    };
  },
  components: {
    Loading,
  },
  methods: {
    submit() {
      this.isLoading = true;
      // API call
      setTimeout(() => {
        this.isLoading = false;
      }, 5000);
    },
    onCancel() {
      console.log('User cancelled the loader.');
    },
  },
};
</script>

<style lang="css" scoped>
.player-form {
    width: 500px;
    height: 300px;
    padding: 50px;
    color: #fff;
    text-align: center;
}
input {
    width: 200px;
    height: 30px;
    padding: 5px 5px 5px 10px;
    margin: 10px 0;
}
.info-container {
    height: 80px;
}
.info {
    margin-top: 20px;
    font-size: .8em;
}
button {
    height: 40px;
    margin-top: 20px;
    width: 80px;
    background: transparent;
    border: 1px solid #fff;
    outline: none;
    color: #fff;
    cursor: pointer;
}
button:hover {
    background: rgb(22, 108, 191);
    border-color: rgb(22, 108, 191);
}
button:active {
    border-color: rgb(22, 108, 191)
}
</style>
