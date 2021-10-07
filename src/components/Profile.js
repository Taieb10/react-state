import React from "react";

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      profile: {
        name: "Taieb",
        img: "https://gomycodelearn.blob.core.windows.net/profiles/15ed54ed-73d0-4858-b717-1fdb3dc8e9c3-132737501512750461.jpg",
        bio: "I'm a enthusiast beekeeper",
      },
      displayed: false,
      timer: 0,
    };
    this.toggle.bind(this);
  }

  toggle() {
    this.setState({ timer: 0 });
    this.setState({ displayed: !this.state.displayed });
    setInterval(() => {
      this.setState({ timer: (this.state.timer = this.state.timer + 1) });
    }, 1000);
  }

  render() {
    return (
      <center>
        <div>
          <button onClick={() => this.toggle()}>Toggle</button>
          {this.state.displayed ? (
            <div>
              <h1>Hello My name is Taieb</h1>
              <img src={this.state.profile.img} alt="taieb-image" />
              <h3>{this.state.profile.bio}</h3>
              <h3>{this.state.timer}</h3>
            </div>
          ) : null}
        </div>
      </center>
    );
  }
}

export default Profile;
