"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, setSelectedCategory } from "@/redux/categorySlice";
import Image from "next/image";
import React from "react";
import { RootState, AppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";
import { Category } from "@/utils/type";
import CategorySkeleton from "@/components/skeletons/categorySkeleton";
import "@/styles/category.css"; 

export default function Categories() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { categories, loading } = useSelector(
    (state: RootState) => state.categories
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryClick = (category: Category) => {
    dispatch(setSelectedCategory(category.name));
    router.push(`/products/${category.category_id}`);
  };

  return (
    <div className='categories-container'>

      <h2 className='categories-title'>All Categories</h2>

      <div className='categories-grid cursor-pointer'>
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <CategorySkeleton key={index} />
            ))
          : categories?.map((category) => (
              <div
                key={category.category_id}
                onClick={() => handleCategoryClick(category)}
                className='category-card'
              >

                <div className='category-image-wrapper'>
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={150}
                    height={150}
                    className='category-image'
                  />
                </div>


                <h3 className='category-name'>{category.name}</h3>
              </div>
            ))}
      </div>
    </div>
  );
}
