import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../redux/Shopping/shopping-actions'
import { useNavigate } from 'react-router-dom'
import { Store } from 'react-notifications-component'

const SingleItem = ({ currentItem, addToCart }) => {
  const navigate = useNavigate()
  return (
    <div className="currentItemWrapper">
      <img
        src={`.${currentItem.id.image}`}
        alt={currentItem.id.title}
        className="productImg"
      />
      <div>
        <p>{currentItem.id.title}</p>
        <p>{currentItem.id.album_id}</p>
        <p>{currentItem.id.artist}</p>
        <p>{currentItem.id.price}</p>
        <p>{currentItem.id.format}</p>
        <p>{currentItem.id.cat}</p>
        <p>{currentItem.id.releaseDate}</p>
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
