import React from 'react';
import { storiesOf } from '@storybook/react';
import CommentsForm from '../src/components/CommentsForm';
import RowIssues from '../src/components/RowIssues';
import TableIssues from '../src/components/TableIssues';
import PaperContent from '../src/components/PaperContent';
import IssueDescriptionheader from '../src/components/IssueDescriptionHeader';
import IssueDescritpionPaper from '../src/components/IssueDescritpionPaper';
import IssueAvatar from '../src/components/IssueAvatar';

let id = 0;
function createData(status, header, info, commentNumbers) {
  id += 1;
  return { id, status, header, info, commentNumbers};
}

const rows = [
  createData('OPEN', 'Test1' , 'Ceci est l\'info de test 1Ceci est l\'info de test 1Ceci est l\'info de test 1Ceci est l\'info de test 1Ceci est l\'info de test 1Ceci est l\'info de test 1Ceci est l\'info de test 1Ceci est l\'info de test 1Ceci est l\'info de test 1', 3),
  createData('CLOSE', 'Test2' , 'Ceci est l\'info de test 2', 31),
  createData('OPEN', 'Test3' , 'Ceci est l\'info de test 3', 32),
  createData('CLOSE', 'Test4' , 'Ceci est l\'info de test 4', 0),
  createData(1, 'Test5' , 'Ceci est l\'info de test 5', 21),
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
  .add('CLOSE', () => (
    <IssueAvatar value={'CLOSE'}/>
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
      status = 'CLOSE'
      info ='On a ecore des prblèmes, aidez-nous.'
      commentNumbers = '6'
      header = 'Encore des probleme CSS'
      ></RowIssues>
  ));

storiesOf('TableIssues', module)
  .add('TableIssues', () => (
      <TableIssues rows={rows}/>
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