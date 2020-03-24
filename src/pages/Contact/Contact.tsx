import * as React from 'react';
import { connect } from 'react-redux';
import { ActionCreator, bindActionCreators, Dispatch } from 'redux';

// ActionCreators.
import { setTitle } from '../../store/layout/actionCreators';

// Components.
import { Page } from '../../components/Page';

// Strings.
import { Titles } from '../../constants';

// Types.
import { ISetTitleAction } from '../../store/layout/types';

export interface IProps {
  setTitle: ActionCreator<ISetTitleAction>;
}

export class Contact extends React.PureComponent<IProps> {
  public componentDidMount(): void {
    this.props.setTitle(Titles.CONTACT);
  }

  public render(): React.ReactElement<Contact> {
    return (
      <Page>
        <h1>Contact</h1>
      </Page>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setTitle: bindActionCreators(setTitle, dispatch),
});

export default connect(
  null,
  mapDispatchToProps
)(Contact);
