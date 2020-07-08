<template>
  <div class="player-form">
    <label>Gamertag 1</label>
    <br>
    <input type="text" v-model="gamertag1"/>
    <br>
    <br>
    <label>Gamertag 2</label>
    <br>
    <input type="text" v-model="gamertag2"/>
    <br>
    <div v-if="!valid" class="info-container">
    <p class="info">* you must enter the CURRENT gamertag of the account</p>
    <p class="info" v-if="game === 'Halo 3'">* only matches from before 2011 are recoverable</p>
    </div>
    <button v-if="(valid)"
    @click="submit()"
    type="submit">Search</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'PlayerForm',
  props: [
    'game',
  ],
  data() {
    return {
      gamertag1: '',
      gamertag2: '',
    };
  },
  methods: {
    submit() {
      this.$emit('submit', [this.gamertag1, this.gamertag2]);
    },
  },
  computed: {
    valid() {
      if (this.gamertag1.length && this.gamertag2.length
      && (this.gamertag1 !== this.gamertag2)) {
        return true;
      } return false;
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
