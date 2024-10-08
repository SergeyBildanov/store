import React from 'react'

import './App.css'

function ShopCard({card}){
  return(
    <div className="shop-card">
      <div className="name">{card.name}</div>
      <div className="color">{card.color}</div>
      <img src={card.img} alt="img" className="card-img"/>
      <div className="footer">
      <div className="price">{`$${card.price}`}</div>
      <div className="button">Add to Cart</div>
      </div>
    </div>
  )
}

function ShopItem({item}){
  return(
    <div className="shop-item">
    <img src={item.img} alt="img" className="card-img"/>
    <div className="name">{item.name}</div>
    <div className="color">{item.color}</div>
    <div className="price">{`$${item.price}`}</div>
    <div className="button">Add to Cart</div>
    </div>
  )
}

function IconSwitch({icon, onSwitch}){
  return(
    <span className="material-icons" onClick={()=>{onSwitch()}}>{icon}</span>
  )
}

function ListView({items}){
  return(
    <div className="list-view">
      {
        items.map((item, i=0)=>{
          return <ShopItem item={item} key={i++}/>
        })
      }
    </div>
  )
}

function CardView({cards}){
  return(
    <div className="card-view">
      {
        cards.map((card, i=0)=>{
          return <ShopCard card={card} key={i++}/>
        })
      }
    </div>
  )
}

class Store extends React.Component{
  state = {
    icon: "view_list"
  }
  constructor(props){
    super(props);
    this.onSwitch = this.onSwitch.bind(this);
    this.products = props.products;
  }
  onSwitch(){
    this.setState({
      icon: this.state.icon==="view_list"?"view_module":"view_list",
    })
  }
  render(){
    return this.state.icon === "view_list"?(
      <>
      <IconSwitch icon={this.state.icon} onSwitch={()=>{this.onSwitch()}}/>
      <ListView items={this.products}/>
      </>
      
    ):(
      <>
      <IconSwitch icon={this.state.icon} onSwitch={()=>{this.onSwitch()}}/>
      <CardView cards={this.products}/>
      </>
      
    )} 
  }

const products = [{
  name: "Nike Metcon 2",
  price: "130",
  color: "red",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "blue",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
}, {
  name: "Nike free run",
  price: "170",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
}, {
  name: "Nike Metcon 3",
  price: "150",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
}];

function App() {
  return (
    <Store products={products}/>
  )
}

export default App
