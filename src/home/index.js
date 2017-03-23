/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import { title, html } from './index.md';


class HomePage extends React.Component {

  constructor(props){
    super(props)
    this.state = {status: 0}
  }

  static propTypes = {
    articles: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }).isRequired).isRequired,
  };

  componentDidMount() {
    document.title = 'Jajwol';
    window.addEventListener('scroll', this.handleScroll);
  }

  scroll(e, element){
    e.preventDefault();
    element.scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  }

  render() {
    return (
      <article className={s['article']}>
        <section className={s['left-section']}>
          <div className={s['menu']}>
            <div className={
              this.state.status === 1
              ?s['menu-item-active']
              :s['menu-item']}
              onClick={
                () => this.setState({stateNum: this.state.status = 1}),
                (e) => this.scroll(e, this.name)
              }>
              JAJWOL
            </div>
            <div className={
              this.state.status === 2
              ?s['menu-item-active']
              :s['menu-item']
            }
            onClick={
              ()=>this.setState({stateNum: this.state.status = 2}),
              (e) => this.scroll(e, this.portfolio)
            }>
              PORTFOLIO
            </div>
            <div className={
              this.state.status === 3
              ?s['menu-item-active']
              :s['menu-item']
            }
            onClick={()=>this.setState({stateNum: this.state.status = 3})}
            >
              CONTACT
            </div>
          </div>
        </section>
        <span ref={(input) => { this.name = input; }}/>
        <span ref={(input) => { this.portfolio = input; }}/>
        <span ref={(input) => { this.contact = input; }}/>
        <section className={s['right-section']}>
          <div className={s['image-set']}>
            <div className={s['image-one']} id='jajwol'>
              <div className={s['title-name']}>
                JAJWOL
              </div>
            </div>
            <div className={s['image-two']} id='portfolio'>
              <div className={s['portfolio']}>
                Graphic Designer
              </div>
              <div className={s['portfolio']}>
                Junior Web Developer
              </div>
            </div>
            <div className={s['image-three']} id='contact'>
              <div className={s['contact']}>
                <div className={s['contact-details']}>
                  jajwolya@outlook.com
                </div>
                <div className={s['contact-details']}>
                  0479 119 764
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    );
  }

}

export default HomePage;
