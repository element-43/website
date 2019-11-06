import * as React from 'react';
import { connect } from 'react-redux';
import { ActionCreator, bindActionCreators, Dispatch } from 'redux';

// ActionCreators.
import { setTitle } from '../../store/layout/actionCreators';

// Components.
import { Page } from '../../components/Page';

// Strings.
import { Titles } from '../../../common/strings';

// Types.
import { SetTitleAction } from '../../store/layout/types';

export interface Props {
  setTitle: ActionCreator<SetTitleAction>;
}

export class Home extends React.PureComponent<Props> {
  public componentDidMount(): void {
    this.props.setTitle(Titles.DEFAULT);
  }

  public render(): React.ReactElement<Home> {
    return (
      <Page>
        <h1>Hello human</h1>
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
)(Home);