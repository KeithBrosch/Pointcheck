<template>
    <div id="results">
        <div class="inner">
            <div class="tags">
                <div id="player1">
                    <h1>{{results.player1.name}}</h1>
                    <div class="stats">
                        stats
                    </div>
                </div>
                <div id="player2">
                    <h1>{{results.player2.name}}</h1>
                    <div class="stats">
                        stats
                    </div>
                </div>
            </div>
            <div class="matches">
                <div v-for="(match, index) in results.matches" :key="index" class="match"
                :class="{'heretic' : match.map === 'Heretic',
                'foundry' : match.map === 'Foundry',
                'guardian' : match.map === 'Guardian',
                'narrows' : match.map === 'Narrows',
                'pit' : match.map === 'The Pit',
                'construct' : match.map === 'Construct'}"
                @click="openMatch(match.link)">
                    {{match.map}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Results',
  props: {
    results: Object,
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
            ::-webkit-scrollbar-thumb {
            background: rgb(22, 108, 191);
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
        }
        >.matches {
            width: 100%;
            overflow-y: scroll !important;
            overflow-x: hidden !important;
            height: 80%;
            padding: 10px 0;
            >.match {
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
                &:hover {
                        transform: scale(1.05);
                    }
                &.heretic {
                    background: url('../assets/images/heretic.jpg');
                    background-position: 50% 100%;
                }
                &.narrows {
                    background: url('../assets/images/narrows.jpg');
                    background-position: bottom;
                    background-position: 10% 63%;
                }
                &.pit {
                    background: url('../assets/images/pit.jpg');
                    background-position: bottom;
                    background-position: 50% 55%;
                }
                &.guardian {
                    background: url('../assets/images/guardian.jpg');
                    background-position: bottom;
                    background-position: 50% 40%;
                }
                &.construct {
                    background: url('../assets/images/construct.jpg');
                    background-position: bottom;
                    background-position: 80% 25%;
                }
                &.foundry {
                    background: url('../assets/images/foundry.jpg');
                    background-position: bottom;
                    background-position: 50% 50%;
                }
            }
        }
    }
}
</style>
