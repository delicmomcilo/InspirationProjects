import React from 'react';
import Accordion from '../Accordion';
import { Summary } from './accordion.styles';

export const Component = (): JSX.Element  => {
  const [open, setOpen] = React.useState(false);
  //
  // const handleChange = (key: keyof typeof checked) => () => {
  //   setChecked(prev => ({ ...prev, [key]: !prev[key] }));
  // };
  //
  // const getKeys = () => Object.keys(checked) as Array<keyof typeof checked>;

  return (
    <Accordion
      title="Check List Title"
    >
      <h2 className="bob-core-components-typography__regular--medium-1--coal">Header</h2>
      <span className="bob-core-components-typography__regular--medium-1--coal">Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem </span>
      <span className="bob-core-components-typography__regular--medium-1--coal">Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem </span>
      <span className="bob-core-components-typography__regular--medium-1--coal">Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem </span>
      <span className="bob-core-components-typography__regular--medium-1--coal">Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem </span>
      <h2 className="bob-core-components-typography__regular--medium-1--coal">Header</h2>
      <span className="bob-core-components-typography__regular--medium-1--coal">Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem </span>
      <span className="bob-core-components-typography__regular--medium-1--coal">Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem </span>
      <span className="bob-core-components-typography__regular--medium-1--coal">Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem </span>
      <span className="bob-core-components-typography__regular--medium-1--coal">Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem </span>
      <h2 className="bob-core-components-typography__regular--medium-1--coal">Header</h2>
      <span className="bob-core-components-typography__regular--medium-1--coal">Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem </span>
      <span className="bob-core-components-typography__regular--medium-1--coal">Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem </span>
      <span className="bob-core-components-typography__regular--medium-1--coal">Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem </span>
      <span className="bob-core-components-typography__regular--medium-1--coal">Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem </span>
    </Accordion>
  );
};

export default {
  title: 'Accordion',
  parameters: {
    info: { inline: true },
  },
};