import { useEffect } from "react";
import { Card, Divider } from "antd";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { stockQuoteStore } from "./logic/stockQuoteStore";
import { Spinner } from "../../common/components/spinner";
import CurrentPriceAndChange from "./components/currentPriceAndChange";
import LowAndHighDay from "./components/lowAndHighDay";
import LowAndHighYear from "./components/lowAndHighYear";
import MarketCapAndVolume from "./components/marketCapAndVolume";
import EPSAndPERatio from "./components/ePSAndPERatio";
import EarningsAnnouncementRow from "./components/earningsAnnouncementRow";
import StockTitle from "./components/stockTitle";
import { BackButton } from "./components/backButton";
import { getCardImageByChange } from "./logic/getCardImageByChange";
import PriceChangeOverPeriod from "./components/priceChangeOverPeriod";
import { NoStockFoundText } from "./components/noStockFoundText";

const StockQuotePage = observer(() => {
  const { symbol = "" } = useParams<{ symbol: string }>();
  const { stockLatestQuote, stockPriceChange, errorMessageGetData, isFetching } =
    stockQuoteStore;

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
    <div className="min-h-screen bg-gradient-to-b from-white via-[#FCFAF0] via-[#FDF9EA] to-white	flex justify-center items-center p-3">
      <Card
        cover={
          <img alt="stockCardImage" src={cardImage} style={{ height: 300 }} />
        }
        hoverable
        style={{ width: 700 }}
        title={<StockTitle name={name} symbol={symbol} />}
        className="w-full max-w-4xl shadow-lg rounded-20px"
      >
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
        <EarningsAnnouncementRow earningsAnnouncement={earningsAnnouncement} />
      </Card>
      <PriceChangeOverPeriod stockPriceChange={stockPriceChange} />
      <BackButton />
    </div>
  );
});

export default StockQuotePage;
