async function addToCart(_prevState: null | string, queryData: FormData) {
  const itemID = queryData.get("itemID");
  if (itemID === "1") {
    return "已加入购物车";
  } else {
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    return "无法加入购物车：商品已售罄";
  }
}
export { addToCart };
