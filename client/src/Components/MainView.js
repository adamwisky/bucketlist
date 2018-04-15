import React from 'react';
import FolderList from './FolderList';
import ItemList from './ItemList';

class MainView extends React.Component {

  constructor(props) {
    super(props);

    this.state = { folderChosen: 0 };

    fetch('/ping').then(res => res.text()).then(res => console.log(res));
  }

  updateFolder(folderNum) {
    this.setState({ folderChosen: folderNum });
    console.log('folderChosen = ', folderNum);
  }

  render() {
    return (
      <div className = "container-fluid">
        <div className ="row">
          <div className="col-sm-3">
              <FolderList updateFolder={this.updateFolder.bind(this)}/>
            </div>
          <div className="col-xs-9">
            <ItemList itemBank={this.state.folderChosen} />
          </div>
          </div>
      </div>
    );
  }

}

export default MainView;
