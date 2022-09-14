import type { ReactElement } from 'react';

import type { NextPageWithLayout } from './_app';

const Page: NextPageWithLayout = () => {
  return <p>hello world</p>;
};

Page.getLayout = function DashboardLayout(page: ReactElement) {
  return (
    <div>
      <div>Dashboard</div>
      {page}
    </div>
  );
};

export default Page;
