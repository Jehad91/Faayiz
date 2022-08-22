import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Spin } from "antd";
import "../styles/globals.css";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const { isReady } = useRouter();

  useEffect(() => {
    setLoading(isReady);
  }, [isReady]);

  return (
    <Spin tip="Loading..." spinning={!loading}>
      <Component {...pageProps} />;
    </Spin>
  );
}

export default MyApp;
