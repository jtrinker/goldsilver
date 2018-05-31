import React from 'react';

class App extends React.Component {
  state = {
    data: {}
  };

  componentDidMount() {
    this.getMetalPrice();
  }

  getMetalPrice = async () => {
    try {
      const res = await fetch('/api/getmetal');
      const data = await res.json();
      console.log(data);
      this.setState({ data: data });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className="app">
        <h1>Welcome</h1>
        <p>hi</p>
      </div>
    );
  }
}

export default App;
