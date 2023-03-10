import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <title>sheldon store</title>
      <Head>
        <meta
          name="description"
          content="sheldon小店是专注于音乐场景打造的音乐购物平台, 包含音乐人周边、3c影音数码、音乐市集等, 和我们一起让音乐购有趣, 给生活加点料"
        />
        <meta
          name="keywords"
          content="数码影音, beats耳机, 击音耳机, 漫步者, akg, 潮牌, T恤, 音乐生活, 食品, 服饰配件, 礼品, 礼物，礼盒，鲜花, ip周边, 云音乐, 商城"
        />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
