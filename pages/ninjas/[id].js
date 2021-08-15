import React from "react";

const DetailPage = ({ ninja }) => {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  const ninjaId = params.id;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${ninjaId}`
  );

  const data = await response.json();

  return {
    props: {
      ninja: data,
    },
  };
}

export async function getStaticPaths(context) {
  // Create static page for every ninja
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await response.json();

  const ninjasPaths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths: ninjasPaths,
    fallback: false,
  };
}

export default DetailPage;
