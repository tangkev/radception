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
    	<Col sm={10} smOffset={1}>
	      <Carousel
	        activeIndex={index}
	        direction={direction}
	        onSelect={this.handleSelect}
	      >
	        <Carousel.Item>
	          <img width={1182} height={667} alt="1182x667" align="center" src={require("../images/slide1.png")} />
	        </Carousel.Item>
	        <Carousel.Item>
	          <img width={1182} height={667} alt="1182x667" align="center" src={require("../images/slide2.png")} />
	        </Carousel.Item>
	        <Carousel.Item>
	          <img width={1182} height={667} alt="1182x667" align="center" src={require("../images/slide3.png")} />
	        </Carousel.Item>
	        <Carousel.Item>
	          <img width={1182} height={667} alt="1182x667" align="center" src={require("../images/slide4.png")} />
	        </Carousel.Item>
	      </Carousel>
      </Col>
    )
  }
}