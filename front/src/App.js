import React, { Component } from 'react';
import './css/App.css';
import { Switch, Route } from 'react-router-dom'
import Container from './components/Container';
import ProjectDetail from './components/ProjectDetail';
import Participate from './components/Participate';
import Statistique from './components/Statistique';
import Test from './components/Test';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      filter: '',
      toggleFilter: false,
      rangeFilter: 100,
      projects: [],
    }
    this.filterChoice = this.filterChoice.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
    this.rangeChoice = this.rangeChoice.bind(this);
  }

  filterChoice(e){
    this.setState({
      filter: e.target.value,
      toggleFilter: true,
    })
  }

  componentDidMount(){
    fetch("http://localhost:8080/api/project/select.php")
        .then(response => response.json())
        .then(data => {
        this.setState({
            projects: data,          
        });
    });
  }

  rangeChoice(e){
    this.setState({
      rangeFilter: e.target.value,
    })
  }

  resetFilter(){
    this.setState({
      toggleFilter: false,
      rangeFilter: 100,
    })
  }

  render() {
    return (
      <div className="App">
       {/*  <Test />  */}
        <Switch>
          <Route exact path="/" ><Container 
          filter={this.state.filter}
          toggleFilter={this.state.toggleFilter}
          resetFilter={this.resetFilter}
          projects={this.state.projects}
          filterChoice={this.filterChoice}
          rangeChoice={this.rangeChoice}
          rangeFilter={this.state.rangeFilter}
          /></Route>
          <Route exact path="/Stats"><Statistique/></Route>
          {this.state.projects.map(project => <Route key={project.id} path={`/project-detail/${project.id}`}>
            <ProjectDetail 
              name={project.name}
              description={project.description}
              image={project.image} 
              category={project['category_name']}
              goal={project.goal}
              balance={project.balance}
              link={`/project-participation/${project.id}`}
            />
          </Route>)}
          {this.state.projects.map(project => <Route key={project.id} path={`/project-participation/${project.id}`}>
            <Participate 
              name={project.name}
              category={project['category_name']}
              goal={project.goal}
              balance={project.balance}
            />
          </Route>)}          
        </Switch>
      </div>
    );
  }
}

export default App;
