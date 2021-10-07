import React from "react";
import Profile from "./components/Profile";
import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  constructor() {
    super();
  }
  //   this.state = {
  //     profile: {
  //       name: "Taieb",
  //       img: "https://gomycodelearn.blob.core.windows.net/profiles/15ed54ed-73d0-4858-b717-1fdb3dc8e9c3-132737501512750461.jpg",
  //       bio: "I'm a enthusiast beekeeper",
  //     },
  //     displayed: false,
  //     timer: 0,
  //   };
  //   this.toggle.bind(this);
  // }

  // toggle() {
  //   this.setState({ displayed: !this.state.displayed });
  // }

  // componentDidMount() {
  //   setInterval(() => {
  //     this.setState({ timer: (this.state.timer = this.state.timer + 1) });
  //   }, 1000);
  // }

  // componentWillUnmount() {
  //   alert("winek")
  // }

  render() {
    return <Profile />;
  }
}

export default App;
