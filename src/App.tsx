import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import Loading from 'components/common/Loading';
import { GlobalStyles } from 'styles/globalStyles';
import useAnalytics from 'hooks/useAnalytics';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import Error from 'components/common/Error';
import ReactGAWrapper from 'components/common/ReactGAWrapper';

const MainPage = lazy(() => import('pages/Main'));
const CurriculumPage = lazy(() => import('pages/Curriculum'));
const RecruitmentPage = lazy(() => import('pages/Recruitment'));
const FaqPage = lazy(() => import('pages/Faq'));
const NotFoundPage = lazy(() => import('pages/NotFound'));

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            refetchOnWindowFocus: false,
            useErrorBoundary: true,
            suspense: true,
        },
    },
});

const App = () => {
    return <QueryClientProvider client={queryClient}>{createMainContent()}</QueryClientProvider>;
};

const createMainContent = () => {
    const { initialized } = useAnalytics();
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Header />
            <ErrorBoundary
                FallbackComponent={Error}
                onError={(error) => {
                    // console.log(error);
                }}
            >
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <ReactGAWrapper initialized={initialized}>
                                    <MainPage />
                                </ReactGAWrapper>
                            }
                        />
                        <Route
                            path="/curriculum"
                            element={
                                <ReactGAWrapper initialized={initialized}>
                                    <CurriculumPage />
                                </ReactGAWrapper>
                            }
                        />
                        <Route
                            path="/recruitment"
                            element={
                                <ReactGAWrapper initialized={initialized}>
                                    <RecruitmentPage />
                                </ReactGAWrapper>
                            }
                        />
                        <Route
                            path="/faq"
                            element={
                                <ReactGAWrapper initialized={initialized}>
                                    <FaqPage />
                                </ReactGAWrapper>
                            }
                        />
                        <Route
                            path="*"
                            element={
                                <ReactGAWrapper initialized={initialized}>
                                    <NotFoundPage />
                                </ReactGAWrapper>
                            }
                        />
                    </Routes>
                </Suspense>
            </ErrorBoundary>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
