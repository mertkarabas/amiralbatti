<template>
  <div>
    <router-link to="/"> <button id=anasayfayadön ref=mybutton type="button"><i class="fa-solid fa-backward"></i></button></router-link>
    <Board></Board>
    <div id="gemiler">
    <div id="muhrip1" draggable="true"  @dragstart="dragStart" >1</div>
    <div id="muhrip2" draggable="true" @dragstart="dragStart">1</div>
    <div id="muhrip3"draggable="true" @dragstart="dragStart">1</div>
    <div id="muhrip4"draggable="true" @dragstart="dragStart">1</div>
    <div id="muhrip5" draggable="true"  @dragstart="dragStart" >1</div>
    </div>
  </div>
</template>

<script>
import Board from "./board.vue";
import draggable from 'vuedraggable';
export default {
  components: {
    Board,
    draggable
  },
  data() {
    return {}
  },
  mounted() {
    for (let i = 0; i < 5; i++) {// Sayfa yenilendiğinde çalışmasını istediğiniz fonksiyonu burada çağırın
      this.placeship();
    }
  },
  methods: {
    dragStart(event) {
      event.dataTransfer.setData('text/plain', event.target.id);
    },
    dragOver(event) {
      event.preventDefault();
    },
    drop(event) {
      event.preventDefault();
      const shipId = event.dataTransfer.getData('text/plain');
      const ship = document.getElementById(shipId);
      event.target.appendChild(ship);
    },
    placeship() {
      const computerboard = document.querySelectorAll(".board2 .cell")
      let randomindex = Math.floor(Math.random() * 100)

      const muhrip13 = document.createElement("div");
      muhrip13.className = "muhrip13";
      computerboard[Number(randomindex)].appendChild(muhrip13)
    },
  }
}
</script>

<style>
#anasayfayadön{
  padding:20px;
  border-radius: 10px;
  float:left;
  margin-left:30px;
  margin-top:20px;
}
#gemiler{
  display:inline-flex;
  float:left;
  margin-left: 150px;
}
#muhrip1{
  margin:10px;
  width:40px;
  height:40px;
  background-color: blue;
  }
#muhrip2{
    margin:10px;
    width:40px;
    height:40px;
    background-color: blue;
}
#muhrip3{
      margin:10px;
      width:40px;
      height:40px;
      background-color: blue;
}
#muhrip4{
  margin:10px;
  width:40px;
  height:40px;
  background-color: blue;
}
#muhrip5{
  margin:10px;
  width:40px;
  height:40px;
  background-color: blue;
}
#start {
  border-radius: 10px;
  padding: 20px;
  margin-top: 90px;
  margin-left: 120;
}
.muhrip13{
  margin:10px;
  width:40px;
  height:40px;
  background-color: #e0e0e0;
}
</style>
