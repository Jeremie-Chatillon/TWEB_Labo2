import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import CommentsForm from '../src/components/CommentsForm';
import RowIssues from '../src/components/RowIssues';
import TableIssues from '../src/components/TableIssues';
import IssueDescriptionheader from '../src/components/IssueDescriptionHeader';
import IssueDescritpionPaper from '../src/components/IssueDescritpionPaper';
import IssueAvatar from '../src/components/IssueAvatar';
import TableSised from '../src/components/TableSised';
import SelectList from '../src/components/SelectList';
import SearchForm from '../src/components/SearchForm';
import TextFieldCustom from '../src/components/TextFieldCustom';


let id = 0;
function createData(status, header, info, commentNumbers) {
  id += 1;
  return { id, status, header, info, commentNumbers};
}

function createDataList(value, text) {
  id += 1;
  return { id, value, text};
}

const rows = [
  createData('OPEN', 'Test1' , 'Ceci est l\'info de test 1Ceci est l\'info de test 1Ceci est l\'info de test 1Ceci est l\'info de test 1Ceci est l\'info de test 1Ceci est l\'info de test 1Ceci est l\'info de test 1Ceci est l\'info de test 1Ceci est l\'info de test 1', 3),
  createData('CLOSED', 'Test2' , 'Ceci est l\'info de test 2', 31),
  createData('OPEN', 'Test3' , 'Ceci est l\'info de test 3', 32),
  createData('CLOSED', 'Test4' , 'Ceci est l\'info de test 4', 0),
  createData(1, 'Test5' , 'Ceci est l\'info de test 5', 21),
  createData('OPEN', 'Test1' , 'Ceci est l\'info de test 1Ceci est l\'info de test 1Ceci est l\'info de test 1Ceci est l\'info de test 1Ceci est l\'info de test 1Ceci est l\'info de test 1Ceci est l\'info de test 1Ceci est l\'info de test 1Ceci est l\'info de test 1', 3),
  createData('CLOSED', 'Test2' , 'Ceci est l\'info de test 2', 31),
  createData('OPEN', 'Test3' , 'Ceci est l\'info de test 3', 32),
  createData('CLOSED', 'Test4' , 'Ceci est l\'info de test 4', 0),
  createData(1, 'Test5' , 'Ceci est l\'info de test 5', 21),
];

const rowsList = [
  createDataList('NULL', 'All'),
  createDataList('CLOSED', 'Close'),
  createDataList('OPEN', 'Open'),
];


storiesOf('CommentsForm', module)
  .add('1 comment', () => (
    <CommentsForm commentNumbers = '1'></CommentsForm>
  )).add('10 comment', () => (
  <CommentsForm commentNumbers = '10'></CommentsForm>
  ));

  storiesOf('IssueAvatar', module)
  .add('DEFAULT', () => (
    <IssueAvatar value={'DEFAULT'}/>
  ))
  .add('OPEN', () => (
    <IssueAvatar value={'OPEN'}/>
  ))
  .add('CLOSED', () => (
    <IssueAvatar value={'CLOSED'}/>
  ));

  storiesOf('RowIssues', module)
  .add('Exemple 1', () => (
    <RowIssues
      status = 'OPEN'
      info ='On a des prblèmes, aidez-nous.'
      commentNumbers = '2'
      header = 'Probleme CSS'
      ></RowIssues>
  ))
  .add('Exemple 2', () => (
    <RowIssues
      status = 'CLOSED'
      info ='On a ecore des prblèmes, aidez-nous.'
      commentNumbers = '6'
      header = 'Encore des probleme CSS'
      ></RowIssues>
  ));

storiesOf('TableIssues', module)
  .add('TableIssues', () => (
      <Router>

      <Switch>
        <Route default path="*" exact component={TableIssues} />
        <Route
        path="/issues" 
        component={IssueDescritpionPaper}
        />
      </Switch>


  </Router>
      //<TableIssues rows={rows}/>
    ))

storiesOf('TableSised', module)
.add('TableSised', () => (
    <TableSised rows={rows}/>
  ))

storiesOf('IssueDescriptionheader', module)
.add('Exemple 1', () => (
  <IssueDescriptionheader text={'This is a header'}/>
))
.add('Exemple 2', () => (
  <IssueDescriptionheader text={'This is 2nd a header'}/>
));

storiesOf('IssueDescritpionPaper', module)
  .add('Exemple 1', () => (
    <IssueDescritpionPaper header={'This is a header'} text={'This is a issue content.This is a issue content.This is a issue content.This is a issue content.This is a issue content.This is a issue content.This is a issue content.This is a issue content.This is a issue content.This is a issue content.This is a issue content.This is a issue content.This is a issue content.This is a issue content.This is a issue content.This is a issue content.This is a issue content.This is a issue content.'}/>
  ))
  .add('Exemple 2', () => (
    <IssueDescritpionPaper header={'This is a 2nd header'} text={'Tdsadxsahis is a issue content.This is a issue content.This is a issue content.This is a issue content.This is a issue content.This is a issue content.This is a issue content.This is a issue content.This is a issue content.This is a issue content.This is a issue content.This is a issue content.This is a issue content.This is a issue content.This is a issue content.This is a issue content.This is a issue content.This is a issue content.'}/>
  ));  

storiesOf('SelectList', module)
.add('SelectList', () => (
    <SelectList values={rowsList} title={'Filter status'}/>
  ));

storiesOf('TextFieldCustom', module)
.add('name', () => (
  <TextFieldCustom title={"name"}/>
  ))
  .add('First name', () => (
    <TextFieldCustom title={"First name"}/>
  ));

  storiesOf('SearchForm', module)
  .add('First name', () => (
    <SearchForm title={"First name"}/>
  ));