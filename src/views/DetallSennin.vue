<template>
  <div class="flex">
    <HeaderAuth />
    <div class="shop-container">
      <h1 class="shopname">仙人</h1>
      <img class="shop-image" src="../assets/sushi.jpg" alt="sushi" />
      <p class="hashtag">#東京都#寿司</p>
      <p>料理長厳選の食材から作る寿司を用いたコースをぜひお楽しみください。食材・味・価格、お客様の満足度を徹底的に追及したお店です。特別な日のお食事、ビジネス接待まで気軽に使用することができます。</p>
    </div>
    <div class="reservation-container">
      <h1>予約</h1>
      <input type="text">
    </div>
  </div>
</template>

<script>
import HeaderAuth from "../components/HeaderAuth";
export default {
  components: {
    HeaderAuth
  }
};
</script>

<style scoped>
.left-padding {
 display: flex;
}

.shop-image {
  width: 250px;
  height: 150px;
}

.shops {
  display: flex;
}

.shop-container {
  width: 250px;
  padding: 30px;
}
</style>