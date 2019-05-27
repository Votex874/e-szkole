import React, { Component } from 'react'

import styled from 'styled-components'
import { lightBlue } from '../../../constColors'
import { connect } from 'react-redux'
import { editPost } from '../../../reducers/actions/postsActions'

const Title = styled.h2`
  color: #5E5E5E;
  text-align: center;
  margin: 10px auto;
  @media(max-width: 767px){
    font-size: 22px;
    width: 90%;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media(max-width: 767px){

  }
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  @media(max-width: 767px){

  }
`

const Input = styled.input`
  border: ${props => props.submit ? `2px solid ${lightBlue}` : 'none'};
  border-bottom: ${props => props.submit ? '' : '1px solid #5E5E5E'};
  border-radius: ${props => props.submit ? '10px' : ''};
  background-color: #fff;
  color: ${props => props.submit ? `${lightBlue}` : ''};
  font-weight: ${props => props.submit ? `bold` : ''};
  outline: none;
  margin: ${props => props.submit ? '10px 0' : '0'};
  @media(max-width: 767px){
    width: ${props => props.submit ? '140px' : '200px'};
    padding: ${props => props.submit ? '10px' : '7px 5px 2px 5px'};
    border-radius: ${props => props.submit ? '5px' : ''};
    font-size: ${props => props.submit ? '18px': '16px'};
  }
`

const Textarea = styled.textarea`
  border: none;
  border-bottom: 1px solid #5E5E5E;
  outline: none;
  resize: none;
  @media(max-width: 767px){
    width: 200px;    
    padding: 7px 5px 2px 5px;
    font-size: 16px;
  }
`

const HrLine = styled.hr`
 border-color: ${lightBlue};
 width: 80%;
 margin: 10px auto;
 opacity: 0.8;
 @media (max-width: 767px){
   margin: 10px auto;
 }
`

class NewPost extends Component {
  constructor(props){
    super(props)

    const postProps = this.props.post
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();
    let day = currentDate.getDate();
    

    this.state = {
      title: postProps ? postProps.title : '',
      author: postProps ? postProps.author : '',
      content: postProps ? postProps.content : '',
      _id: postProps ? postProps._id : '',
      date: postProps ? postProps.date.slice(0, 10) : `${day}/${month + 1}/${year}`,
      currentDate: `${day}/${month + 1}/${year}`
    }
  }

  changeInput = e => {
    switch (e.target.name){
      case 'title': {
        this.setState({
          title: e.target.value
        })
        return null
      }
      case 'author': {
        this.setState({
          author: e.target.value
        })
        return null
      }
      case 'date': {
        this.setState({
          date: e.target.value
        })
        return null
      }
      case 'content': {
        this.setState({
          content: e.target.value
        })
        return null
      }
      default: 
        return null 
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const { title, author, _id, date, content } = this.state
    const arrayOfError = [];
    const data = {
      title,
      author,
      date,
      content,
      _id
    }
    if(!(title.lenght === 0 || author.length === 0 || content.length === 0)){ 
      if (this.props.edit){
        this.props.editPost(data)
        this.setState({
          title: '',
          author: '',
          content: '',
          date: this.state.currentDate,
          _id: ''
        })
      } else {

      }
    } else {
      arrayOfError.push('wszystkie pola powinny zostać uzupełnione')
    }
    
  }

  render(){
    const { title, author, content, date} = this.state
    return (
      <React.Fragment>
        <Title>
          {this.props.edit 
            ? `Edytuj post`
            : 'Dodaj nowy post'
          }
        </Title>
        <HrLine />
        <Form onSubmit={e => this.handleSubmit(e)}>
          <Label>Tytuł:
            <Input type="text" name='title' value={title} onChange={e => this.changeInput(e)}></Input>
          </Label>
          <Label>Autor:
            <Input type="text" name='author' onChange={e => this.changeInput(e)} value={author}></Input>
          </Label>
          <Label>Data:
            <Input type="text" name='date' disabled onChange={e => this.changeInput(e)} value={date}></Input>
          </Label>
          <Label>Text:
            <Textarea name='content' onChange={e => this.changeInput(e)} value={content}></Textarea>
          </Label>
          <Input submit type='submit' value='Wyślij'/>
        </Form>
      </React.Fragment>
    )
  }
}

export default connect(null , { editPost })(NewPost)