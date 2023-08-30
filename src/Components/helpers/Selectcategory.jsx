import React from 'react';
import { Select } from 'antd';
import "../../SASS/createproduct.scss"


export default function Selectcategory({categorySelected,Setcategoryselected}) {

  const handleChange = (value) => {
    // console.log(`selected ${value}`);
    Setcategoryselected(value)
  };

    return (
    <Select
      defaultValue="Men"
      className='category'
      onChange={handleChange}
      options={[
        {
          value: 'Men',
          label: 'Men',
        },
        {
          value: 'Women',
          label: 'Women',
        },
        {
          value: 'Accessories',
          label: 'Accessories',
        },
        {
          value: 'Kids',
          label: 'Kids',
        },

      ]}
    />

    )
    }
