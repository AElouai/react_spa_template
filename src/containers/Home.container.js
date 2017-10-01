import React, { Component } from 'react';

class HomeContainer extends Component {
    render() {
        return (
            <section className="section">
              <div className="container">
                <h1 className="title">
                  Hello World
                </h1>
                <p className="subtitle">
                  My first website with <strong>Bulma</strong>!
                </p>
              </div>
            </section>
        );
    }
}

export default HomeContainer;