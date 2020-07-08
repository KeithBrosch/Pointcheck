<template>
    <div id="results" :class="[game === 'Halo 3' ? 'halo3' : '',
  game === 'Halo 2' ? 'halo2' : '', game === 'Halo Reach' ? 'haloReach' : '']">
        <div class="inner">
            <div class="tags">
                <div id="player1">
                    <h1>{{results.playerOneName}}</h1>
                    <!-- <div class="stats">
                        stats
                    </div> -->
                    <img :src="results.playerOneEmblem" alt="" class="emblem">
                </div>
                <div id="player2">
                    <h1>{{results.playerTwoName}}</h1>
                    <!-- <div class="stats">
                        stats
                    </div> -->
                    <img :src="results.playerTwoEmblem" alt="" class="emblem">
                </div>
            </div>
            <div class="matches">
                <div v-for="(match, index) in results.matchedGames" :key="index" class="match"
                :class="{'heretic' : match.map === 'Heretic',
                'foundry' : match.map === 'Foundry',
                'guardian' : match.map === 'Guardian',
                'narrows' : match.map === 'Narrows',
                'pit' : match.map === 'The Pit',
                'construct' : match.map === 'Construct'}"
                @click="openMatch(match.matchURL)">
                    <div class="p1-place">
                        {{winOrLoss(match.playerOnePlacing)}}
                    </div>
                    <div class="meta">
                        {{match.gametype}}
                        <br>
                        <p class="date">{{getTime(match.gamedate)}}</p>
                    </div>
                    <div class="p2-place">
                        {{winOrLoss(match.playerTwoPlacing)}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'Results',
  props: {
    results: Object,
    game: String,
  },
  mounted() {
    this.$emit('expandNav');
    const results = document.getElementById('results');
    results.style.opacity = '1';
  },
  methods: {
    openMatch(link) {
      window.open(link, '_blank');
    },
    winOrLoss(place) {
      if (place === 1) {
        return 'Win';
      } else if (place === 2) {
        return 'Loss';
      } return '';
    },
    getTime(utc) {
      console.log(utc);
      return moment.utc(utc).format('MMMM Do YYYY');
    },
  },
};
</script>

<style lang="scss" scoped>
#results {
    width: 100%;
    height: 100%;
    color: #fff;
    background-image:linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5));
    opacity: 0;
    transition: opacity 1s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    /* width */
            ::-webkit-scrollbar {
            width: 10px;
            margin-left: 5px;
            }
            /* Track */
            ::-webkit-scrollbar-track {
            background: transparent;
            }
            /* Handle */
            &.halo2 {
                ::-webkit-scrollbar-thumb {
                    background: #008000;
                }
            }
            &.halo3 {
                ::-webkit-scrollbar-thumb {
                    background: #166CBF;
                }
            }
            &.haloReach {
                ::-webkit-scrollbar-thumb {
                    background: #8b008b;
                }
            }
            /* Handle on hover */
            ::-webkit-scrollbar-thumb:hover {
            opacity: 0.7;
            }
    >.inner {
        height: 90%;
        width: 100%;
        >.tags {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            margin-bottom: 50px;
            >#player1 {
                text-align: center;
                flex: 1;
                height: 100%;
                >.stats {
                    background: transparent;
                    border: 1px solid #fff;
                    width: 50%;
                    margin: 0 auto;
                    padding: 20px 10px;
                }
            }
            >#player2 {
                text-align: center;
                flex: 1;
                height: 100%;
                >.stats {
                    background: transparent;
                    border: 1px solid #fff;
                    width: 50%;
                    margin: 0 auto;
                    padding: 20px 10px;
                }
            }
            .emblem {
                margin-top: 10px;
                border: 1px solid #fff;
                max-width: 72px;
                max-height: 72px;
            }
        }
        >.matches {
            width: 100%;
            overflow-y: scroll !important;
            overflow-x: hidden !important;
            height: 80%;
            padding: 10px 0;
            >.match {
                font-size: 2em;
                width: 90%;
                margin: 0 auto;
                border: 1px solid #fff;
                margin-bottom: 10px;
                height: 150px;
                background-size: cover;
                background-repeat: no-repeat;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: transform 0.3s ease-in-out;
                cursor: pointer;
                .p1-place, .p2-place {
                    flex: 2;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .meta {
                    flex: 8;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    .date {
                        font-size: .8rem;
                    }
                }
                &:hover {
                        transform: scale(1.05);
                    }
                &.heretic {
                    background:
                    linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
                    url('../assets/images/heretic.jpg');
                    background-position: 50% 100%;
                }
                &.narrows {
                    background:
                    linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
                    url('../assets/images/narrows.jpg');
                    background-position: bottom;
                    background-position: 10% 63%;
                }
                &.pit {
                    background:
                    linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
                    url('../assets/images/pit.jpg');
                    background-position: bottom;
                    background-position: 50% 55%;
                }
                &.guardian {
                    background:
                    linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
                    url('../assets/images/guardian.jpg');
                    background-position: bottom;
                    background-position: 50% 40%;
                }
                &.construct {
                    background:
                    linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
                    url('../assets/images/construct.jpg');
                    background-position: bottom;
                    background-position: 80% 25%;
                }
                &.foundry {
                    background:
                    linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
                    url('../assets/images/foundry.jpg');
                    background-position: bottom;
                    background-position: 50% 50%;
                }
            }
        }
    }
}
</style>
