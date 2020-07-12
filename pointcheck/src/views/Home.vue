<template>
  <div class="home">
     <loading v-if="game === 'H2'"
    :active.sync="isLoading"
        :is-full-page="fullPage"
        color="rgb(255, 34, 129)">
    </loading>
    <loading v-else-if="game === 'H3'"
    :active.sync="isLoading"
        :is-full-page="fullPage"
        color="rgb(113, 34, 250)">
    </loading>
    <loading v-else-if="game === 'HR'"
    :active.sync="isLoading"
        :is-full-page="fullPage"
        color="rgb(1, 31, 253)">
    </loading>
    <div class="nav">
      <vue-particles class="particles"
        color="#fff"
        :particleOpacity="0.7"
        :particlesNumber="100"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
      <div v-if="!halo2Opened &&
      !halo3Opened &&
      !donateOpened &&
      !haloreachOpened"
      class="headline">
        <h1>pointcheck</h1>
      </div>
      <div class="games">
        <div v-if="!halo3Opened && !haloreachOpened && !donateOpened" class="game halo2"
        :class="{'opened' : halo2Opened === true}"
        @click="halo2Opened = true">
          <div class="inner">
            <h2 v-if="!halo2Opened">halo 2</h2>
          <div v-else class="inner">
            <PlayerForm :game="game" @submit="submit($event)"/>
            <div :class="{hide : !showError}" class="error">{{note}}</div>
          </div>
            </div>
        </div>
        <div v-if="!halo2Opened && !haloreachOpened && !donateOpened" class="game halo3"
        :class="{'opened' : halo3Opened === true}"
        @click="halo3Opened = true">
        <div class="inner">
        <h2 v-if="!halo3Opened">halo 3</h2>
          <div v-else class="inner">
            <PlayerForm :game="game" @submit="submit($event)"/>
            <div v-if="showError" class="error">{{note}}</div>
          </div>
        </div>
        </div>
        <div v-if="!halo3Opened && !halo2Opened && !donateOpened" class="game haloreach"
        :class="{'opened' : haloreachOpened === true}"
        @click="haloreachOpened = true">
            <div class="inner">
            <h2 v-if="!haloreachOpened">halo: reach</h2>
            <div v-else class="inner">
              <PlayerForm :game="game" @submit="submit($event)"/>
              <div v-if="showError" class="error">{{note}}</div>
            </div>
            </div>
        </div>
        <!-- <div v-if="!halo3Opened && !halo2Opened && !haloreachOpened" class="game donate"
        :class="{'opened' : donateOpened === true}"
        @click="donateOpened = true">
          <div class="inner">
            <h2 v-if="!donateOpened">donate</h2>
          <div v-else class="inner">
          </div>
          </div>
        </div> -->
    </div>
    <div :class="{'hide': halo2Opened || halo3Opened || haloreachOpened}" class="footer">Created by
    <a href="https:twitter.com/keithbrosch" target="blank">@keithbrosch</a>
    & <a href="https:twitter.com/kifflom" target="blank">@kifflom</a>
    | <a href="#" target="blank">donate</a>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios';
import Loading from 'vue-loading-overlay';
import PlayerForm from '../components/PlayerForm.vue';

import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  name: 'Home',
  components: {
    PlayerForm,
    Loading,
  },
  computed: {
    game() {
      if (this.halo2Opened) {
        return 'H2';
      } else if (this.halo3Opened) {
        return 'H3';
      } else if (this.haloreachOpened) {
        return 'HR';
      } return null;
    },
  },
  methods: {
    submit(event) {
      const gamertag1 = event[0];
      const gamertag2 = event[1];
      const showCustoms = event[2];

      this.isLoading = true;
      // eslint-disable-next-line key-spacing
      axios.get(`https://pointcheckapi.azurewebsites.net/api/pointcheck/scrape/${this.game}/${gamertag1}&${gamertag2}`, { headers: { getCustoms: showCustoms } })
        .then((response) => {
          console.log(response.data);
          // show error note
          if (response && response.data.note && response.data.note.includes('has no Bungie.net games for')) {
            this.note = response.data.note;
            this.showError = true;
          } else {
            this.results = response.data;
          }
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
  data() {
    return {
      halo3Opened: false,
      halo2Opened: false,
      haloreachOpened: false,
      donateOpened: false,
      isLoading: false,
      fullPage: true,
      note: null,
      results: null,
      showError: false,
      showReults: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  min-width: 100vw;
  min-height: 100vh;
  .nav {
    width: 100vw;
    height: 100vh;
    background-image:
    linear-gradient(to bottom, rgba(113, 34, 250, 0.52), rgba(117, 213, 253, 0.23)),
     url('../assets/images/310371.jpg');
     background-position: 20% top;
     background-repeat: no-repeat;
     background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .headline {
      color: white;
      h1 {
        font-size: 3rem;
        margin: 0 0 50px 0;
        @media only screen and (min-width: 568px) {
          font-size: 4rem;
        }
        @media only screen and (min-width: 1440px) {
          font-size: 5rem;
        }
        @media only screen and (min-width: 1800px) {
          font-size: 10rem;
        }
      }
    }
    .games {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      margin: 0 50px;
      .game {
        width: 150px;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        cursor: pointer;
        transition: width  0s ease;
        transition: height  0s ease;
        // border-radius: 50%;
        border: 2px solid white;
        margin: 25px;
        z-index: 101;
        &:hover {
          min-width: 156px;
          min-height: 156px;
          margin: 22px
        }
        &.opened {
          box-shadow: none;
          width: 100vw;
          height: 100vh;
          border-radius: 0;
          transition: width  0.3s ease-in-out;
          transition: height  0.3s ease-in-out;
          border: none;
          margin: 0;
          cursor: default;
        }
        &.halo2 {
          background-color: rgba(255, 34, 129, .7);
          box-shadow: 5px 10px rgba(255, 34, 129, .2);
        }
        &.halo3 {
          background-color: rgba(113, 34, 250, .7);
          box-shadow: 5px 10px rgba(113, 34, 250, .2);
        }
        &.haloreach {
          background-color: rgba(1, 31, 253, .7);
          box-shadow: 5px 10px rgba(1, 31, 253, .2);
        }
        &.donate {
          background-color: rgba(117, 213, 253, .7);
          box-shadow: 5px 10px rgba(117, 213, 253, .2);
        }
        .inner {
          z-index: 101;
          @media only screen and (min-width: 1800px) {
          h2 {
            font-size: 2rem;
          }
        }
        .error {
          color: white;
          text-align: center;
          &.hide {
            opacity: 0;
            pointer-events: none;
          }
        }
        }
        @media only screen and (min-width: 1800px) {
          width: 250px;
          height: 250px;
        }
      }
    }
    .footer {
      z-index: 102;
      color: white;
      background: rgba(0,0,0,0.2);
      a {
        text-decoration: none;
        color: white;
        cursor: pointer;
      }
      &.hide {
        display: none;
      }
      @media only screen and (min-width: 1440px) {
          margin-top: 20px;
        }
    }
  }
  .content {
    background: #ff2281;
    color: white;
  }
}
.particles {
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 100;
}
</style>
