import React, { Component, PropTypes } from 'react';
import {Link, IndexLink} from 'react-router'
import {connect} from "react-redux"
import fetchJSON from "app/fetchJSON";
import consts from "app/consts"

import { get as getArtist } from "app/reducers/artist"

import ItemDetails from "ItemDetails"
import RaisedButton from 'material-ui/lib/raised-button';

const styles = {
  link: {
    margin: 20,
  },
};

@connect(
    (state) => ({
        artist : state.artist
    }),
    (dispatch) => ({
        getArtist : (value) => dispatch(getArtist(value)),
    })
)
export default class PageArtist extends Component {

  static propTypes = {
      params: PropTypes.shape({
        artistId:PropTypes.string,
      }),
      artists : PropTypes.object,
      getArtist : PropTypes.func,
  };

  static defaultProps = {
      params: {},
      artist : null,
      getArtist : () => {}
  };

  componentDidMount(){
      const {
        params,
        getArtist,
      } = this.props

      if(params.artistId) getArtist(params.artistId)
  }

  componentWillReceiveProps(nextProps){
    const {
      params,
      getArtist,
    } = this.props

    if(nextProps.params.artistId!=params.artistId){
      getArtist(nextProps.params.artistId)
    }
  }


  render() {
    const {
      params,
      artist,
    } = this.props

    console.log(artist);

    const lienPageAlbum = "http://localhost:8080/artist/"+params.artistId+"/albums";

    return (
      <div>
        {
            artist && !artist.loading &&
            <ItemDetails name={artist.name}
                         image={artist.picture ? artist.picture.url : null}
                         kinds={artist.genres}
                         songs={[{name:"..."},{name:"..."},{name:"..."}]}  />

        }

        <div>
        <Link className={styles.link} to={lienPageAlbum}>
            Accéder aux albums
        </Link>
        </div>
      </div>
    )
  }
}
