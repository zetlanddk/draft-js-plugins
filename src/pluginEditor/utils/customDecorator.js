import React from 'react';
import { List } from 'immutable';

// export type DraftDecoratorType = {
//   /**
//    * Given a `ContentBlock`, return an immutable List of decorator keys.
//    */
//   getDecorations(block: ContentBlock): List<?string>,
//
//   /**
//    * Given a decorator key, return the component to use when rendering
//    * this decorated range.
//    */
//   getComponentForKey(key: string): Function,
//
//   /**
//    * Given a decorator key, optionally return the props to use when rendering
//    * this decorated range.
//    */
//   getPropsForKey(key: string): ?Object,
// };

const getDecorations = (block) => {
  console.log('getDecorations block: ', block.toJS()); // eslint-disable-line
  // convert to text
  const decorations = Array(block.getText().length).fill(null);
  return List(decorations);
};

const getComponentForKey = (key) => (
  <span>Hello {key}</span>
);

const getPropsForKey = (key) => {
  console.log('getPropsForKey key: ', key); // eslint-disable-line
  return {};
};

module.exports = {
  getDecorations,
  getComponentForKey,
  getPropsForKey,
};
