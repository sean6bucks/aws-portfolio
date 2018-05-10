import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <main class="overflow--auto">
          <h1 class="color--skyBlue section__heading--largest">CLOUD GURU</h1>

          <ul class="section--social">
            <li class="socialWrapper">
              <a
                class="color--skyBlue social"
                title="LinkedIn Profile"
                target="_blank"
                href="#"
              >
                <i class="fa fa-linkedin" />
              </a>
            </li>

            <li class="socialWrapper color--skyBlue">
              <a
                class="social color--skyBlue"
                title="GitHub Profile"
                target="_blank"
                href="#"
              >
                <i class="fa fa-github" />
              </a>
            </li>

            <li class="socialWrapper">
              <a class="social color--skyBlue" title="Resume" href="#">
                <i class="fa fa-file-text" />
              </a>
            </li>
          </ul>
        </main>

        <section class="background--skyBlue section">
          <h2 class="color--cloud margin--none section__text--centered">
            Portfolio
          </h2>
        </section>

        <section class="section section--alignCentered section--description">
          <div class="section__exampleWrapper">
            <div class="section__example">
              <img
                alt="example screenshot of a project involving code"
                class="section__exampleImage"
                src="images/example1.png"
              />
              <dl class="color--cloud">
                <dt class="section__exampleTitle section__text--centered">
                  Work Example
                </dt>
                <dd />
              </dl>
            </div>
          </div>

          <div class="section__exampleWrapper">
            <div class="section__example">
              <img
                alt="example screenshot of a project involving chemistry"
                class="section__exampleImage"
                src="images/example2.png"
              />
              <dl class="color--cloud">
                <dt class="section__exampleTitle section__text--centered ">
                  Work Example
                </dt>
                <dd />
              </dl>
            </div>
          </div>

          <div class="section__exampleWrapper">
            <div class="section__example">
              <img
                alt="example screenshot of a project involving cats"
                class="section__exampleImage"
                src="images/example3.png"
              />
              <dl class="color--cloud">
                <dt class="section__exampleTitle section__text--centered">
                  Work Example
                </dt>
                <dd />
              </dl>
            </div>
          </div>
        </section>

        <section class="background--skyBlue section">
          <h2 class="color--cloud margin--none section__text--centered">
            About Me
          </h2>
        </section>

        <section class="section section--alignCentered section--description">
          <p class="color--darkgrey section__description">
            I am learning to code in the cloud! I like to work hard and learn
            new things. I want to work for a company that will pay me to code in
            the cloud!
          </p>

          <div class="background--skyBlue modal--closed">
            <span class="color--cloud modal__closeButton">
              <i class="fa fa-window-close-o" />
            </span>
            <img
              alt="example screenshot of a project involving code"
              class="modal__image"
              src="images/example1.png"
            />
            <div class="color--cloud modal__text">
              <h2 class="modal__title">Work Example Name</h2>
              <a class="color--skyBlue modal__link" href="#">
                Check it out
              </a>
              <p class="modal__description">
                A long description of the work in question.
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default App
