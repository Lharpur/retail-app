import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../redux/Shopping/shopping-actions'
import { useNavigate } from 'react-router-dom'
import { Store } from 'react-notifications-component'

const SingleItem = ({ currentItem, addToCart }) => {
  const navigate = useNavigate()
  return (
    <div className="currentItemWrapper">
      <div className="currentItemImg">
        <img src={`.${currentItem.id.image}`} alt={currentItem.id.title} />
      </div>
      <div className="currentItemInfo">
        <h2>{currentItem.id.title}</h2>
        <h3>{currentItem.id.artist}</h3>
        <h3>${currentItem.id.price}</h3>
        <button onClick={() => navigate(-1)}>Return</button>
        <button
          onClick={() =>
            addToCart(currentItem.id.album_id) &&
            Store.addNotification({
              title: 'Added To Cart',
              message: '',
              type: 'success',
              insert: 'top',
              container: 'bottom-right',
              animationIn: ['animate__animated', 'animate__fadeIn'],
              animationOut: ['animate__animated', 'animate__fadeOut'],
              dismiss: {
                duration: 3000,
                onScreen: true,
              },
            })
          }
        >
          Add To Cart
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    currentItem: state.shop.currentItem,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem)
