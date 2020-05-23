<template>
  <div class="home">
    <loading :active.sync="isLoading"
        :is-full-page="fullPage"
        color="#166CBF">
    </loading>
    <nav id="nav">
      <div class="nav-content">
        <div class="headline">
          <h1>Pointcheck</h1>
        </div>
      <div class="details">some stuff goes here</div>
      <div class="footer">created by <a href="https://twitter.com/keithbrosch" target="blank">@keithbrosch</a> and <a href="https://twitter.com/kifflom" target="blank">@kifflom</a>
      <br><br> <a href="#"><center>donate</center></a></div>
      </div>
    </nav>
    <div class="content">
      <PlayerForm v-if="!showResults" v-on:submit="submit($event)"/>
      <Results @expandNav="expandNav()" v-if="showResults" :results="results"/>
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
      results: {
        playerOneName: 'Kifflom',
        playerOneKd: 200,
        playerOneWinPercent: 1,
        playerTwoName: 'Infury',
        playerTwoKd: -1,
        playerTwoWinPercent: 0.99,
        matchedGames: [
          {
            gameID: 100,
            map: 'The Pit',
            playlist: null,
            gametype: 'CTF 3Flag',
            gamedate: '2010-02-02T00:00:00',
          },
          {
            gameID: 200,
            map: 'Narrows',
            playlist: null,
            gametype: 'CTF 3Flag',
            gamedate: '2010-04-02T00:00:00',
          },
          {
            gameID: 3400,
            map: 'Heretic',
            playlist: null,
            gametype: 'Slayer',
            gamedate: '2011-04-02T00:00:00',
          },
        ],
      },
    };
  },
};
</script>

<style lang="css" scoped>
.home {
  /* background-image: linear-gradient(to right bottom, #d16ba5, #c777b9, #ba83ca,
  #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1); */
  background: linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(22, 108, 191, 0.7)),
  url('../assets/images/Narrows01.jpg');
  background-position: center center;
  background-size: cover;
  display: flex;
  height: 100vh;
  width: 100vw;
  /* overflow: hidden; */
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
}
.headline h1 {
  font-size: 2em;
  font-weight: 700;
}
.details   {
  height: 70%;
  padding: 0 20px;
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
