import React, { useEffect, useState } from "react"
import { Children } from "react";
import { get } from "../service/api";

export default function DataLoader(props) {

  const { endPoint, children } = props;
  const [data, setData] = useState(undefined);

  useEffect(() => {
    const fecthData = async () => {
      
      const response = await get(endPoint);

      if (response) {
        setData(response.data);
      }

      console.log( response );

    }

    fecthData();
  }, [endPoint]);

  const hasChildren = () => {

    if (children) {
      return Children.count(children) > 0
    } else {
      return false;
    }

  }

  function handleChange() {

    /*if ( data ) {
      const newData = Object.assign({}, data);
      newData.person.fullName = 'Ivano Carvalho';
      setData( newData );
    }*/

    console.log('MainElement', data);

  }

  const inherited = {
    onChange: handleChange
  }  

  return (

    <> 
      {
        data &&
          React.Children.map(children, (child, i) => {
          return React.cloneElement(child, { data: data, inherited: inherited });
        })
      } 
    </>
  );

}