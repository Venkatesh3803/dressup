import React, { useEffect, useState } from 'react'
import Navber from '../../components/navber/navber'
import Footer from '../../components/footer/Footer'
import Singlepagedesign from '../../components/singlepageDesign/singlepagedesign'
import { useParams } from 'react-router-dom'
import { getSingleProducts } from '../../requestMethods'



const SingleProductPage = () => {
  const [product, setProduct] = useState("")
  const { id } = useParams()
  useEffect(() => {
    getSingleProducts(`/product/single/${id}`, "get").then((res) => {
      setProduct(res)
    })

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
