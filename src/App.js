import React from 'react';
import './App.css';



function Header(props) {
  console.log(props);
  return (
    <header className="Header ">
      <p>Header----  {props.text }</p>
    </header>
  );
}


function Footer(props) {
  console.log(props);
  return (
    <footer className="Footer">
      <p>this is footer---  :{props.trademark}</p>
    </footer>
  );
}

class Odometer extends React.Component{
  constructor(){
      super();
      this.state = {

          counter: '0000'
      }
      
  }



  add(e){
    console.log(document.querySelector('.odometer-value').value);
    let odometerValue=document.querySelector('.odometer-value')

// https://stackoverflow.com/questions/2998784/how-to-output-numbers-with-leading-zeros-in-javascript
      function zeroPad(num, places) {
        var zero = places - num.toString().length + 1;
        return Array(+(zero > 0 && zero)).join("0") + num;
      }
        let currentOdometerValue = Number(odometerValue.value);
        console.log(currentOdometerValue)
      
        let test = currentOdometerValue+ e;
        console.log('test')
        if (test>9999){
          odometerValue.value=0
          odometerValue.value+=test-9999
          odometerValue.value=zeroPad(odometerValue.value, 4)
          
          
        }else{
          odometerValue.value=test
          odometerValue.value=zeroPad(odometerValue.value, 4)
        }
    //     console.log(e)
        console.log(odometerValue.value)
        this.setState({
          counter: odometerValue.value
      })
       
       
  }


  render(){
      return (
          <>
              <h1>Odometer</h1>
              <div class="container">
              <div class="odometer-module">
              <div class="odometer-buttons odometer-buttons-top">
              <button onClick={ () => this.add(1)} class="odometer-button js-odometer-button"> +1</button>
              <button onClick={ () => this.add(10)}class="odometer-button js-odometer-button"> +10</button>
              <button onClick={ () => this.add(100)}class="odometer-button js-odometer-button"> +100</button>
              <button onClick={ () => this.add(1000)}class="odometer-button js-odometer-button"> +1000</button>
              </div>
              <input class="odometer-value" type="number" value={this.state.counter} max="9999"></input>
              </div>
              </div>


              <h3>odometer-value: {this.state.counter}</h3>

          </>
      );
  }

}






function Main(props) {
  return (
    
    <main>
    
      <div className="Main">
        <h1>CHECK IT OUT I DID SOMETHING WITH REACT</h1>


      </div>
      <Odometer  />
    </main>
  );
}
export default function App() {

  return (
    <>
      <Header text="POTATO HEAD"/>
      <Main />
      <Footer trademark=" POTATO FOOTER" />

    </>
  );
}

