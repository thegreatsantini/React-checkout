import React, { Component } from "react";
import * as Workspace from "./WorkspaceComponents";


class ImagePreview extends Component {
  render() {
    return (
      <div>
        <Workspace.Information
          name="Coworking Space, South Korea"
          price={this.props.price}
          duration="1"
        />
        <Workspace.Meta people={this.props.people} />
      </div>
    );
  }
}

export default ImagePreview;
