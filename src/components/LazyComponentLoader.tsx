import React, {lazy, Suspense} from 'react';

interface LazyComponentLoaderProps {
    path: string;
}

const LazyComponentLoader = ({ path }: LazyComponentLoaderProps) => {
    const Component = lazy(() => import(`./${path}`));

    return (
        <Suspense fallback={<div>...</div>}>
            <Component />
        </Suspense>
    );
};

export default LazyComponentLoader;