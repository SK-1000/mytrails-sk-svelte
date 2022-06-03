<script>
  import {push} from "svelte-spa-router";
  import {getContext} from "svelte";

  let email = ""
  let password = "";
  let errorMessage = "";

  const trailService = getContext("TrailService");

  async function login() {
    let success = await trailService.login(email, password)
    if (success) {
      push("/addtrail");
    } else {
      email = "";
      password = "";
      errorMessage = "Invalid Credentials";
    }
  }

  function validateMessageEmail(event) {
       let textbox = event.target;
       if (textbox.value === '') {
            textbox.setCustomValidity('Required email address');
        } else if (textbox.validity.typeMismatch){
            textbox.setCustomValidity('please enter a valid email address');
        } else {
           textbox.setCustomValidity('');
        }
        return true;
    }


</script>

<form on:submit|preventDefault={login}>
  <div class="field">
    <label class="label" for="email">Email</label>
    <input bind:value={email} class="input" id="email" name="email"placeholder="Enter email" required type="email">
  </div>
  <div class="field">
    <label class="label" for="password">Password</label>
    <input bind:value={password} class="input" id="password" name="password" placeholder="Enter Password" required type="password">
  </div>
  <div class="field is-grouped">
    <button class="button is-link">Log In</button>
  </div>
</form>
{#if errorMessage}
  <div class="section">
    {errorMessage}
  </div>
{/if}
