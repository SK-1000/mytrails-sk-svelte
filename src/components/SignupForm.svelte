<script lang="ts">
  import { push } from "svelte-spa-router";
  import { getContext } from "svelte";

  let firstName = "";
  let lastName = "";
  let email = ""
  let password = "";
  let errorMessage = "";

  const trailService = getContext("TrailService");

  async function signup() {
    let success = await trailService.signup(firstName, lastName, email, password)
    if (success) {
      push("/");
    } else {
      errorMessage = "Error Trying to sign up";
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

<form on:submit|preventDefault="{signup}"
    on:invalid={validateMessageEmail}
    on:change={validateMessageEmail}
    on:input={validateMessageEmail}>
    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <label for="firstname" class="label">First Name</label>
          <input bind:value={firstName} id="firstname" class="input" type="text" placeholder="Enter first name" name="firstName">
        </div>
        <div class="field">
          <label for="lastname" class="label">Last Name </label>
          <input bind:value={lastName}  id="lastname" class="input" type="text" placeholder="Enter last name" name="lastName">
        </div>
      </div>
    </div>
    <div class="field">
      <label for="email" class="label">Email</label>
      <input bind:value={email} required type="email" id="email" class="input" placeholder="Enter email" name="email">
    </div>
    <div class="field">
      <label for="password" class="label">Password</label>
      <input bind:value={password} id="password" class="input" required type="password" placeholder="Enter Password" name="password">
    </div>
    <div class="field is-grouped">
      <button class="button is-link">Sign Up</button>
    </div>
</form>
{#if errorMessage}
  <div class="section">
    {errorMessage}
  </div>
{/if}
