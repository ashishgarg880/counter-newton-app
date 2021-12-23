import './App.css';
import React,{Component} from 'react';
import Images from './component/images';
import List from './component/list';
import { Stack} from "@mui/material";
//import { borderColor } from '@mui/system';
//import { blueGrey } from '@mui/material/colors';
export default class App extends Component{
  constructor(props){
     super(props);
     this.state = {
       counters : [
         { id:1, value:0},
         { id:2, value:0},
         { id:3, value:0},
         { id:4, value:0}
       ],
     };
  }
  counterReset = () =>{
    let counters = this.state.counters.map(
      (item) => 
      {item.value = 0; 
      return item});
    this.setState({counters});
  }
  counterRecycle(){
    window.location.reload();
  }
  incCount = (i) =>{
   // console.log(this.state.counters);
    let counters = [...this.state.counters];
    let index = counters.indexOf(i);
    counters[index].value++;
    this.setState({ counters });
  }
  decCount = (i) =>{
    let counters = [...this.state.counters];
    let index = counters.indexOf(i);
    
    counters[index].value--;
    this.setState({ counters });
  }
  itemDelete = (counterId) =>{
    let counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  render(){
    return (
    <Stack sx={{border:10,borderColor: 'skyblue', mt:2,mx:10,borderRadius:16,}}>
    <Images items = { this.state.counters.filter(item => item.value >0).length }/>
    <List
      items = {this.state.counters}
      counterReset = {this.counterReset}
      incCount = {this.incCount}
      decCount = {this.decCount}
      itemDelete = {this.itemDelete}
      counterRecycle = {this.counterRecycle}
    />
    </Stack>
    )
  }
}