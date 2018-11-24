import React, { Component } from 'react';
import './css/App.css';
import { Switch, Route } from 'react-router-dom'
import Container from './components/Container';
import ProjectDetail from './components/ProjectDetail';
import Participate from './components/Participate';
import Test from './components/Test';

const projects = [
  {
    id: 1,
    name: 'Project 1',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    category: 'ecology',
    image: 'http://brayinvestmentgroup.com/wp-content/uploads/2018/02/project-funding.jpg',
    goal: 10000,
    balance: 0,
  },{
    id: 2,
    name: 'Project 2',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    category: 'culture',
    image: 'http://brayinvestmentgroup.com/wp-content/uploads/2018/02/project-funding.jpg',
    goal: 8000,
    balance: 900,
  },{
    id: 3,
    name: 'Project 3',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    category: 'food',
    image: 'http://brayinvestmentgroup.com/wp-content/uploads/2018/02/project-funding.jpg',
    goal: 12000,
    balance: 5000,
  },{
    id: 4,
    name: 'Project 4',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    category: 'social',
    image: 'http://brayinvestmentgroup.com/wp-content/uploads/2018/02/project-funding.jpg',
    goal: 11000,
    balance: 8000,
  },{
    id: 5,
    name: 'Project 5',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    category: 'sports',
    image: 'http://brayinvestmentgroup.com/wp-content/uploads/2018/02/project-funding.jpg',
    goal: 9000,
    balance: 4500,
  },
]

class App extends Component {
  render() {
    return (
      <div className="App">
      <Test />
        <Switch>
          <Route exact path="/" ><Container projects={projects}/></Route>
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
