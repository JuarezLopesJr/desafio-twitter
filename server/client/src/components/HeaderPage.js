import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Header, Segment, Button, Icon } from 'semantic-ui-react';

class HeaderPage extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <Button as="a" href="/auth/twitter" color="twitter">
            <Icon name="twitter" /> Twitter
          </Button>
        );
      default:
        return (
          <Button as="a" href="/api/logout" color="red">
            <Icon name="remove user" /> Log Out
          </Button>
        );
    }
  }

  render() {
    return (
      <Segment clearing style={{ marginTop: 5 }}>
        <Header as="h2" floated="right">
          {this.renderContent()}
        </Header>
        <Header as="h2" floated="left">
          <Link to={this.props.auth ? '/dashboard' : '/'}>Desafio Twitter</Link>
        </Header>
      </Segment>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(HeaderPage);
