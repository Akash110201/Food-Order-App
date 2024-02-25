import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //console.log(props);
    this.state = {
      userInfo: {
        name: "dummy name",
        location: "default",
        avatar_url: "http:/dummy-photo.com",
      },
    };
  }

  async componentDidMount() {
    //API call
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    //console.log(json);
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img className="user-img" src={avatar_url} />
        <h2>{name}</h2>
        <h3>{location}</h3>
      </div>
    );
  }
}
export default UserClass;
