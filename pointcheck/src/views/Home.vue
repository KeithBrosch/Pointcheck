<template>
  <div class="home">
    <nav>
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
      <PlayerForm/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PlayerForm from '@/components/PlayerForm.vue';

export default {
  name: 'Home',
  components: {
    PlayerForm,
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
  width: 400px;
  background: #fff;
  height: 100%;
  box-shadow: 2px 0 5px -2px #000;
  transition: margin .5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -350px;
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
