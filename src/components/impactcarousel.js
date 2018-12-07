import React, { Component } from 'react';
import { Carousel, Col } from 'react-bootstrap';

export default class ImpactCarousel extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
    	<Col sm={6} smOffset={3}>
	      <Carousel
	        activeIndex={index}
	        direction={direction}
	        onSelect={this.handleSelect}
	      >
	        <Carousel.Item>
	          <img width={1200} height={900} alt="1200x900" align="center" src={require("../images/carousel.png")} />
	          <Carousel.Caption>
	            <h3>First slide label</h3>
	            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
	          </Carousel.Caption>
	        </Carousel.Item>
	        <Carousel.Item>
	          <img width={1200} height={900} alt="1200x900" align="center" src={require("../images/carousel.png")} />
	          <Carousel.Caption>
	            <h3>Second slide label</h3>
	            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
	          </Carousel.Caption>
	        </Carousel.Item>
	        <Carousel.Item>
	          <img width={1200} height={900} alt="1200x900" align="center" src={require("../images/carousel.png")} />
	          <Carousel.Caption>
	            <h3>Third slide label</h3>
	            <p>
	              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
	            </p>
	          </Carousel.Caption>
	        </Carousel.Item>
	      </Carousel>
      </Col>
    )
  }
}