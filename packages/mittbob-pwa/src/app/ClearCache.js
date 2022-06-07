import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

const withClearCache = (Component) => {
  const ClearCacheComponent = (props) => {
    const serviceWorkerRegistration = useSelector(({ app }) => app.serviceWorkerRegistration);
    const serviceWorkerUpdated = useSelector(({ app }) => app.serviceWorkerUpdated);
    const [shouldForceRefresh, setShouldForceRefresh] = useState(!!(serviceWorkerRegistration && serviceWorkerUpdated));

    useEffect(() => {
      if (shouldForceRefresh) {
        setShouldForceRefresh(false);
        refreshCacheAndReload();
      }
    }, [shouldForceRefresh]);

    const refreshCacheAndReload = () => {
      if (caches) {
        caches.keys().then((names) => {
          for (const name of names) {
            caches.delete(name);
          }
        });
      }
      window.location.reload();
    };

    return (
      <>
        {!shouldForceRefresh && <Component {...props} />}
      </>
    );
  }

  return ClearCacheComponent;
}

export default withClearCache;