import React from "react";
import useFetch from "./useFetch";

const Home = (isLoading) => {
  const [data] = useFetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
  {
    console.log(isLoading);
    return (
      <>
        <h1> Custom Hook - FetchApi</h1>
        {data &&
          data.map((item) => {
            return <p key={item.id}>{item.title}</p>

          })}
      </>
    );
  };
}
export default Home;