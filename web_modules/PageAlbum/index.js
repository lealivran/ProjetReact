import React, { Component, PropTypes } from 'react';
import {connect} from "react-redux"
import fetchJSON from "app/fetchJSON";
import consts from "app/consts"
import Album from "Album";


import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 400,
    overflowY: 'auto',
    marginBottom: 24,
  },
};


export default class PageAlbum extends Component {

  static propTypes = {
      params: PropTypes.shape({
        artistId:PropTypes.string,
      }),
  };

  static defaultProps = {
      params: {},
  };

  state = {
    albums: null,
  };

  fetchAlbums(){
    const {
      params,
    } = this.props

    fetchJSON(consts.api.enpoints.getAlbums(params.artistId)).then((response) => {
        if(!response.error){
          this.setState({albums:response.items})
        }
    });
  };

  componentDidMount() {
      this.fetchAlbums();
  };

  render() {

    const {
      params,
      albums,
    } = this.props

    // console.log(this.state.albums)

    return (
      <div>
        <h3 style={styles.title}>Albums</h3>

          <div style={styles.root}>
            <GridList
              cellHeight={250}
              style={styles.gridList}
            >
              {this.state.albums.map((album, index) => (
                <GridTile
                  key={album.id}
                  title={album.name}
                >
                  <img src={album.images[1].url} />
                </GridTile>
              ))}
            </GridList>
          </div>
      </div>
    )
  }
}
