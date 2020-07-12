<template>
  <div class="player-form" :class="[game === 'H3' ? 'halo3' : '',
  game === 'H2' ? 'halo2' : '', game === 'HR' ? 'haloReach' : '']">
    <label>Gamertag 1</label>
    <br>
    <input type="text" v-model="gamertag1" maxlength="20"/>
    <br>
    <br>
    <label>Gamertag 2</label>
    <br>
    <input type="text" v-model="gamertag2" maxlength="20"/>
    <br>
    <div v-if="game !== 'H2'" class="toggles">
                <div class="customs">Show Custom Games
                    <div class="toggle" :class="{'on' : showCustoms}"
                    @click="showCustoms = !showCustoms">
                        <div class="toggle-inner"></div>
                        </div>
                    </div>
            </div>
    <div v-if="!valid" class="info-container">
    <p class="info">* you must enter the CURRENT gamertag of the account</p>
    <p class="info" v-if="game === 'H3' ||
    game === 'H2'">* only matches from before 2011 are recoverable</p>
    </div>
    <button v-if="(valid)"
    @click="submit()"
    :class="[game === 'H2' ? 'halo2' : '', game === 'H3' ? 'halo3' : ''
    , game === 'HR' ? 'haloReach' : '']"
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
      showCustoms: false,
    };
  },
  methods: {
    submit() {
      this.$emit('submit', [this.gamertag1, this.gamertag2, this.showCustoms]);
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

<style lang="scss" scoped>
.player-form {
    width: 500px;
    height: 300px;
    padding: 50px;
    color: #fff;
    text-align: center;
@media only screen and (min-width: 1800px) {
  width: auto;
}
    &.halo2 {
       .toggle-inner {
        background: rgb(255, 34, 129);
      }
    }
    &.halo3 {
      .toggle-inner {
        background: rgb(113, 34, 250);
      }
    }
    &.haloReach {
      .toggle-inner {
        background: rgb(1, 31, 253);
      }
    }
    >.toggles {
            width: 90%;
            margin: 10px auto;
            display: flex;
            align-items: center;
            justify-content: center;
            >.customs {
                display: flex;
                align-items: center;
            }
            .toggle {
                width: 50px;
                margin: 0 5px;
                border-radius: 10px;
                height: 20px;
                display: flex;
                align-items: center;
                cursor: pointer;
                background-color: rgba(255,255,255,.5);
                transition: background-color .3s ease-in-out;
                .toggle-inner {
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    margin-left: 2px;
                    transition: margin .3s ease-in-out;
                }
                 &.on {
                     background-color: rgba(255,255,255,1);
                     transition: background-color .3s ease-in-out;
                     .toggle-inner {
                        margin-left: 30px;
                        transition: margin .3s ease-in-out;
                     }
                    }
            }
        }
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
    &.halo2 {
      &:hover {
        background: rgb(255, 34, 129);
        background: rgb(255, 34, 129);
      }
      &:active {
          background: rgb(255, 34, 129);
      }
    }
    &.halo3 {
      &:hover {
        background: rgb(113, 34, 250);
        background: rgb(113, 34, 250);
      }
      &:active {
          background: rgb(113, 34, 250);
      }
    }
    &.haloReach {
      &:hover {
        background: rgb(1, 31, 253);
        background: rgb(1, 31, 253);
      }
      &:active {
          background: rgb(1, 31, 253);
      }
    }
}
@media only screen and (min-width: 1800px) {
  *{
  font-size: 2rem;
  }
}
</style>
