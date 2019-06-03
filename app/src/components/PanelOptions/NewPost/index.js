import React, { Component } from 'react'

import styled from 'styled-components'
import { lightBlue } from '../../../constColors'
import { connect } from 'react-redux'
import { editPost, createPost } from '../../../reducers/actions/postsActions'
import Message from '../Message/index'
import Title from '../TitlePanel/index'

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
  font-size: 20px;
  color: #ABABAB;
  @media(max-width: 767px){
    font-size: 16px;
  }
`

const Input = styled.input`
  outline: none;
  transition: .2s;
  &:focus {
    background-color: #fff;
  }
  font-family: 'Lato', sans-serif;
  ${props => props.submit 
  ? { //submit
      border: `2px solid ${lightBlue}`,
      borderRadius: '15px',
      backgroundColor: '#fff',
      color: `${lightBlue}`,
      fontWeight: 'bold',
      margin: '10px 0',
      width: '200px',
      padding: '10px',
      fontSize: '26px',
      cursor: 'pointer',
    } 
  : { //input basic
      border: 'none',
      borderBottom: '1px solid #5E5E5E',
      backgroundColor: '#F1F1F1',
      color: '#ABABAB',
      width: '400px',
      padding: '15px 15px 2px 15px',
      fontSize: '20px',
    }
  }
  @media(max-width: 767px){
    ${props => props.submit
      ? { //submit
        borderRadius: '5px',
        width: '140px',
        fontSize: '18px',
      }
      : { //input basic,
        width: '200px',
        padding: '7px  5px 2px 5px',
        fontSize: '16px',
      }
    }
  }
   @media (min-width: 1400px){
    &:hover{
    ${props => props.submit
    ? {
      color: '#fff',
      backgroundColor: lightBlue
    }
    : null}
    }
    &:focus{
      ${props => props.submit
    ? null
    : {
      borderBottom: `2px solid ${lightBlue}`
    }}
    }
  }
`

const Textarea = styled.textarea`
  border: none;
  border-bottom: 1px solid #5E5E5E;
  outline: none;
  resize: none;
  width: 400px;
  padding: 15px 15px 2px 15px;
  background-color: #F1F1F1;
  color: #ABABAB;
  font-size: 20px;
  height: 160px;
  font-family: 'Lato', sans-serif;
  &:focus {
    background-color: #fff;
  }
  @media(max-width: 767px){
    width: 200px;    
    padding: 7px 5px 2px 5px;
    font-size: 16px;
  }
  @media(min-width: 1400px){
    &:focus{
      border-bottom: 2px solid ${lightBlue};
    }
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
      currentDate: `${day}/${month + 1}/${year}`,
      errors: [],
      messages: [],
      messageComponent: false,
      error: false
    }
  }

  changeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    const { title, author, _id, date, content } = this.state
    const messageArray = [];
    let isError = false
    if(!(title.lenght === 0 || author.length === 0 || content.length === 0)){ 
      if (this.props.edit){ 
        const data = {
          title, author, date, content, _id
        }
        this.props.editPost(data)    
        messageArray.push('Post został zaktualizownay.')    
      } else { 
        const data = {
          title, author, content,
        }
        this.props.createPost(data)
        messageArray.push('Post został pomyślnie dodany.')    
      }
      this.setState({
        title: '',
        author: '',
        content: '',
        date: this.state.currentDate,
        _id: '',

      })
    } else {
      isError = true    
    }
    this.setState({
      messageComponent: true,
      messages: messageArray.length !== 0 ? messageArray : ['Przepraszamy, ale wszystkie pola powinny zostać uzupełnione'] ,
      error: isError
    })
    const setTime = setTimeout(() => {
      this.setState({
        messageComponent: false
      })
    }, 3000)
  }

  render(){
    const { title, author, content, date, error, messages, messageComponent} = this.state
    return (
      <React.Fragment>
        {this.props.edit 
          ? <Title text='Edytuj post'/>
          : <Title text='Dodaj nowy post'/>          
        }
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
          {messageComponent 
            ? <Message error={error} messages={messages} />
            : null
          }
          <Input submit type='submit' value='Wyślij'/>
        </Form>
      </React.Fragment>
    )
  }
}

export default connect(null , { editPost, createPost })(NewPost)