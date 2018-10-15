import * as React from "react";
import styled from "styled-components";

const AppWrapper = styled.div`
  font-size: 24px;
`;

class App extends React.Component {
  public render() {
    return (
      <AppWrapper>
        <h1>Disc Golf App</h1>
      </AppWrapper>
    );
  }
}

export default App;
