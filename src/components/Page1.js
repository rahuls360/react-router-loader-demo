import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';

function Page1() {
  const { data } = useLoaderData();
  return (
    <div>
      Page1
      <pre>{JSON.stringify(data[0], null, 2)}</pre>
      <Outlet />
    </div>
  );
}

export default Page1;
