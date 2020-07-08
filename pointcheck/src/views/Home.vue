<template>
  <div class="home" :class="[game === 'Halo 3' ? 'halo3' : '',
  game === 'Halo 2' ? 'halo2' : '', game === 'Halo Reach' ? 'haloReach' : '']">
  <loading v-if="game === 'Halo 2'"
    :active.sync="isLoading"
        :is-full-page="fullPage"
        color="#008000">
    </loading>
    <loading v-else-if="game === 'Halo 3'"
    :active.sync="isLoading"
        :is-full-page="fullPage"
        color="#166CBF">
    </loading>
    <loading v-else-if="game === 'Halo Reach'"
    :active.sync="isLoading"
        :is-full-page="fullPage"
        color="#8b008b">
    </loading>
    <nav id="nav">
      <div class="nav-content">
        <div class="headline">
          <h1 :class="[game === 'Halo 2' ? 'halo2' : '',
          game === 'Halo 3' ? 'halo3' : '',
          game === 'Halo Reach' ? 'haloReach' : '']">
            Pointcheck
            </h1>
        </div>
      <div class="details">
        <div class="game" @click="game = 'Halo 2'" :class="{'active' : game === 'Halo 2'}">
          Halo 2
          </div>
        <div class="game" @click="game = 'Halo 3'" :class="{'active' : game === 'Halo 3'}">
          Halo 3
          </div>
        <div class="game" @click="game = 'Halo Reach'" :class="{'active' : game === 'Halo Reach'}">
          Halo Reach
          </div>
      </div>
      <div class="footer">created by <a href="https://twitter.com/keithbrosch" target="blank">@keithbrosch</a> and <a href="https://twitter.com/kifflom" target="blank">@kifflom</a>
      <br><br> <a href="#"><center>donate</center></a></div>
      </div>
    </nav>
    <div class="content">
      <PlayerForm v-if="!showResults" v-on:submit="submit($event)" :game="game"/>
      <Results @expandNav="expandNav()" v-if="showResults" :results="results" :game="game"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PlayerForm from '@/components/PlayerForm.vue';
import Results from '@/components/Results.vue';

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  name: 'Home',
  components: {
    PlayerForm,
    Loading,
    Results,
  },
  methods: {
    submit(gamertags) {
      if (gamertags && gamertags.length === 2) {
        this.isLoading = true;
        // API call
        // store data in this.results
        setTimeout(() => {
          this.showResults = true;
          this.isLoading = false;
        }, 3000);
      } else {
        // handle error
      }
    },
    expandNav() {
      const nav = document.getElementById('nav');
      nav.style.marginLeft = 0;
    },
  },
  data() {
    return {
      gamertag1: '',
      gamertag2: '',
      isLoading: false,
      fullPage: true,
      showResults: false,
      game: 'Halo 3',
      results: {
        playerOneName: 'LegendJRG',
        playerOneEmblem: 'https://halo.bungie.net/Stats/emblem.ashx?s=70&0=11&1=11&2=5&3=3&fi=24&bi=12&fl=1&m=0',
        playerTwoName: 'Technicity',
        playerTwoEmblem: 'https://halo.bungie.net/Stats/emblem.ashx?s=70&0=11&1=4&2=3&3=4&fi=38&bi=0&fl=0&m=0',
        matchedGames: [
          {
            gameID: 774205526,
            map: 'Midship',
            playlist: 'Arranged Game',
            gametype: 'Oddball',
            gamedate: '2007-10-04T22:40:39',
            playerOnePlacing: null,
            playerTwoPlacing: null,
            playerOneKD: null,
            playerTwoKD: null,
            matchURL: 'https://halo.bungie.net/Stats/GameStatsHalo2.aspx?gameid=774205526',
          },
          {
            gameID: 774204471,
            map: 'Warlock',
            playlist: 'Arranged Game',
            gametype: 'Ctf',
            gamedate: '2007-10-04T22:24:30',
            playerOnePlacing: null,
            playerTwoPlacing: null,
            playerOneKD: null,
            playerTwoKD: null,
            matchURL: 'https://halo.bungie.net/Stats/GameStatsHalo2.aspx?gameid=774204471',
          },
          {
            gameID: 774204471,
            map: 'Warlock',
            playlist: 'Arranged Game',
            gametype: 'Ctf',
            gamedate: '2007-10-04T22:24:30',
            playerOnePlacing: null,
            playerTwoPlacing: null,
            playerOneKD: null,
            playerTwoKD: null,
            matchURL: 'https://halo.bungie.net/Stats/GameStatsHalo2.aspx?gameid=774204471',
          },
          {
            gameID: 774204471,
            map: 'Warlock',
            playlist: 'Arranged Game',
            gametype: 'Ctf',
            gamedate: '2007-10-04T22:24:30',
            playerOnePlacing: null,
            playerTwoPlacing: null,
            playerOneKD: null,
            playerTwoKD: null,
            matchURL: 'https://halo.bungie.net/Stats/GameStatsHalo2.aspx?gameid=774204471',
          },
          {
            gameID: 774204471,
            map: 'Warlock',
            playlist: 'Arranged Game',
            gametype: 'Ctf',
            gamedate: '2007-10-04T22:24:30',
            playerOnePlacing: null,
            playerTwoPlacing: null,
            playerOneKD: null,
            playerTwoKD: null,
            matchURL: 'https://halo.bungie.net/Stats/GameStatsHalo2.aspx?gameid=774204471',
          },
        ],

      },
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  /* background-image: linear-gradient(to right bottom, #d16ba5, #c777b9, #ba83ca,
  #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1); */
  background-position: center center;
  background-size: cover;
  display: flex;
  height: 100vh;
  width: 100vw;
  /* overflow: hidden; */
  &.halo2 {
    background: linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(0, 128, 0, 0.3)),
  url('../assets/images/sanctuary.jpg');
  background-position: 50% 70%;
  }
  &.halo3 {
    background: linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(22, 108, 191, 0.7)),
  url('../assets/images/Narrows01.jpg');
  }
  &.haloReach {
    background: linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(139,0,139, 0.5)),
  url('../assets/images/zealot.jpg');
  }
}
nav {
  width: 33%;
  background: #fff;
  height: 100%;
  box-shadow: 2px 0 5px -2px #000;
  transition: margin .5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -30%;
}
nav:hover {
  margin-left: 0;
  transition: margin .5s ease-in-out;
}
.nav-content {
  height: 90%;
  padding: 0 20px;
}
h1, h2, h3, p, span, ul {
  height: auto;
   padding: 0 20px;
}
.headline {
  height: 20%;
  text-align: center;
}
.headline h1 {
  font-size: 2em;
  font-weight: 700;
  &.halo2 {
    color: rgba(0, 128, 0, 1);
  }
  &.halo3 {
    color: rgba(22, 108, 191, 1);
  }
  &.haloReach {
    color: rgba(139,0,139, 1);
  }
}
.details   {
  height: 70%;
  padding: 0 20px;
  text-align: center;
  .game {
    cursor: pointer;
  &.active {
    font-weight: bold;
  }
  }
}
.name {
  font-weight: 700;
}
.footer {
  height: 10%;
  font-size: 14px;
}
.footer a {
  text-decoration: none;
}
.content {
  flex: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
