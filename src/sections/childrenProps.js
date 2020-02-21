import React, { Component } from 'react';

class Box extends Component{
  constructor(...args){
    super(...args);
  }
  render(){
    return(
      <div style={{border: "1px solid black", margin: 5, padding: 5}}>
        {this.props.children}
      </div>
    )
  }
}

class Article extends Component{
  render(){
    const { author, title, date, children} = this.props;
    return(
      <section>
        <h2>{title}</h2>
        <p><em>{author}</em></p>
        <Box>{date}</Box>
        <article>
          {children}
        </article>
      </section>
    )
  }
}

class App extends Component {
  render(){
    return(
      <div className="App">
        <Article author="Alejandro" date={new Date().toLocaleDateString()} title="Titulo">
          <p>Lorem ipsum dolor sit cuchuflí barquillo bacán jote gamba listeilor po cahuín, 
              luca melón con vino pichanga coscacho ni ahí peinar la muñeca chuchada al chancho achoclonar. 
            Chorrocientos pituto ubicatex huevo duro</p>
        </Article>
      </div>
    );
  }
}

export default App;
