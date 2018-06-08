// @flow
import React from 'react';

const Col3 = (props: {
  imageUrl: string,
  title: string,
  rating: string,
  description: string
}) => (
  <div className="col col_3">
    <div>
      <img src={props.imageUrl} alt="Movie" />
      <div>
        <h3>{props.title}</h3>
        <span>Rating: {props.rating}</span>
      </div>
    </div>
    <p>{props.description}</p>
  </div>
);

const Col2 = (props: {
  imageUrl: string,
  title: string,
  rating: string,
  description: string
}) => (
  <div className="col col_2">
    <img src={props.imageUrl} alt="Movie" />
    <div>
      <h3>{props.title}</h3>
      <span>Rating: {props.rating}</span>
      <p>{props.description}</p>
    </div>
  </div>
);

const Col1 = (props: {
  imageUrl: string,
  title: string,
  rating: string,
  description: string
}) => (
  <div className="col col_1">
    <img src={props.imageUrl} alt="Movie" />
    <div>
      <h1>{props.title}</h1>
      <h4>Rating: {props.rating}</h4>
      <p>{props.description}</p>
    </div>
  </div>
);

const Col = (props: {
  type: number,
  imageUrl: string,
  title: string,
  rating: string,
  description: string
}) => {
  if (props.type === 1) {
    return <Col1 {...props} />;
  } else if (props.type === 2) {
    return <Col2 {...props} />;
  }
  return <Col3 {...props} />;
};

export default Col;
