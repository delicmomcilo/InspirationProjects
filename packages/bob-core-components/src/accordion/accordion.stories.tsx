import React from "react";
import Accordion from "../Accordion";
import Card from "../Card";
import { Story } from "@storybook/react";
import { IProps } from "../accordion/accordion.types";
import Button from "../Button";
import Typography from "../Typography";

const children = (
  <>
    <h2 className="bob-core-components-typography__regular--medium-1--coal">
      Header
    </h2>
    <span className="bob-core-components-typography__regular--medium-1--coal">
      Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem
      Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem
      Lorem lorem{" "}
    </span>
    <span className="bob-core-components-typography__regular--medium-1--coal">
      Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem
      Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem
      Lorem lorem{" "}
    </span>
    <span className="bob-core-components-typography__regular--medium-1--coal">
      Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem
      Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem
      Lorem lorem{" "}
    </span>
    <span className="bob-core-components-typography__regular--medium-1--coal">
      Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem
      Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem
      Lorem lorem{" "}
    </span>
    <h2 className="bob-core-components-typography__regular--medium-1--coal">
      Header
    </h2>
    <span className="bob-core-components-typography__regular--medium-1--coal">
      Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem
      Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem
      Lorem lorem{" "}
    </span>
    <span className="bob-core-components-typography__regular--medium-1--coal">
      Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem
      Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem
      Lorem lorem{" "}
    </span>
    <span className="bob-core-components-typography__regular--medium-1--coal">
      Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem
      Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem
      Lorem lorem{" "}
    </span>
    <span className="bob-core-components-typography__regular--medium-1--coal">
      Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem
      Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem
      Lorem lorem{" "}
    </span>
    <h2 className="bob-core-components-typography__regular--medium-1--coal">
      Header
    </h2>
    <span className="bob-core-components-typography__regular--medium-1--coal">
      Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem
      Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem
      Lorem lorem{" "}
    </span>
    <span className="bob-core-components-typography__regular--medium-1--coal">
      Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem
      Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem
      Lorem lorem{" "}
    </span>
    <span className="bob-core-components-typography__regular--medium-1--coal">
      Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem
      Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem
      Lorem lorem{" "}
    </span>
    <span className="bob-core-components-typography__regular--medium-1--coal">
      Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem
      Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem
      Lorem lorem{" "}
    </span>
  </>
);

const Template: Story<IProps> = args => <Accordion {...args} />;

export const Component = Template.bind({});

export const Advanced: Story<IProps> = args => (
  <Card>
    <Card.Header>Header</Card.Header>
    <Typography>Some content before. Open the accordion with controls.</Typography>
    <Accordion {...args} />
    <Card.Actions>
      <Button>Some actions</Button>
    </Card.Actions>
  </Card>
);
Advanced.args = {
  noCard: true,
  children,
  noButton: true,
  open: true
};

Component.args = {
  children,
  title: "Accordion title",
  noCard: false
};

export default {
  title: "Accordion",
  parameters: {
    info: { inline: true }
  }
};
