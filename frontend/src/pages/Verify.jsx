import React, { useEffect, useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Verify = () => {
  const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext);
  const [searchParams] = useSearchParams();
  const success = searchParams.get('success');
  const orderId = searchParams.get('orderId');

  const verifyPayment = async () => {
    try {
      const authToken = token || localStorage.getItem('token')
      if (!authToken) {
        toast.error('User not authenticated.')
        navigate('/login')
        return
      }

      if (!orderId) {
        toast.error('Missing order ID in query parameters.')
        navigate('/cart')
        return
      }

      const response = await axios.post(
        backendUrl + '/api/order/verifyStripe',
        { success, orderId },
        { headers: { token: authToken } }
      )

      if (response.data.success) {
        setCartItems({})
        toast.success('Payment verified successfully!')
        navigate('/orders')
      } else {
        toast.error(response.data.message || 'Payment verification failed')
        navigate('/cart')
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message || 'Error verifying Stripe payment')
      navigate('/cart')
    }
  }

  useEffect(() => {
    verifyPayment()
  }, [])

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <p className='text-lg font-medium'>Verifying payment, please wait...</p>
    </div>
  )
}

export default Verify
