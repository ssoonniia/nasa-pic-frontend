import React, {Component} from 'react'
import { fetchTodaysPhoto } from '../actions/picActions'
import PhotoInfo from './PhotoInfo'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";
import InformationPopOver from '../components/InformationPopOver'
import CommentsInput from '../components/commentsInput'


class Home extends Component {

  state ={
    redirect: false
  }

  setRedirect = () =>{
    this.setState({
      redirect: true
    })
  }

  componentDidMount(){
    this.props.fetchTodaysPhoto();
  }

    render(){
      return(
      <div >
        <PhotoInfo photoInfo={this.props.photo} />
        <InformationPopOver photo={this.props.photo}/>
        <CommentsInput />
      </div>
      )
    }
}

function mapDispatchToProps(dispatch){
  return { fetchTodaysPhoto: () => dispatch(fetchTodaysPhoto()) }
}


function mapStateToProps(state){
  return {photo: state.pictures}
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
