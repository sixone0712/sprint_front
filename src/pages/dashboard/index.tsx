import type { ReactElement } from 'react';
import type { NextPageWithLayout } from '../_app';

const Page: NextPageWithLayout = () => {
  return <p>hello world</p>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <div>
      <div>dd</div>
      <div>{page}</div>
    </div>
  );
};

export default Page;
