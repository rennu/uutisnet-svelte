<script>
  import { drawerOpen } from '../stores'

  const toggleDrawer = () => drawerOpen.update(value => !value)

</script>

<div class='navbar'>
  <div class='left'>
    <h2 class='title'>Uutisnet</h2>
  </div>
  <div class='right'>
    <div class='menu-button' on:click={toggleDrawer}>
      <div />
      <div />
      <div />
    </div>
  </div>
</div>

<style>
  .navbar {
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    background: #FEFEFE;
    display: flex;
    box-shadow: 0px 0px 6px 5px rgba(0,0,0,0.1);
  }

  .left, .right, .title {
    line-height: 50px;
  }

  .left {
    padding-left: 15px;
  }

  .right {
    padding-right: 15px;
  }

  .right {
    flex: 1;
  }
  .menu-button {
    cursor: pointer;
    float: right;
    padding-top: 8px;
  }
  .menu-button > div {
    width: 30px;
    height: 3px;
    background-color: #444444;
    margin: 6px 0;
  }
</style>
