import React, { useEffect, useState } from 'react'
import Navber from '../../components/navber/navber'
import Footer from '../../components/footer/Footer'
import Singlepagedesign from '../../components/singlepageDesign/singlepagedesign'
import { useParams } from 'react-router-dom'
import { publicRequest } from '../../requestMethods'



const SingleProductPage = () => {
  const [product, setProduct] = useState("")
  const { id } = useParams()
  useEffect(() => {
    const getAllProducts = async () => {
      const res = await publicRequest.get(`/product/single/${id}`);
      const date = await res.data;
      setProduct(date)
    }
    getAllProducts();
  }, [id])
  return (
    <>
      <Navber />
      <Singlepagedesign product={product} />
      <Footer />
    </>
  )
}

export default SingleProductPage
