<script>
  import { error } from '../stores'

  let errorMessage
  let errorOpen = false
  error.subscribe(errorValue => {
    if (errorValue !== '') {
      errorMessage = errorValue
      errorOpen = true
      error.update(() => '')
      setTimeout(() => {
        errorOpen = false
      }, 5000);
    }
  })
</script>

<div class='error-box message' style={`${errorOpen ? 'opacity: 1.0; bottom: 20px' : ''}`}>
  <b>Fug:</b> { errorMessage }
</div>

<style>
  .error-box {
    z-index: 8;
    position: fixed;
    bottom: -100px;
    left: 50%;
    margin-left: -150px;
    width: 400px;
    height: 60px;
    background-color: #C34450;
    color: #FFFFFF;
    box-shadow: 0px 0px 6px 5px rgba(0,0,0,0.1);
    pointer-events: none;
    opacity: 0.0;
    transition-duration: 250ms;
    text-align: center;
    line-height: 30px;
  }
</style>

