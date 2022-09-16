import MainLayout from '@components/Common/Layout/MainLayout';
import { ReactElement } from 'react';

const TestPage = () => {
  return <div>Test</div>;
};

TestPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default TestPage;
