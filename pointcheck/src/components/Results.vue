<template>
    <div class="results">
        <div id="player1">
            player1
        </div>
        <div id="player2">
            player2
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
    const player1Div = document.getElementById('player1');
    player1Div.style.marginTop = 0;
    const player2Div = document.getElementById('player2');
    player2Div.style.marginTop = 0;
  },
};
</script>

<style lang="scss" scoped>
.results {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    >#player1 {
        text-align: center;
        background: blue;
        flex: 1;
        height: 100%;
        margin-top: 200vh;
        transition: margin .4s ease-in-out;
        transition-delay: .8s;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    >#player2 {
        background: green;
        text-align: center;
        flex: 1;
        height: 100%;
        margin-top: -200vh;
        transition: margin .4s ease-in-out;
        transition-delay: 1.2s;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>
