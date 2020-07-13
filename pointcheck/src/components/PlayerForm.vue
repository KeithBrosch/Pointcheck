<template>
  <div v-if="!results" class="player-form" :class="[game === 'H3' ? 'halo3' : '',
  game === 'H2' ? 'halo2' : '', game === 'HR' ? 'haloReach' : '']">
  <div class="back" @click="back">home</div>
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
  <div v-else class="results">
    <div class="players">
      <div class="player1">
        <img :src="results.playerOneEmblem">
        <h1>{{results.playerOneName}}</h1>
      </div>
      <div class="player2">
        <img :src="results.playerTwoEmblem">
        <h1>{{results.playerTwoName}}</h1>
      </div>
    </div>
    <!-- <div v-if="game !== 'H2'" class="stats">
        <div class="against">
          <h2>against each other</h2>
          <div class="bar against">
            <div id="againstP1"></div>
            <div id="againstP2"></div>
          </div>
        </div>
        <div class="together">
          <h2>on same team</h2>
          <div class="bar together">
            <div id="togetherW"></div>
            <div id="togetherL"></div>
          </div>
        </div>
      </div> -->
      <div class="back" @click="back">home</div>
      <h1>matches</h1>
      <div class="matches">
        <div v-for="(match, index) of results.matchedGames"
        :key="index" class="match" @click="goTo(match.gameUrl)"
        :class="[match.map === 'Assembly' ? 'assembly' : '',
        match.map === 'Avalanche' ? 'avalanche' : '',
        match.map === 'Blackout' ? 'blackout' : '',
        match.map === 'Citadel' ? 'citadel' : '',
        match.map === 'Cold Storage' ? 'coldStorage' : '',
        match.map === 'Construct' ? 'construct' : '',
        match.map === 'Epitaph' ? 'epitaph' : '',
        match.map === 'Foundry' ? 'foundry' : '',
        match.map === 'Ghost Town' ? 'ghostTown' : '',
        match.map === 'Guardian' ? 'guardian' : '',
        match.map === 'Heretic' ? 'heretic' : '',
        match.map === 'High Ground' ? 'highGround' : '',
        match.map === 'Isolation' ? 'isolation' : '',
        match.map === 'Last Resort' ? 'lastResort' : '',
        match.map === 'Longshore' ? 'longshore' : '',
        match.map === 'Narrows' ? 'narrows' : '',
        match.map === 'Orbital' ? 'orbital' : '',
        match.map === `Rat's Nest` ? 'ratsNest' : '',
        match.map === 'The Pit' ? 'pit' : '',
        match.map === 'Sandbox' ? 'sandbox' : '',
        match.map === 'Sandtrap' ? 'sandtrap' : '',
        match.map === 'Snowbound' ? 'snowbound' : '',
        match.map === 'Standoff' ? 'standoff' : '',
        match.map === 'Valhalla' ? 'valhalla' : '',
        match.map === 'Ascension' ? 'ascension' : '',
        match.map === 'Backwash' ? 'backwash' : '',
        match.map === 'Beaver Creek' ? 'beaverCreek' : '',
        match.map === 'Burial Mounds' ? 'burialMounds' : '',
        match.map === 'Coagulation' ? 'coagulation' : '',
        match.map === 'Colossus' ? 'colossus' : '',
        match.map === 'Containment' ? 'containment' : '',
        match.map === 'Desolation' ? 'desolation' : '',
        match.map === 'District' ? 'district' : '',
        match.map === 'Elongation' ? 'elongation' : '',
        match.map === 'Foundation' ? 'foundation' : '',
        match.map === 'Gemini' ? 'gemini' : '',
        match.map === 'Headlong' ? 'headlong' : '',
        match.map === 'Ivory Tower' ? 'ivoryTower' : '',
        match.map === 'Lockout' ? 'lockout' : '',
        match.map === 'Midship' ? 'midship' : '',
        match.map === 'Relic' ? 'relic' : '',
        match.map === 'Sanctuary' ? 'sanctuary' : '',
        match.map === 'Terminal' ? 'terminal' : '',
        match.map === 'Tombstone' ? 'tombstone' : '',
        match.map === 'Turf' ? 'turf' : '',
        match.map === 'Uplift' ? 'uplift' : '',
        match.map === 'Warlock' ? 'warlock' : '',
        match.map === 'Waterworks' ? 'waterworks' : '',
        match.map === 'Zanzibar' ? 'zanzibar' : '',]">
        {{getMomentTime(match.gamedate)}}
        <br>
          {{match.map}}
          <br>
          {{match.gametype}}
        </div>
      </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'PlayerForm',
  props: [
    'game',
    'results',
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
    back() {
      this.$emit('back');
    },
    setBars() {
      console.log('setting bars');
      const p1 = document.getElementById('againstP1');
      const p2 = document.getElementById('againstP2');

      p1[0].style.width = '300px';
      p2[0].style.width = `${100 - 33}%`;
    },
    goTo(url) {
      window.open(url, '_blank');
    },
    getMomentTime(utc) {
      return moment(utc).format('MMMM Do YYYY ');
    },
  },
  // watch: {
  //   results() {
  //     this.setBars();
  //   },
  // },
  computed: {
    valid() {
      if (this.gamertag1.length && this.gamertag2.length
      && (this.gamertag1 !== this.gamertag2)) {
        return true;
      } return false;
    },
    totalGames() {
      if (this.results) {
        return this.results.length;
      } return 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.player-form {
    width: calc(100% - 20px);
    height: auto;
    padding: 10px;
    color: #fff;
    text-align: center;
    @media only screen and (min-width: 700) {
      width: calc(100% - 100px);
      padding: 50px;
    }
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
            width: 100%;
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

.results {
  width: 100vw;
  min-height: 100vh;
  overflow: scroll;
  height: 90vh;
  >.players {
    flex-direction: column;
    width: 70%;
    margin: 50px auto 0 auto;
    display: flex;
    justify-content: space-between;
    @media only screen and (min-width: 700px) {
      flex-direction: row;
    }
    >.player1 {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      img {
        margin-right: 10px;
        border: 1px solid #fff;
      }
      h1 {
           border-bottom: 2px solid crimson;
        }
    }
    >.player2 {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      img {
        margin-right: 10px;
        border: 1px solid #fff;
      }
      h1 {
           border-bottom: 2px solid dodgerblue;
        }
    }
  }
  >.stats {
    width: 70%;
    margin: 0 auto;
    h2 {
      text-align: center;
    }
    .bar {
      border: 1px solid white;
      height: 30px;
      width: 100%;
      margin: 10px 0;
      display: flex;
      #againstP1 {
        background: crimson;
        transition: width 0.3s ease-in-out;
      }
      #againstP2 {
        background: dodgerblue;
        transition: width 0.3s ease-in-out;
      }
      #togetherW {
        background: mediumorchid;
        transition: width 0.3s ease-in-out;
        flex: 5;
      }
      #togetherL {
        background: transparent;
        flex: 1;
      }
    }
  }
  h1 {
    text-align: center;
  }
  >.matches {
    width: 70%;
    margin: 0 auto 20px auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    &:after {
      width: {
        height: calc(100vw * .7 );
        width: calc(100vw * .7);
      content: 'duhh';
      background: red;
      }
    }
    >.match {
      cursor: pointer;
      text-align: center;
      margin: 10px 0;
      border: 1px solid white;
      height: calc(100vw * .7 );
      width: calc(100vw * .7);
      background: rgba(255,255,255,.5);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-shadow: 5px 10px rgba(255, 255, 255, .2);
      &:hover {
        height: calc((100vw * .7) + 10px );
        width: calc((100vw * .7) + 10px );
        margin: -5px;
      }
      @media only screen and (min-width: 700px) {
        height: calc(100vw * .7 * .45);
        width: calc(100vw * .7 * .45);
        &:hover {
        height: calc((100vw * .7 * .45) + 10px );
        width: calc((100vw * .7 * .45) + 10px );
        margin: -5px;
      }
      }
      @media only screen and (min-width: 1200px) {
        height: calc(100vw * .7 * .30);
        width: calc(100vw * .7 * .30);
        &:hover {
        height: calc((100vw * .7 * .30) + 10px );
        width: calc((100vw * .7 * .30) + 10px );
        margin: -5px;
      }
      }
      // h2 maps
      &.ascension {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Ascension.png');
        background-size: cover;
        background-position: center center;
      }
       &.backwash {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Backwash.jpg');
        background-size: cover;
        background-position: center center;
      }
       &.beaverCreek {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Beaver Creek.jpg');
        background-size: cover;
        background-position: center center;
      }
      &.burialMounds {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Burial Mounds.jpg');
        background-size: cover;
        background-position: center center;
      }
      &.coagulation {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Coagulation.jpg');
        background-size: cover;
        background-position: center center;
      }
      &.colossus {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Colossus.jpg');
        background-size: cover;
        background-position: center center;
      }
      &.containment {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Containment.jpg');
        background-size: cover;
        background-position: center center;
      }
      &.desolation {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Desolation.jpg');
        background-size: cover;
        background-position: center center;
      }
      &.containment {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Containment.jpg');
        background-size: cover;
        background-position: center center;
      }
      &.district {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/District.jpg');
        background-size: cover;
        background-position: center center;
      }
      &.elongation {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Elongation.jpg');
        background-size: cover;
        background-position: center center;
      }
      &.foundation {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Foundation.jpg');
        background-size: cover;
        background-position: center center;
      }
      &.gemini {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Gemini.jpg');
        background-size: cover;
        background-position: center center;
      }
       &.headlong {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Headlong.jpg');
        background-size: cover;
        background-position: center center;
      }
       &.ivoryTower {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Ivory Tower.jpg');
        background-size: cover;
        background-position: center center;
      }
      &.lockout {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Lockout.jpg');
        background-size: cover;
        background-position: center center;
      }
      &.midship {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Midship.jpg');
        background-size: cover;
        background-position: center center;
      }
      &.relic {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Relic.jpg');
        background-size: cover;
        background-position: center center;
      }
      &.sanctuary {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Sanctuary.jpg');
        background-size: cover;
        background-position: center center;
      }
      &.terminal {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Terminal.jpg');
        background-size: cover;
        background-position: center center;
      }
      &.tombstone {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Tombstone.jpg');
        background-size: cover;
        background-position: center center;
      }
      &.turf {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Turf.png');
        background-size: cover;
        background-position: center center;
      }
      &.uplift {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Uplift.jpg');
        background-size: cover;
        background-position: center center;
      }
      &.warlock {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Warlock.jpg');
        background-size: cover;
        background-position: center center;
      }
      &.waterworks {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Waterworks.jpg');
        background-size: cover;
        background-position: center center;
      }
      &.zanzibar {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Zanzibar.jpg');
        background-size: cover;
        background-position: center center;
      }
      // h3 maps
      &.assembly {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Assembly.jpg');
        background-size: cover;
        background-position: center center;
      }
      &.avalanche {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Avalanche.jpg');
        background-size: cover;
        background-position: center center;
      }
      &.blackout {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Blackout.jpg');
        background-size: cover;
        background-position: center center;
      }
      &.citadel {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Citadel.jpg');
        background-size: cover;
        background-position: center center;
      }
      &.coldStorage {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Cold Storage.jpg');
        background-size: cover;
        background-position: center center;
      }
      &.construct {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Construct.jpg');
        background-size: cover;
        background-position: center center;
      }
      &.epitaph {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Epitaph.jpg');
        background-size: cover;
        background-position: center center;
      }
      &.foundry {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Foundry.jpg');
        background-size: cover;
        background-position: center center;
      }
      &.ghostTown {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Ghost Town.jpg');
        background-size: cover;
        background-position: center center;
      }
      &.guardian {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Guardian.jpg');
        background-size: cover;
        background-position: center center;
      }
      &.heretic {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Heretic.jpg');
        background-size: cover;
        background-position: center center;
      }
      &.highGround {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/High Ground.jpg');
        background-size: cover;
        background-position: center center;
      }
      &.longshore {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Longshore.jpg');
        background-size: cover;
        background-position: center center;
      }
      &.narrows {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Narrows.jpg');
        background-size: cover;
        background-position: center center;
      }
      &.orbital {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Orbital.jpg');
        background-size: cover;
        background-position: center center;
      }
      &.ratsNest {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Rats Nest.jpg');
        background-size: cover;
        background-position: center center;
      }
      &.lastResort {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Last Resort.jpg');
        background-size: cover;
        background-position: center center;
      }
      &.pit {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/The Pit.jpg');
        background-size: cover;
        background-position: center center;
      }
      &.sandTrap {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Sandtrap.jpg');
        background-size: cover;
        background-position: center center;
      }
      &.sandbox {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Sandbox.jpg');
        background-size: cover;
        background-position: center center;
      }
      &.snowbound {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Snowbound.jpg');
        background-size: cover;
        background-position: center center;
      }
      &.standoff {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Standoff.jpg');
        background-size: cover;
        background-position: center center;
      }
      &.valhalla {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('../assets/images/Valhalla.jpg');
        background-size: cover;
        background-position: center center;
      }
      // reach maps
    }
  }
}
.back {
  text-align: center;
  cursor: pointer;
  margin-bottom: 20px;
}
</style>
