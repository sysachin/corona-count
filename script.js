window.onload = function(){
  //Million
  function test (val) {
    if (val >= 10000000) {
      val = (val / 10000000).toFixed(2) + ' Cr';
    } else if (val >= 100000) {
      val = (val / 100000).toFixed(2) + ' Lakh';
    }
    else if(val >= 1000) val = (val/1000).toFixed(2) + ' K';
    return val;
  }
 

  axios.get('https://covid19.mathdro.id/api')
    .then(res =>{
      document.getElementById("last_update").textContent= "Last update on " + res.data.lastUpdate.split("T")[0] ;
      /*let x = 0, y = 0, z = 0, w = 0;
      setInterval(function(){
        if(x <= res.data.confirmed.value){
          document.getElementById("infected").textContent=x; 
          x++;
        }
        if(y <= res.data.recovered.value){
          document.getElementById("recovered").textContent=y;
          y++;
        }
        if(z <= res.data.deaths.value){
          document.getElementById("deaths").textContent=z;
          z++;
        }
        if(w <= res.data.confirmed.value-res.data.recovered.value-res.data.deaths.value){
          document.getElementById("active").textContent = w;
          z++;
        }
      }, 0);*/
    //let a=res.data.confirmed.value-res.data.recovered.value-res.data.deaths.value;
    //let c=test(res.data.confirmed.value,0);
    //let r=test(res.data.recovered.value,0)
    //let d=test(res.data.deaths.value,0);
    
   // let k=test(a,0);
      let a=0,b=0,c=0,d=0;
      a=test(res.data.confirmed.value);
      b=test(res.data.recovered.value);
      c=test(res.data.deaths.value);
      d=test(res.data.confirmed.value-res.data.recovered.value-res.data.deaths.value);

      document.getElementById("infected").textContent=a;
      document.getElementById("recovered").textContent=b;
      document.getElementById("deaths").textContent=c;
      document.getElementById("active").textContent=d;
    
      

      let object = {
        infected:res.data.confirmed.value,
        recovered:res.data.recovered.value,
        deaths:res.data.deaths.value,
        active:res.data.confirmed.value-res.data.recovered.value-res.data.deaths.value,
        name:"Worldwide"
      };

      
      
      makeChart(object);
    })
    .catch(err =>{
      console.log(err)
    })


    var stateChart;
    var stateActiveChart;
    var stateRecoveredChart;
    var stateDeceasedChart,stateTestingChart;
    
    function makeIndiaChart(data){
      
      let dateArray=[];
      let today = new Date();
     
      for(var i=28;i>=0;i--){
        var dt = new Date(today);
        dt.setDate( dt.getDate() - i );
        let z=dt +'';
        z=z.split(" ");
        let k=z[2];
        k=k+" "+z[1];
        dateArray.push(k);
      }
      

      
      //confirmed chart
      var ctx = document.getElementById('confirmedIndiaChart');
      stateChart = new Chart(ctx, {
        type: 'line',
        data: {
           // labels: data.confirmedArray,
           labels: dateArray,
            datasets: [{
              label: "Confirmed (Last 28 days)",
              data: data.confirmedArray,
              backgroundColor: 'rgba(0,0,0,0)',
              borderColor: 'rgba(244, 9, 20, 0.5)',
              pointBackgroundColor: 'red'
            }]
        },options: {
          legend: {
            labels: {
                fontColor: "Grey",
                fontSize: 13
            },
            onClick: function (e) {
              e.stopPropagation();
    }
        },
          scales: {
              xAxes: [{
                  gridLines: {
                      drawOnChartArea: false,
                      color: "#F33E12 " 
                  },
                  ticks: {
                    fontColor:"Grey",
                    beginAtZero: true,
                    autoSkip: true,
                     maxTicksLimit: 5,
                     maxRotation: 0,
                     minRotation: 0
                  }
              }],
              yAxes: [{
                  gridLines: {
                      drawOnChartArea: false,
                      color: "#F33E12 "
                    
                  },
                  ticks: {
                    fontColor:"Grey",
                    beginAtZero: true
                    
                  }
              }]
          }
      }
      });

      var activeChart = document.getElementById('activeIndiaChart');
      stateActiveChart = new Chart(activeChart, {
        type: 'line',
        data: {
            labels: dateArray,
            datasets: [{
              label: "Active (Last 28 days)",
              data: data.activeArray,
              backgroundColor: 'rgba(0,0,0,0)',
              borderColor: 'rgba(9, 109, 244 , 0.5)',
              pointBackgroundColor: '#096DF4'
            }]
        }
        ,options: {
          legend: {
            labels: {
                fontColor: "Grey",
                fontSize: 13
            },
            onClick: function (e) {
              e.stopPropagation();
    }
        },
          scales: {
              xAxes: [{
                  gridLines: {
                      drawOnChartArea: false,
                      color:"#096DF4"
                  },
                  ticks: {
                    fontColor:"Grey",
                    beginAtZero: true,
                    autoSkip: true,
                     maxTicksLimit: 5,
                     maxRotation: 0,
                     minRotation: 0
                  }
              }],
              yAxes: [{
                  gridLines: {
                      drawOnChartArea: false,
                      color:"#096DF4"
                  },
                  ticks: {
                    fontColor:"Grey",
                    beginAtZero: true
                  }
              }]
          }
      }
      });

      var recoveredChart = document.getElementById('recoveredIndiaChart');
      stateRecoveredChart = new Chart(recoveredChart, {
        type: 'line',
        data: {
            labels: dateArray,
            datasets: [{
              label: "Recovered (Last 28 days)",
              data: data.recoveredArray,
              backgroundColor: 'rgba(0,0,0,0)',
              borderColor: 'rgba(45, 225, 34  , 0.5)',
              pointBackgroundColor: '#2DE122'
            }]
        }
        ,options: {
          legend: {
            labels: {
                fontColor: "Grey",
                fontSize: 13
            },
            onClick: function (e) {
              e.stopPropagation();
    }
        },
          scales: {
              xAxes: [{
                  gridLines: {
                      drawOnChartArea: false,
                      color:'#2DE122'
                  },
                  ticks: {
                    fontColor:"Grey",
                    beginAtZero: true,
                    autoSkip: true,
                     maxTicksLimit: 5,
                     maxRotation: 0,
                     minRotation: 0
                  }
              }],
              yAxes: [{
                  gridLines: {
                      drawOnChartArea: false,
                      color:'#2DE122'
                  },
                  ticks: {
                    fontColor:"Grey",
                    beginAtZero: true
                  }
              }]
          }
      }
      });

      var deceasedChart = document.getElementById('deceasedIndiaChart');
      stateDeceasedChart = new Chart(deceasedChart, {
        type: 'line',
        data: {
            labels: dateArray,
            datasets: [{
              label: "Deceased (Last 28 days)",
              data: data.deceasedArray,
              backgroundColor: 'rgba(0,0,0,0)',
              borderColor: 'rgba(119, 120, 119, 0.5)',
              pointBackgroundColor: '#777877'
            }]
        }
        ,options: {
          legend: {
            labels: {
                fontColor: "Grey",
                fontSize: 13
            },
            onClick: function (e) {
              e.stopPropagation();
    }
        },
          scales: {
              xAxes: [{
                  gridLines: {
                      drawOnChartArea: false,
                      color:'#777877'
                  },
                  ticks: {
                    fontColor:"Grey",
                    beginAtZero: true,
                    autoSkip: true,
                     maxTicksLimit: 5,
                     maxRotation: 0,
                     minRotation: 0
                  }
              }],
              yAxes: [{
                  gridLines: {
                      drawOnChartArea: false,
                      color:'#777877'
                  },
                  ticks: {
                    fontColor:"Grey",
                    beginAtZero: true
                  }
              }]
          }
      }
      });

      var testingChart = document.getElementById('testedIndiaChart');
      stateTestingChart = new Chart(testingChart, {
        type: 'line',
        data: {
            labels: dateArray,
            datasets: [{
              label: "Testing (Last 28 days)",
              data: data.testedArray,
              backgroundColor: 'rgba(0,0,0,0)',
              borderColor: 'rgba(125, 58, 229, 0.5)',
              pointBackgroundColor: '#7D3AE5'
            }]
        }
        ,options: {
          legend: {
            labels: {
                fontColor: "Grey",
                fontSize: 13
            },
            onClick: function (e) {
              e.stopPropagation();
    }
        },
          scales: {
              xAxes: [{
                  gridLines: {
                      drawOnChartArea: false,
                      color:'#7D3AE5'
                  },
                  ticks: {
                    fontColor:"Grey",
                    beginAtZero: true,
                    autoSkip: true,
                     maxTicksLimit: 5,
                     maxRotation: 0,
                     minRotation: 0
                  }
              }],
              yAxes: [{
                  gridLines: {
                      drawOnChartArea: false,
                      color:'#7D3AE5'
                  },
                  ticks: {
                    fontColor:"Grey",
                    beginAtZero: true,
                    
                  }
              }]
          }
      }
      });
    }

    //calling India's data
    let IndiaData = [];
    let StateTestedData = [];
    function api1(){
        $.ajax({
          type:"GET",
          url:'https://api.covid19india.org/data.json',
          async:false,
          success:function(res){
            IndiaData = res.statewise;
            Indiaa=res.cases_time_series;
          }
        })
        api2();

    }
    api1();

    function api2(){
      //testing
        $.ajax({
          type: "GET",
          url: "https://api.covid19india.org/state_test_data.json",
          async: false,
          success: function(res){
            let today = new Date();

            let lastDate = new Date();
            lastDate.setDate(lastDate.getDate() - 1);
            let y = lastDate + '';
            y = y.split(" ");
            let x = y[2] + "/" + (today.getMonth()+1 < 10 ? "0" + (today.getMonth()+1) : today.getMonth()+1)  + "/" +  (today.getFullYear());

            let array = res.states_tested_data.filter(state =>{
              return state.updatedon == x;
            })

            //getting tested count for only topmost state
            StateTestedData = res.states_tested_data;

            //console.log(array)

            document.getElementById('recoveredIndia').innerHTML=IndiaData[0].recovered;
            document.getElementById('deceasedIndia').innerHTML=IndiaData[0].deaths;
            document.getElementById('activeIndia').innerHTML=IndiaData[0].active;
            document.getElementById('confirmedIndia').innerHTML=IndiaData[0].confirmed;

            for(let i = 1; i < IndiaData.length; i++){
              let currState = array.find(vr =>{
                return IndiaData[i].state == vr.state;
              })

              //console.log(currState)
              if(IndiaData[i].state=="State Unassigned"){
                continue;
              }

             document.getElementById('tbody').innerHTML += `
                <tr id=${IndiaData[i].statecode.toLowerCase()}>
                  <td>${IndiaData[i].state}</td>
                  <td>${IndiaData[i].confirmed}</td>
                  <td>${IndiaData[i].recovered}</td>
                  <td>${IndiaData[i].deaths}</td>
                  <td>${IndiaData[i].active}</td>
                  <td>${currState ? currState.totaltested : 'NA'}</td>
                </tr>
              `;
            }
          }
        })
        api3();
    }

    function api3(){
      //for making chart
      axios.get('https://api.covid19india.org/states_daily.json')
        .then(res =>{
          //console.log(res.data.states_daily)
          let confirmedStates = res.data.states_daily.filter(item =>{
            return item.status == "Confirmed";
          })
          let activeStates = res.data.states_daily.filter(item =>{
            return item.status == "Active";
          })
          let recoveredStates = res.data.states_daily.filter(item =>{
            return item.status == "Recovered";
          })
          let deceasedStates = res.data.states_daily.filter(item =>{
            return item.status == "Deceased";
          })
          let testedStates = StateTestedData.filter(item =>{
            return item.state == IndiaData[1].state;
          })

          //console.log(confirmedStates)
          let currentState = IndiaData.find(item =>{
            return item.state == "Maharashtra";
          })
          let topState = currentState.statecode.toLowerCase();

          let confirmedArray = [];
          let activeArray = [];
          let recoveredArray = [];
          let deceasedArray = [];
          let testedArray = [];

          let sum = 0;
          for(let i = 0; i < confirmedStates.length; i++){
            let x = confirmedStates[i];
            confirmedArray.push(parseInt(x[topState])+sum);
            sum = parseInt(confirmedArray[i]);
            
          }
          
          //recovered
          sum = 0;
          
          for(let i = 0; i < recoveredStates.length; i++){
            let x = recoveredStates[i];
            recoveredArray.push(parseInt(x[topState])+sum);
            sum = parseInt(recoveredArray[i]);
          }
          

          //deceased
          sum = 0;
          for(let i = 0; i < deceasedStates.length; i++){
            let x = deceasedStates[i];
            deceasedArray.push(parseInt(x[topState])+sum);
            sum = parseInt(deceasedArray[i]);
          }

          //active
          sum = 0;
          for(let i = 0; i < recoveredStates.length; i++){
            activeArray.push(confirmedArray[i]-recoveredArray[i]-deceasedArray[i]);
          }

          //tested
          for(let i = 0; i < testedStates.length; i++){
            testedArray.push(parseInt(testedStates[i].totaltested));
          }

          let obj = {
            confirmedArray: confirmedArray.slice(Math.max(confirmedArray.length - 28, 0)),
            activeArray: activeArray.slice(Math.max(activeArray.length - 28, 0)),
            recoveredArray: recoveredArray.slice(Math.max(recoveredArray.length - 28, 0)),
            deceasedArray:deceasedArray.slice(Math.max(deceasedArray.length - 28, 0)),
            testedArray:testedArray.slice(Math.max(testedArray.length - 28, 0))
          }
          makeIndiaChart(obj);
          //console.log(stateArray)

          let sum1=0,sum2=0,sum3=0,sum4=0,sum5=0;

          //print increased for each state 
          for(let i = 1; i < IndiaData.length; i++){
            let confirmedStates = res.data.states_daily.filter(item =>{
              return item.status == "Confirmed";
            })
            let activeStates = res.data.states_daily.filter(item =>{
              return item.status == "Active";
            })
            let recoveredStates = res.data.states_daily.filter(item =>{
              return item.status == "Recovered";
            })
            let deceasedStates = res.data.states_daily.filter(item =>{
              return item.status == "Deceased";
            })
            let testedStates = StateTestedData.filter(item =>{
              return item.state == IndiaData[i].state;
            })
  
            let currentState = IndiaData.find(item =>{
              return item.state == IndiaData[i].state;
            })
            let topState = currentState.statecode.toLowerCase();
  
            let confirmedArray = [];
            let activeArray = [];
            let recoveredArray = [];
            let deceasedArray = [];
            let testedArray = [];
  
            let sum = 0;
            for(let i = 0; i < confirmedStates.length; i++){
              let x = confirmedStates[i];
              confirmedArray.push(parseInt(x[topState])+sum);
              sum = parseInt(confirmedArray[i]);            
            }
            
            //recovered
            sum = 0;           
            for(let i = 0; i < recoveredStates.length; i++){
              let x = recoveredStates[i];
              recoveredArray.push(parseInt(x[topState])+sum);
              sum = parseInt(recoveredArray[i]);
            }
            
  
            //deceased
            sum = 0;
            for(let i = 0; i < deceasedStates.length; i++){
              let x = deceasedStates[i];
              deceasedArray.push(parseInt(x[topState])+sum);
              sum = parseInt(deceasedArray[i]);
            }
  
            //active
            sum = 0;
            for(let i = 0; i < recoveredStates.length; i++){
              activeArray.push(confirmedArray[i]-recoveredArray[i]-deceasedArray[i]);
            }
  
            //tested
            
            for(let i = 0; i < testedStates.length; i++){
              testedArray.push(parseInt(testedStates[i].totaltested));
            }

            //console.log(IndiaData[i].state + " " + testedArray[testedArray.length-1])
            if(IndiaData[i].state != "State Unassigned"){
              let row = document.getElementById(IndiaData[i].statecode.toLowerCase());
              let cols = row.children; 
              if(confirmedArray[confirmedArray.length-1]-confirmedArray[confirmedArray.length-2] < 0){
                cols[1].innerHTML += `<small style="display: block"><i class="tiny material-icons red-text">arrow_downward</i>${confirmedArray[confirmedArray.length-1]-confirmedArray[confirmedArray.length-2]}</small>`;
              }
              else{
                sum1=sum1+confirmedArray[confirmedArray.length-1]-confirmedArray[confirmedArray.length-2];
                cols[1].innerHTML += `<small style="display: block"><i class="tiny material-icons red-text">arrow_upward</i>${confirmedArray[confirmedArray.length-1]-confirmedArray[confirmedArray.length-2]}</small>`;
              }

              if(recoveredArray[recoveredArray.length-1]-recoveredArray[recoveredArray.length-2]<0){
                cols[2].innerHTML += `<small style="display: block"><i class="tiny material-icons green-text">arrow_downwardward</i>${recoveredArray[recoveredArray.length-1]-recoveredArray[recoveredArray.length-2]}</small>`;
              }
              else{
                sum2=sum2+recoveredArray[recoveredArray.length-1]-recoveredArray[recoveredArray.length-2];
                cols[2].innerHTML += `<small style="display: block"><i class="tiny material-icons green-text">arrow_upward</i>${recoveredArray[recoveredArray.length-1]-recoveredArray[recoveredArray.length-2]}</small>`;
              }

              if(deceasedArray[deceasedArray.length-1]-deceasedArray[deceasedArray.length-2]<0){
                cols[3].innerHTML += `<small style="display: block"><i class="tiny material-icons grey-text">arrow_downward</i>${deceasedArray[deceasedArray.length-1]-deceasedArray[deceasedArray.length-2]}</small>`;
              }
              else{
                sum3=sum3+deceasedArray[deceasedArray.length-1]-deceasedArray[deceasedArray.length-2];
                cols[3].innerHTML += `<small style="display: block"><i class="tiny material-icons grey-text">arrow_upward</i>${deceasedArray[deceasedArray.length-1]-deceasedArray[deceasedArray.length-2]}</small>`;
              }

              if(activeArray[activeArray.length-1]-activeArray[activeArray.length-2]<0){
                cols[4].innerHTML += `<small style="display: block"><i class="tiny material-icons blue-text">arrow_downward</i>${activeArray[activeArray.length-1]-activeArray[activeArray.length-2]}</small>`;
              }
              else{
                sum4=sum4+activeArray[activeArray.length-1]-activeArray[activeArray.length-2];
                cols[4].innerHTML += `<small style="display: block"><i class="tiny material-icons blue-text">arrow_upward</i>${activeArray[activeArray.length-1]-activeArray[activeArray.length-2]}</small>`;

              }

              if(testedArray[testedArray.length-1]-testedArray[testedArray.length-2]<0){
                cols[5].innerHTML += `<small style="display: block"><i class="tiny material-icons purple-text">arrow_downward</i>${testedArray[testedArray.length-1]-testedArray[testedArray.length-2]}</small>`;
              }
              else{
                sum5=sum5+testedArray[testedArray.length-1]-testedArray[testedArray.length-2];
                cols[5].innerHTML += `<small style="display: block"><i class="tiny material-icons purple-text">arrow_upward</i>${testedArray[testedArray.length-1]-testedArray[testedArray.length-2]}</small>`;

              }
              
            }
            
          }
        //new confirm
        document.getElementById('updatedon').innerHTML += Indiaa[Indiaa.length-1].date;
          let act=Indiaa[Indiaa.length-1].dailyconfirmed-Indiaa[Indiaa.length-1].dailyrecovered-Indiaa[Indiaa.length-1].dailydeceased;
          document.getElementById('increasedIndiaConfirmed').innerHTML += Indiaa[Indiaa.length-1].dailyconfirmed;
          document.getElementById('increasedIndiaActive').innerHTML += act;
          document.getElementById('increasedIndiaRecovered').innerHTML += Indiaa[Indiaa.length-1].dailyrecovered;
          document.getElementById('increasedIndiaDeceased').innerHTML += Indiaa[Indiaa.length-1].dailydeceased; 
        /*  document.getElementById('increasedIndiaConfirmed').innerHTML += sum1;
          document.getElementById('increasedIndiaActive').innerHTML += sum4;
          document.getElementById('increasedIndiaRecovered').innerHTML += sum2;
          document.getElementById('increasedIndiaDeceased').innerHTML += sum3; */
        })
        .catch(err =>{
          console.log(err)
        })
    }

    function changeStateGraph(stateName){
      document.getElementById('currentState').textContent = "(" + stateName + ")";
      //for making chart
      axios.get('https://api.covid19india.org/states_daily.json')
        .then(res =>{
          //console.log(res.data.states_daily)
          let confirmedStates = res.data.states_daily.filter(item =>{
            return item.status == "Confirmed";
          })
          let activeStates = res.data.states_daily.filter(item =>{
            return item.status == "Active";
          })
          let recoveredStates = res.data.states_daily.filter(item =>{
            return item.status == "Recovered";
          })
          let deceasedStates = res.data.states_daily.filter(item =>{
            return item.status == "Deceased";
          })
          let testedStates = StateTestedData.filter(item =>{
            return item.state == stateName;
          })

          //console.log(confirmedStates)
          let currentState = IndiaData.find(item =>{
            return item.state == stateName;
          })
          let topState = currentState.statecode.toLowerCase();

          let confirmedArray = [];
          let activeArray = [];
          let recoveredArray = [];
          let deceasedArray = [];
          let testedArray = [];

          //confirmed
          let sum = 0;
          for(let i = 0; i < confirmedStates.length; i++){
            let x = confirmedStates[i];
            //let v=parseInt(x[topState])+sum;
            //v=million(v);
           // confirmedArray.push(v);
            confirmedArray.push(parseInt(x[topState])+sum);
            sum = parseInt(confirmedArray[i]);
           //sum=parseInt(x[topState])+sum;
          }

          //recovered
          sum = 0;
          for(let i = 0; i < recoveredStates.length; i++){
            let x = recoveredStates[i];
            recoveredArray.push(parseInt(x[topState])+sum);
            sum = parseInt(recoveredArray[i]);
          }

          //deceased
          sum = 0;
          for(let i = 0; i < deceasedStates.length; i++){
            let x = deceasedStates[i];
            deceasedArray.push(parseInt(x[topState])+sum);
            sum = parseInt(deceasedArray[i]);
          }

          //active
          sum = 0;
          for(let i = 0; i < recoveredStates.length; i++){
            activeArray.push(confirmedArray[i]-recoveredArray[i]-deceasedArray[i]);
          }

          //tested
          for(let i = 0; i < testedStates.length; i++){
            testedArray.push(parseInt(testedStates[i].totaltested));
          }

          let object = {
            confirmedArray: confirmedArray.slice(Math.max(confirmedArray.length - 28, 0)),
            activeArray: activeArray.slice(Math.max(activeArray.length - 28, 0)),
            recoveredArray: recoveredArray.slice(Math.max(recoveredArray.length - 28, 0)),
            deceasedArray:deceasedArray.slice(Math.max(deceasedArray.length - 28, 0)),
            testedArray:testedArray.slice(Math.max(testedArray.length - 28, 0))
          }
          //makeIndiaChart(obj);
          //console.log(stateArray)

          //update India chart
          //stateChart.data.labels = object.confirmedArray; 
          stateChart.data.datasets[0].data = object.confirmedArray;
          stateChart.update();

          //stateActiveChart.data.labels = object.activeArray; 
          stateActiveChart.data.datasets[0].data = object.activeArray;
          stateActiveChart.update();

          //stateDeceasedChart.data.labels = object.deceasedArray; 
          stateDeceasedChart.data.datasets[0].data = object.deceasedArray;
          stateDeceasedChart.update();

          //stateRecoveredChart.data.labels = object.recoveredArray; 
          stateRecoveredChart.data.datasets[0].data = object.recoveredArray;
          stateRecoveredChart.update();

         // stateTestingChart.data.labels = object.testedArray; 
          stateTestingChart.data.datasets[0].data = object.testedArray;
          stateTestingChart.update();



        })
        .catch(err =>{
          console.log(err)
        })
    }

    //changing indian states 
    document.getElementById('states').addEventListener('change', function(){
     //alert(event.target.value)
      changeStateGraph(event.target.value);
    })

    let myChart; 
    function makeChart(data){
      //console.log(data)
        var ctx = document.getElementById('myChart');
        myChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: ['Confirmed', 'Active', 'Recovered', 'Deaths'],
              datasets: [{
                  label: data.name,
                  data: [data.infected,data.active,data.recovered,data.deaths],
                  
                  backgroundColor: [
                    'rgba(231, 76, 60 , 0.6)',
                    'rgba(40, 116, 166  , 0.6)',
                    'rgba(29, 132, 72, 0.6)',
                    'rgba(119, 120, 119, 0.6)'
                    //'rgba(156, 39, 176 , 0.6)'   
                  ],
                  borderColor: [
                      'rgba(231, 76, 60, 1)',
                      'rgba(40, 116, 166  , 1)',
                      'rgba(29, 132, 72,, 1)',
                      'rgba(119, 120, 119, 1)'
                      
                      
                  ],
                  borderWidth: 1
              }]
          },
          options: {
           /* scales: { yAxes: [{ ticks: {
              stepSize: 10000000000,
              callback: function(value) {
                 var ranges = [
                    { divider: 1e6, suffix: 'M' },
                    { divider: 1e3, suffix: 'k' }
                 ];
                 function formatNumber(n) {
                    for (var i = 0; i < ranges.length; i++) {
                       if (n >= ranges[i].divider) {
                          return (n / ranges[i].divider).toString() + ranges[i].suffix;
                       }
                    }
                    return n;
                 }
                 return formatNumber(value);
              }
           } }] }*/
           legend: {
            labels: {
                fontColor: "Grey",
                fontSize: 25
            },
            onClick: function (e) {
              e.stopPropagation();
    }
        },
              scales: {
                xAxes: [{
                  gridLines: {
                    drawOnChartArea: false,
                    color:"#777C78"
                  },
                  ticks: {
                    fontColor:"Grey",
                    beginAtZero: true
                  }
               }],
                  yAxes: [{
                    gridLines: {
                      drawOnChartArea: false,
                      color:"#777C78"
                    },
                      ticks: {
                        fontColor:"Grey",
                        beginAtZero: true
                      }
                  }]
              }
          }
      });
    }
    document.getElementById('country').addEventListener('change', function(){
      //console.log(event.target.value)
      document.getElementById('currentCountry').textContent = "(" + event.target.value + ")";
      if(event.target.value == "worldwide"){
        axios.get('https://covid19.mathdro.id/api')
          .then(res =>{

            //crore
            let p=0,q=0,r=0,s=0;
            p=test(res.data.confirmed.value);
            q=test(res.data.recovered.value);
            r=test(res.data.deaths.value);
            s=test(res.data.confirmed.value-res.data.recovered.value-res.data.deaths.value);
            

            document.getElementById("last_update").textContent= "Last update on " + res.data.lastUpdate.split("T")[0] ;
            document.getElementById("infected").textContent=p;
            document.getElementById("recovered").textContent=q;
            document.getElementById("deaths").textContent=r;
            document.getElementById("active").textContent=s;

            document.getElementById('increased-infected').innerHTML = "";
            document.getElementById('decreased-recovered').innerHTML = "";
            document.getElementById('increased-deaths').innerHTML = "";
            document.getElementById('increased-active').innerHTML = "";

            let object = {
              infected:res.data.confirmed.value,
              recovered:res.data.recovered.value,
              deaths:res.data.deaths.value,
              active:res.data.confirmed.value-res.data.recovered.value-res.data.deaths.value,
              name:"Worldwide"
            };
            //makeChart(object);

            //myChart.data.labels.push(label);
            myChart.data.datasets[0].label = object.name; 
            myChart.data.datasets[0].data = [object.infected,object.active,object.recovered, object.deaths];
            myChart.update();
          })
          .catch(err =>{
            //console.log(err)
            var toastHTML = '<span>Erro occurred.</span><button class="btn-flat toast-action">Undo</button>';
            M.toast({html: toastHTML});
            document.getElementById("infected").textContent=0;
            document.getElementById("recovered").textContent=0;
            document.getElementById("deaths").textContent=0;
            document.getElementById("active").textContent=0;
          })
      }
      else{
        document.getElementById('increased-infected').innerHTML = '<div class="preloader-wrapper small active"><div class="spinner-layer spinner-red-only"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div>';
        document.getElementById('decreased-recovered').innerHTML = '<div class="preloader-wrapper small active"><div class="spinner-layer spinner-green-only"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div>';
        document.getElementById('increased-deaths').innerHTML = '<div class="preloader-wrapper small active"><div class="spinner-layer spinner-grey-only"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div>';
        document.getElementById('increased-active').innerHTML = '<div class="preloader-wrapper small active"><div class="spinner-layer spinner-blue-only"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div>'; 
        axios.get('https://covid19.mathdro.id/api/countries/'+event.target.value)
          .then(res=>{
            //console.log(res)

            //crore

            //crore
            let p=0,q=0,r=0,s=0;
            p=test(res.data.confirmed.value);
            q=test(res.data.recovered.value);
            r=test(res.data.deaths.value);
            s=test(res.data.confirmed.value-res.data.recovered.value-res.data.deaths.value);

            document.getElementById("last_update").textContent="Last update on " + res.data.lastUpdate.split("T")[0];
            document.getElementById("infected").textContent=p;
            document.getElementById("recovered").textContent=q;
            document.getElementById("deaths").textContent=r;
            document.getElementById("active").textContent=s;
            //console.log(res.config.url.split("/")[5])
            let object = {
              infected:res.data.confirmed.value,
              recovered:res.data.recovered.value,
              deaths:res.data.deaths.value,
              active:res.data.confirmed.value-res.data.recovered.value-res.data.deaths.value,
              name:res.config.url.split("/")[5]
            };

            let todayInfected = res.data.confirmed.value;
            let todayRecovered = res.data.recovered.value;
            let todayDeaths = res.data.deaths.value;
            let x = res.config.url.split("/")[5];

            let lastDate = new Date();
            lastDate.setDate(lastDate.getDate() - 2);
            //console.log(lastDate)
            axios.get('https://covid19.mathdro.id/api/daily/' + lastDate)
              .then(res =>{
                //console.log(res)
                let currentCountry = [];
                currentCountry = res.data.filter(obj =>{
                  return obj.countryRegion == x;
                })
                //console.log(currentCountry)
                let totalInfected = 0, totalRecovered = 0, totalDeaths = 0,todayActive=0;
                for(let i = 0; i < currentCountry.length; i++){
                  totalInfected += parseInt(currentCountry[i].confirmed);
                  totalRecovered += parseInt(currentCountry[i].recovered);
                  totalDeaths += parseInt(currentCountry[i].deaths);
                }
                todayInfected =todayInfected- totalInfected;
                todayRecovered =todayRecovered- totalRecovered;
                todayDeaths =todayDeaths- totalDeaths;
                todayActive=todayInfected+totalInfected-totalDeaths-totalRecovered;
                
                
                document.getElementById('increased-infected').innerHTML = '<i class="tiny material-icons">arrow_upward</i> ' + todayInfected;
                document.getElementById('decreased-recovered').innerHTML = '<i class="tiny material-icons">arrow_upward</i> ' + todayRecovered;
                document.getElementById('increased-deaths').innerHTML = '<i class="tiny material-icons">arrow_upward</i> ' + todayDeaths;
                document.getElementById('increased-active').innerHTML = "-";
              })
              .catch(err =>{
                console.log(err)
              })
            
            //  makeChart(object);
            myChart.data.datasets[0].label = object.name; 
            myChart.data.datasets[0].data = [object.infected,object.active,object.recovered, object.deaths];
            myChart.update();
          })
          .catch(err =>{
            //console.log(err)
            var toastHTML = '<span>Erro occurred.</span><button class="btn-flat toast-action">Undo</button>';
            M.toast({html: toastHTML});
            document.getElementById("infected").textContent=0;
            document.getElementById("recovered").textContent=0;
            document.getElementById("deaths").textContent=0;
            document.getElementById("active").textContent=0;
          })
      }
    }) 
}

//changing theme
let bgColor = "dark";
function changeTheme(){
  if(bgColor == "dark"){
    document.getElementsByTagName('body')[0].style.background = "white";
    document.getElementsByTagName('body')[0].style.color = "black";
    bgColor = "light";
  }
  else{
    document.getElementsByTagName('body')[0].style.background = "rgba(0,0,0,0.9)";
    document.getElementsByTagName('body')[0].style.color = "white";
    bgColor = "dark";
  }
}
