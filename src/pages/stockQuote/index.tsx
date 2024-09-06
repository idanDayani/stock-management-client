import React, { Suspense, useEffect } from "react";
import { Card, Divider } from "antd";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { stockQuoteStore } from "./logic/stockQuoteStore";
import { Spinner } from "../../common/components/spinner";
import StockTitle from "./components/stockTitle";
import { BackButton } from "./components/backButton";
import { getCardImageByChange } from "./logic/getCardImageByChange";
import { NoStockFoundText } from "./components/noStockFoundText";
import { CurrentPriceAndChange } from "./components/currentPriceAndChange";
import { LowAndHighDay } from "./components/lowAndHighDay";
import { LowAndHighYear } from "./components/lowAndHighYear";
import { MarketCapAndVolume } from "./components/marketCapAndVolume";
import { EPSAndPERatio } from "./components/ePSAndPERatio";
import { EarningsAnnouncementRow } from "./components/earningsAnnouncementRow";

const PriceChangeOverPeriod = React.lazy(
  () => import("./components/priceChangeOverPeriod")
);

const StockQuotePage = observer(() => {
  const { symbol = "" } = useParams<{ symbol: string }>();
  const {
    stockLatestQuote,
    stockPriceChange,
    errorMessageGetData,
    isFetching,
  } = stockQuoteStore;

  useEffect(() => {
    stockQuoteStore.getLatestQuote(symbol);
  }, [symbol]);

  if (isFetching) {
    return <Spinner />;
  }

  if (errorMessageGetData || !stockLatestQuote?.latestQuote) {
    return <NoStockFoundText />;
  }

  const {
    name,
    latestQuote: {
      price,
      change,
      changesPercentage,
      dayLow,
      dayHigh,
      yearLow,
      yearHigh,
      marketCap,
      volume,
      eps,
      pe,
      earningsAnnouncement,
    },
  } = stockLatestQuote;

  const cardImage = getCardImageByChange(change!);

  return (
    <div className="flex flex-col min-h-screen p-10 bg-gradient-to-b from-[#FCFAF0] to-[#FDF9EA]">
      <StockTitle name={name} symbol={symbol} />
      <BackButton />
      <div className="flex justify-center gap-10">
        <Card hoverable className="w-1/2 shadow-xl rounded-20px border-1">
          <CurrentPriceAndChange
            price={price}
            change={change}
            changesPercentage={changesPercentage}
          />
          <Divider />
          <LowAndHighDay dayLow={dayLow} dayHigh={dayHigh} />
          <LowAndHighYear yearLow={yearLow} yearHigh={yearHigh} />
          <Divider />
          <MarketCapAndVolume marketCap={marketCap} volume={volume} />
          <EPSAndPERatio eps={eps} pe={pe} />
          <Divider />
          <EarningsAnnouncementRow
            earningsAnnouncement={earningsAnnouncement}
          />
        </Card>
        <Suspense fallback={<Spinner />}>
          <PriceChangeOverPeriod stockPriceChange={stockPriceChange} />
        </Suspense>
      </div>
      <img
        alt="stockCardImage"
        src={cardImage}
        style={{ height: 300, width: 600 }}
        className="self-center mt-5 rounded-xl"
      />
    </div>
  );
});

export default StockQuotePage;
