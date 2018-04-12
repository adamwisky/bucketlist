import React from 'react';

class FolderList extends React.Component {

  constructor() {
    super();
    this.state = {
        folders: ['Movies', 'Books', 'Destinations'],
        active: 0,
      };
  }

  updateActive(newActive) {
    console.log('update active:', newActive);
    this.props.updateFolder(newActive);

    this.setState({
          folders: this.state.folders,
          active: newActive,
        });
  }

  render() {
    const folderList = this.state.folders.map((folder, index) =>
    <li className="nav-item" key={index}>
      <a className={index === this.state.active ? 'nav-link active' : 'nav-link inactive' }
         href={null} onClick={() => this.updateActive(index)}>
           {folder}
      </a>
    </li>
    );

    return (
        <div>

        <h3>Lists</h3>
          <div className="nav nav-pills flex-column">
            {folderList}
          </div>
        </div>
    );
  }

}

export default FolderList;
