/**
 * Creates an empty editor state with some plugins
 */

import { EditorState } from 'draft-js';
// import createCompositeDecorator from './createCompositeDecorator';
import customDecorator from './customDecorator';

export default (plugins) => {
  // const compositeDecorator = createCompositeDecorator(plugins);
  // console.log('compositeDecorator', compositeDecorator);
  return EditorState.createEmpty(customDecorator);
};
