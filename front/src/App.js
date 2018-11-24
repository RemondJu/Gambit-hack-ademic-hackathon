import React, { Component } from 'react';
import './css/App.css';
import { Switch, Route } from 'react-router-dom'
import Container from './components/Container';
import ProjectDetail from './components/ProjectDetail';
import Participate from './components/Participate';
import projects from './projects'
import Statistique from './components/Statistique';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      filter: '',
      toggleFilter: false,
      rangeFilter: 100,
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
        <Switch>
          <Route exact path="/" ><Container 
          filter={this.state.filter}
          toggleFilter={this.state.toggleFilter}
          resetFilter={this.resetFilter}
          projects={projects}
          filterChoice={this.filterChoice}
          rangeChoice={this.rangeChoice}
          rangeFilter={this.state.rangeFilter}
          /></Route>
          <Route exact path="/Stats"><Statistique/></Route>
          {projects.map(project => <Route key={project.id} path={`/project-detail/${project.id}`}>
            <ProjectDetail 
              name={project.name}
              description={project.description}
              image={project.image}
              category={project.category}
              goal={project.goal}
              balance={project.balance}
              link={`/project-participation/${project.id}`}
            />
          </Route>)}
          {projects.map(project => <Route key={project.id} path={`/project-participation/${project.id}`}>
            <Participate 
              name={project.name}
              category={project.category}
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
