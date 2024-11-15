import React, { useEffect, useState } from 'react'
import CategoryCard from '../components/CategoryCard'
import { getCategories } from '../api/api'
const Categories = () => {
    const [Categories, setCategories] = useState(null)
    async function fetchData() {
        try {
            const res = await getCategories()
            if (res.status === 200) {
                setCategories(res.data)
            }
        } catch (error) {
        }
    }
    console.log(products)
    useEffect(() => {
        fetchData()
    }, [])
    if (Categories === null) {
        return (
            <>
                No Products Available
            </>
        )
    }
    const img = "https://loremflickr.com/640/480/cats"
    const name = "Bespoke Fresh Mouse"
    const price = "101.00"
    return (
        <>
            <div className='w-screen h-full flex justify-start items-start flex-row flex-wrap mt-14 gap-y-20 gap-x-2'>
                {Categories.map((Category, index) => (
                    <CategoryCard img={Category.img} name={Category.name} price={Category.price} key={Category.id} />
                ))
                }
            </div>
        </>
    )
}
export default Categories