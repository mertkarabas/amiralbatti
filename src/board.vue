<template>
  <div id="main">
    <button id="start" @click="enableClick" type="button">Start</button>
    <button id="start" @click="endgame" type="button">endgame</button>

    <div class="board1" @dragover="dragOver" @drop="drop">
      <div class="row" v-for="row in 10" :key="row">
        </div>
        <div
          class="cell"
          v-for="index in 100"
          :key="index"
          :class="'cell cell' + index"
          :data-index="index"
          >
          </div>
        </div>
  <div class="board2"  v-bind:style="{ 'pointer-events': isElementClickable ? 'auto' : 'none' }">

    <div class="row"
         v-for="row in 10"
         :key="row">
    </div>
    <div
      class="cell"
      v-for="index in 100"
      :key="index"
      :class="'cell cell' + index"
      :data-index="index"
      @click="highlightCellAndChild"
    >
    </div>
  </div>
  </div>
</template>

<script>
export default{
  data () {
    return {
      isElementClickable: false
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
    highlightCellAndChild(event) {
      const cell = event.target; // Tıklanan hücreyi seçin
      const childElement = cell.querySelector("div"); // Hücrenin içindeki çocuk öğeyi bulun
      const playerboard=document.querySelectorAll(".board1 .cell")
      let fireindex=Math.floor(Math.random() * 100)
      const childElementcell = playerboard[Number(fireindex)]
      const childElement2= playerboard[Number(fireindex)].querySelector("div");


      if (childElement) {
        cell.style.backgroundColor = "red";
        childElement.style.backgroundColor = "red";

        if(childElement2){
          childElement2.style.backgroundColor="red";
          childElementcell.style.backgroundColor="red";


        }
        else if(!childElement2){
          childElementcell.style.backgroundColor="yellow";
        }




      }
      else{
        cell.style.backgroundColor="yellow"

        if(childElement2){
          childElement2.style.backgroundColor="red";
          childElementcell.style.backgroundColor="red";

        }
        else if(!childElement2){

          childElementcell.style.backgroundColor="yellow";
        }

      }
    },
    enableClick: function () {
      this.isElementClickable = true;


    },


    endgame() {
      const muhrip13Cells = document.querySelectorAll(".board2 .cell .muhrip13");
      let kazandin = true; // Başlangıçta kazandığımızı varsayalım



      muhrip13Cells.forEach(cellDiv => {
        if (cellDiv.style.backgroundColor !== "red") {
          kazandin = false; // Herhangi bir hücrenin rengi "red" değilse, kazanma durumunu false yap
        }
      });

      if (kazandin) {
        window.alert('Tebrikler, oyunu kazandınız!');

      }
      else {
        window.alert('KAYBETTİNİZ!!!!')

      }
    }
}
}

</script>

<style>
.board1 {
  display: grid;
  grid-template-columns: repeat(10, 40px); /* Hücre genişliği ayarlanmış */
  width: 400px; /* Grid tahtasının genişliği artırılmış */
  float: left;
  margin-left: 50px;
  margin-top: 250px;
}
.row {
  display: flex;
}
.cell {
  width: 40px;
  height: 40px;
  border: 1px solid black;
  background-color: #e0e0e0;
  display: inline-flex; /* Hücre içeriğinin taşma sorununu çözmek için inline-flex kullanılmış */
  justify-content: center; /* İçeriği yatayda ortala */
  align-items: center; /* İçeriği dikeyde ortala */
  user-select: none; /* Metni seçilemez yap */
}
.board2 {
  display: grid;
  grid-template-columns: repeat(10,40px);
  /* 10 kolonlu grid */
  width: 400px; /* Grid tahtasının genişliği */
  float:right;
  margin-right:200px;
  margin-top:250px;
}
</style>
