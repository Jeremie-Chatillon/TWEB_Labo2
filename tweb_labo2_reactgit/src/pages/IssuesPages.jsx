import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import TextFieldCustom from '../components/TextFieldCustom';
import SearchForm from '../components/SearchForm';
import TableSised from '../components/TableSised';

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
  },
  search: {
    display: "flex",
    flexWrap: "wrap"
  },
});

const GET_REPOSITORY = gql`
query RepoIssues($owner: String!, $repo: String!)  {
  repository(owner: $owner, name: $repo) {
    issues(first: 50) {
      totalCount
      edges {
        cursor
        node {
          title
          state
          author { login avatarUrl }
          body
          createdAt
          comments {
            totalCount
          }
        }
      }
    }
  }
}`;





class IssuesPage extends React.Component {
  
  state = {
    user: '',
    repo: '',
  };

  creatRow(row){
    return {
      key: row.cursor,
      status: row.node.state,
      header: row.node.title,
      text: row.node.body,
      info: 'from: ' + row.node.auto + ' // at: ' + row.node.createdAt,
      commentNumbers: row.node.comments.totalCount,
    };
  }

 repos(user, repository) {
    return (
      <Query
        query={GET_REPOSITORY}
        fetchPolicy={"cache-and-network"}
        variables={{ owner: user, repo: repository}}
      >
        {({ loading, error, data }) => {
          if (loading){
            return <div>Loading...</div>;
          } else if(error){
            return <div>Name and repo don't exist </div>;
          }

        
          const { edges } = data.repository.issues;
          const tab = edges.map(this.creatRow);
          
          return(
            <TableSised rows={tab}/>
          );
        }}
      </Query>
    );
  };

  choose(){
    const { user, repo } = this.state;
    if(this.state.user === "" || this.state.repo === ""){
      return (<div>Choose a user and a repo</div>);
    } else{
      return (this.repos(user, repo));
    }
  };

  handleChangeUser(user){
    this.setState({
      user: user,
    });
  };


  handleChangeRepo(repo){
    this.setState({
      repo: repo,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.search}>
          <TextFieldCustom title="User" onChanges={this.handleChangeUser.bind(this)}></TextFieldCustom>
          <TextFieldCustom title="Repo" onChanges={this.handleChangeRepo.bind(this)}></TextFieldCustom>
        </div>
        {this.choose()}

      </div>
    );
  }
}

SearchForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IssuesPage);
