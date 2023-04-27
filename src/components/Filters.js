
import { Button, FormCheck } from 'react-bootstrap'
import { CartState } from '../context/Context';
import Rating from './Rating'

const Filters = () => {

  const {productState : {byStock, byFastDelivery, sort, byRating}, productDispatch} = CartState()

  return (
    <div className='filters'>
      <span className='title'>Filter Products.</span>
      <span>
        <FormCheck
        inline
        label = "Ascending"
        name = "group1"
        type = "radio"
        id = {`inline-1`}
        onChange={() => productDispatch({
          type: "SORT_BY_PRICE",
          payload: "lowToHigh",
        })
      }
      checked={sort === "lowToHigh" ? true : false}
        >
        </FormCheck>
      </span>
      <span>
        <FormCheck
        inline
        label = "Decending"
        name = "group1"
        type = "radio"
        id = {`inline-2`}
        onChange={() => productDispatch({
          type: "SORT_BY_PRICE",
          payload: "highToLow",
        })
      }
      checked={sort === "highToLow" ? true : false}
        >
        </FormCheck>
      </span>
      <span>
        <FormCheck
        inline
        label = "Include out of stock"
        name = "group1"
        type = "checkbox"
        id = {`inline-3`}
        onChange={() => productDispatch({
          type: "FILTER_BY_STOCK"
        })}
        checked={byStock}
        >

        </FormCheck>
      </span>
      <span>
        <FormCheck
        inline
        label = "Fast Delivery Only"
        name = "group1"
        type = "checkbox"
        id = {`inline-4`}
        onChange={() => productDispatch({
          type: "FILTER_BY_DELIVERY",
        })}
        checked={byFastDelivery}
        >
        </FormCheck>
      </span>
      <span>
        <label style={{paddingRight: 10}}>Rating :</label>
        <Rating rating = {byRating} 
        onClick={(i) => productDispatch({
          type: "FILTER_BY_RATING",
          payload: i+1,
        })}
        style={{cursor : "pointer"}}/>
      </span>
      <Button variant='light' onClick={() => productDispatch({
        type: "CLEAR_FILTERS"
      })}>Clear Filters</Button>
    </div>
  )
}

export default Filters
