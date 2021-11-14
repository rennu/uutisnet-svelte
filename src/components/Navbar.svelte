<script>
  import { drawerOpen } from '../stores'
  import { Link } from 'svelte-navigator'

  const toggleDrawer = () => drawerOpen.update(value => !value)

</script>

<div class='navbar'>
  <div class='left'>
    <div class='menu-button' on:click={toggleDrawer}>
      <div />
      <div />
      <div />
    </div>
  </div>
  <div class='right'>
    <h2 class='title'><Link to='/' style='color: #222222'>Uutisnet</Link></h2>
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
    padding-left: 20px;
  }

  .right {
    padding-left: 20px;
    padding-right: 15px;
    flex: 1;
  }

  .menu-button {
    cursor: pointer;
    float: right;
    padding-top: 10px;
  }
  .menu-button > div {
    width: 30px;
    height: 3px;
    background-color: #444444;
    margin: 6px 0;
  }
</style>
