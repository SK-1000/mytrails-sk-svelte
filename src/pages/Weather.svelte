<script>
    import TitleBar from "../components/TitleBar.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
    import axios from "axios";
    
    var appid = "6832d9c1371de3a120195ed1fb73c729"
    var lat = ""; //store longitude variable
    var lon = ""; //store latitude variable
    var temp = ""; //store temp variable
    var humidity = ""; //store humidity variable
    var disc = ""; //store weather discription variable
    var incomeData =null; //variable for openweathermap data


    const submitHandler = () => {
      //submit handler function
      axios //send a http get request to openweathermap api to fetch data
        .get(
          `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&units=metric&appid={appid}`
        )
        .then(data => {
          //get data upon a sucsessfull response
          console.log(data.data);
          incomeData = data.data; //assign response data to the variable
          temp = incomeData.current.temp;
          humidity = incomeData.current.humidity;
          disc = incomeData.current.description;
        })
        .catch(err => {
          //handle error
          //console.log(err.response);
          // window.alert(err.response.data.message); //alert to the user upon a api error
        });
    };

  </script>


<div class="columns is-vcentered">
    <div class="column is-two-thirds">
      <TitleBar subTitle={"Latest Trails"} title={"myTrails Services Inc."}/>
    </div>
    <div class="column">
      <MainNavigator/>
    </div>
  </div>

  <!-- add a html form to handle data -->
  <form class="forminput" on:submit|preventDefault={submitHandler}>
  
    <!-- bind the value with the city variable we declared -->
        <input bind:value={lat} placeholder="Enter your latitude" />
        <input bind:value={lon} placeholder="Enter your longitude" />
    
        <button>Fetch Data</button>
    
      </form>
  
      
  <table class="table">
    <thead>
        <tr>
            <th> Temp </th>
            <th> Humidity </th>
            <th> Description </th>
          </tr>
    </thead>
    <tbody>
        <tr>
            <td> {temp}12&deg;</td> 
            <td> {humidity}10%</td>
            <td> {disc}test</td>
          </tr>
    </tbody>
  </table>
 