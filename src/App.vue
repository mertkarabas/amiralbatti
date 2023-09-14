<template>
  <router-view></router-view>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style>
#bodya {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: darkslategray;
  display: flex;
  justify-content: center;
  align-items: center;
}
#girişkısmı{
  height: 500px;
  width: 50%;
  background-color: red;
  margin-top: 50px;
  border-radius: 10px;
}
#logo {
  height: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: 'Inconsolata', monospace;
  font-family: 'Press Start 2P', cursive;
  font-size: 50px;
}
img{
  width: 100%;
  height: 100%;
}
#oneortwoplayer{
  height: 45%;
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Inconsolata', monospace;
  font-family: 'Press Start 2P', cursive;
}
#players1{
  padding:20px;
  margin:30px;
  border-radius: 10px;
  width:60px;
}

#players2{
  padding:20px;
  margin:30px;
  border-radius: 10px;

}

</style>
