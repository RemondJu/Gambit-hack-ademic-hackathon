import React, { Component } from 'react'
import '../css/progress.css';

 class Progress extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ecologyBadge: 0.3,
      cultureBadge: 0.3,
      healthBadge: 1,
      sportBadge: 0.3,
      gastronomyBadge: 1,
      educationBadge: 0.3,

      infoCard: {
        title: '',
        img: '',
        description: '',
        progress: 0,
    },
    showCardInfo: false,
    
    }
  }

  handleClickExit = () => {
    this.setState({ 
      showCardInfo: false,
    })}

  handleClickEcology = () => {
    this.setState({
      infoCard: {
          ...this.state.infoCard,
          title:'Ecology',
          img: 'http://image.noelshack.com/fichiers/2018/47/6/1543050898-ecology.png',
          description: 'lorem itsum icarnam',
          progress: 10, },
          showCardInfo: true
  })  
}
handleClickCulture = () => {
  this.setState({
    infoCard: {
        ...this.state.infoCard,
        title:'Culture',
        img: 'http://image.noelshack.com/fichiers/2018/47/6/1543050898-ticket.png',
        description: 'lorem itsum icarnam',
        progress: 0, },
        showCardInfo: true
})  
}
handleClickHealth = () => {
  this.setState({
    infoCard: {
        ...this.state.infoCard,
        title:'Health',
        img: 'http://image.noelshack.com/fichiers/2018/47/6/1543050898-heart.png',
        description: 'lorem itsum icarnam',
        progress: 100, },
        showCardInfo: true
})  
}
handleClickSport = () => {
  this.setState({
    infoCard: {
        ...this.state.infoCard,
        title:'Sport',
        img: 'http://image.noelshack.com/fichiers/2018/47/6/1543050898-basketball.png',
        description: 'lorem itsum icarnam',
        progress: 30, },
        showCardInfo: true
})  
}
handleClickgastronomy = () => {
  this.setState({
    infoCard: {
        ...this.state.infoCard,
        title:'Gastronomy',
        img: 'http://image.noelshack.com/fichiers/2018/47/6/1543050898-curry.png',
        description: 'lorem itsum icarnam',
        progress: 100, },
        showCardInfo: true
})  
}
handleClickeducation = () => {
  this.setState({
    infoCard: {
        ...this.state.infoCard,
        title:'Education',
        img: 'http://image.noelshack.com/fichiers/2018/47/6/1543050898-mortarboard.png',
        description: 'lorem itsum icarnam',
        progress: 10, },
        showCardInfo: true
})  
}

  render() {
    return (
   <div className="container">
    <div className="row">
      <div onClick={() => this.handleClickEcology()} className="ecology"><img style={{opacity: this.state.ecologyBadge}} src="http://image.noelshack.com/fichiers/2018/47/6/1543050898-ecology.png" alt=""/></div>
      <div onClick={() => this.handleClickCulture()} className="culture"><img style={{opacity: this.state.cultureBadge}} src="http://image.noelshack.com/fichiers/2018/47/6/1543050898-ticket.png" alt=""/></div>
      <div onClick={() => this.handleClickHealth()} className="health"><img style={{opacity: this.state.healthBadge}} src="http://image.noelshack.com/fichiers/2018/47/6/1543050898-heart.png" alt=""/></div>
      <div onClick={() => this.handleClickSport()} className="sport"><img style={{opacity: this.state.sportBadge}}  src="http://image.noelshack.com/fichiers/2018/47/6/1543050898-basketball.png" alt=""/></div>
      <div onClick={() => this.handleClickgastronomy()} className="gastronomy"><img style={{opacity: this.state.gastronomyBadge}}  src="http://image.noelshack.com/fichiers/2018/47/6/1543050898-curry.png" alt=""/></div>
      <div onClick={() => this.handleClickeducation()} className="education"><img style={{opacity: this.state.educationBadge}}  src="http://image.noelshack.com/fichiers/2018/47/6/1543050898-mortarboard.png" alt=""/></div>
      </div>
      
      {this.state.showCardInfo ? 
        <div className="containerInfo">
        <div className="row">
        <img src={this.state.infoCard.img} alt=""/>
        <h5>{this.state.infoCard.title}</h5>
        <button onClick={() => this.handleClickExit()}><img src="http://image.noelshack.com/fichiers/2018/47/6/1543062389-error-1.png" alt=""/></button>
        </div>
        <div className="row"><p>{this.state.infoCard.description}</p></div>
        <div className="row">Progress: {this.state.infoCard.progress} %</div>
      </div> : null }
   </div>
    )
  }
}
 

export default Progress;