import React, { ReactNode } from 'react';
import { Typography } from '@bob/core-components';
import { ResponseNoChildren } from '../../../../redux/modules/umbraco/types/sagas.types';

export default (umbraco: ResponseNoChildren) => {
  const content: Array<ReactNode> = [];
  Object.keys(umbraco.props).forEach(k => {
    content.push(
      <Typography fontWeight="bold" gutterBottom color="violet">
        {k.toUpperCase()}
      </Typography>,
    );
    let str = umbraco.props[k].value.replace(/<p>|<\/p>/g, '');
    str = str.replace(/<br \/>| <br\/>/g, '__SPLIT_THIS__');
    str.split('__SPLIT_THIS__').forEach(s => {
      if (s !== '') {
        content.push(<Typography gutterBottom>{s}</Typography>);
      }
    });
  });
  return content;
};
