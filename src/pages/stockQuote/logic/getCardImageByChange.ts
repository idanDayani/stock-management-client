export function getCardImageByChange(change: number) {
  const positiveImage =
    "https://as1.ftcdn.net/v2/jpg/04/38/43/62/1000_F_438436201_dcXL3WeB0tACpuC1B8jzr02nalXRLDEo.jpg";
  const negativeImage =
    "https://g.foolcdn.com/image/?url=https%3A%2F%2Fg.foolcdn.com%2Feditorial%2Fimages%2F749493%2Feconomic-crisis-stock-chart-falling-down-business-global-money-bankruptcy.jpg&op=resize&w=1200&h=630";
  const withoutChangeImage =
    "https://t4.ftcdn.net/jpg/01/32/34/11/360_F_132341163_y6AXX1u91nMGZDCVpMpzySz6d8ofhGLW.jpg";
  if (change > 0) {
    return positiveImage;
  } else if (change < 0) {
    return negativeImage;
  } else {
    return withoutChangeImage;
  }
}
