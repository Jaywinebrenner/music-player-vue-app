<template>
  <div>
  <div class="navbar">
    <button @click="show" class="albumsButton">ALBUMS</button>
  </div>

    <modal name="modal">
      <div class="modalWrapper">
        <h1 class="modalHeader">Available Music</h1>
      </div>
    </modal>
  </div>

</template>

<script>

export default {

  props: ['show', 'hide', 'DB'],
  name: 'Navbar',

  data: function () {
    console.log("DB on NAV", this.DB);
    return {}
  }

}


</script>

<style>

.navbar {
  background-image: linear-gradient(to right, #961e1e, #c93c3c);
  display: flex;
   align-items: center;
  
}

.musicText {
  color: white;
}

.albumsButton {
  background-color: white;
  height: 30px;
  width: 80px;
   margin-left: 50px;
   border-radius: 4px;
}

.albumsButton:hover {
  background-color: #f5ebeb;
}

.modalWrapper {
  display: flex;
  justify-content: center;
}

.modalHeader {
  font-size: 30px;
}



</style>