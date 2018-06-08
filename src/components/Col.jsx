// @flow
import React from 'react';
import { Link } from 'react-router-dom';

const Col3 = (props: {
  imageUrl: string,
  title: string,
  rating: string,
  description: string,
  id: string
}) => (
  <div className="col col_3">
    <div>
      <img src={props.imageUrl} alt="Movie" />
      <div>
        <h3><Link to={`/details/${props.id}`}>{props.title}</Link></h3>
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
  description: string,
  id: string
}) => (
  <div className="col col_2">
    <img src={props.imageUrl} alt="Movie" />
    <div>
      <h3><Link to={`/details/${props.id}`}>{props.title}</Link></h3>
      <span>Rating: {props.rating}</span>
      <p>{props.description}</p>
    </div>
  </div>
);

const Col1 = (props: {
  imageUrl: string,
  title: string,
  rating: string,
  description: string,
  id: string
}) => (
  <div className="col col_1">
    <img src={props.imageUrl} alt="Movie" />
    <div>
      <h1><Link to={`/details/${props.id}`}>{props.title}</Link></h1>
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
  description: string,
  id: string
}) => {
  if (props.type === 1) {
    return (
      <Col1
        type={props.type}
        imageUrl={props.imageUrl}
        title={props.title}
        rating={props.rating}
        description={props.description}
        id={props.id}
      />
    );
  } else if (props.type === 2) {
    return <Col2 {...props} />;
  }
  return <Col3 {...props} />;
};

export default Col;
