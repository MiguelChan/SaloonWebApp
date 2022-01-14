import { 
  render, 
  RenderResult,
  screen,
} from '@testing-library/react';
import React from 'react';
import { SimpleNotice, SimpleNoticeProps } from './SimpleNotice';

describe('SimpleNotice', () => {

  it('Sohuld display the Notice', () => {
    const props: SimpleNoticeProps = {
      noticeBody: 'This is the Notice Body',
      noticeTitle: 'This is the Notice Title',
    };

    setupComponent(props);

    expect(screen.getByText(props.noticeBody)).toBeInTheDocument();
    expect(screen.getByText(props.noticeTitle)).toBeInTheDocument();
  });

  it('Should match the snapshot', () => {
    const props: SimpleNoticeProps = {
      noticeBody: 'This is the Notice Body',
      noticeTitle: 'This is the Notice Title',
    };

    const renderResult = setupComponent(props);

    expect(renderResult.container).toMatchSnapshot();
  });
;
  const setupComponent = (props: SimpleNoticeProps): RenderResult => {
    return render(<SimpleNotice {...props} />);
  }
});