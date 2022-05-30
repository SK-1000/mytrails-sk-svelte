<script>
    import axios from "axios";
    import Coordinates from "./Coordinates.svelte";
    var loading = false; //get loading state variable
    var lon = ""; //store input value variable1
    var lat = ""; //store input value variable1
    var temp = ""; //store temp variable
    var humidity = ""; //store humidity variable
    var disc = ""; //store weather discription variable
    var incomeData =null; //variable for openweathermap data
    
   
    




    const submitHandler = () => {
      //submit handler function
      loading = true; //chage loading state to true
      console.log(lon, lat);
      axios //send a http get request to openweathermap api to fetch data
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6832d9c1371de3a120195ed1fb73c729`
        )
        .then(data => {
          //get data upone a sucsessfull response
          loading = false; //chage loading state to false
          console.log(data.data);
          incomeData = data.data; //assign response data to the variable
          temp = incomeData.main.temp;
          humidity = incomeData.main.humidity;
          disc = incomeData.weather[0].description;
          console.log(temp + " " + humidity + " " + disc);
        })
        .catch(err => {
          //handle error
          console.log(err.response);
          loading = false; //chage loading state to false
          window.alert(err.response.data.message); //alert to the user upon a api error
          lon = ""; //clear form input
          lat = "";
        });
    };
  </script>
  
  <style>
    .data {
      text-align: center;
    }
    .maindiv {
      text-align: center;
      margin-top: 5%;
    }
    .tabledata {
      margin-left: 10%;
    }
    .ulwrpper {
      width: 50%;
      text-align: left;
      margin-left: 38%;
    }
    .forminput {
      margin-top: 3%;
    }
    /* loader style */
    .loader {
      margin-left: 45%;
      border: 16px solid #f3f3f3; /* Light grey */
      border-top: 16px solid #3498db; /* Blue */
      border-radius: 50%;
      width: 120px;
      height: 120px;
      animation: spin 2s linear infinite;
    }
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  </style>
  
  <div class="maindiv">
  
    <h1>weather Geo web app</h1>
    {#if loading}
      <div class="loader" />
    {/if}
  
    <!-- add a html form to handle data -->
    <form class="forminput" on:submit|preventDefault={submitHandler}>
  
  <!-- bind the value with the city variable we declared -->
      <input bind:value={lat} placeholder="Enter your latitude" />
      <input bind:value={lon} placeholder="Enter your longitude" />
  
      <button>Fetch Data</button>
  
    </form>
  
  <!-- svelte supports conditions and logic in markup like pug , hbs view engines -->
    {#if incomeData!==null}
      <div class="data">
  
        <div class="ulwrpper">
  
          <table class="tabledata" style="width:40%">
  
            <tr>
              <td>Tempurature :</td>
              <td>
                <span>{temp}&deg;</span>
              </td>
  
            </tr>
            <tr>
  
              <td>Humidity :</td>
              <td>
                <span>{humidity}%</span>
              </td>
            </tr>
            <tr>
  
              <td>weather like :</td>
              <span>{disc}</span>
            </tr>
          </table>
  
        </div>
  
     
      </div>
    {/if}
  
  </div>