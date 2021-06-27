<template>
  <div class="flex">
    <HeaderAuth />
    <div class="left-padding">
      <div class="flex icon-field">
        <button>マイページ</button>
      </div>
      <div class="flex icon-field">
        <button>ログアウト</button>
      </div>
    </div>
    <div class="search">
      <input placeholder="area" v-model="area" />
      <input placeholder="genre" v-model="genre" />
      <input placeholder="shopname" v-model="shopname" />
      <button class="search2">検索</button>
    </div>
    <div class="shops">
      <div class="shop-container">
        <img class="shop-image" src="../assets/sushi.jpg" alt="sushi">
        <p class="shopname2">仙人</p>
        <p class="hashtag">#東京都#寿司</p>
        <button class="shopdetall">詳しくみる</button>
      </div>
      <div class="shop-container">
        <img class="shop-image" src="../assets/yakiniku.jpg" alt="sushi">
        <p class="shopname2">牛助</p>
        <p class="hashtag">#大阪府#焼肉</p>
        <button class="shopdetall">詳しくみる</button>
      </div>
      <div class="shop-container">
        <img class="shop-image" src="../assets/izakaya.jpg" alt="sushi">
        <p class="shopname2">戦慄</p>
        <p class="hashtag">#福岡県#居酒屋</p>
        <button class="shopdetall">詳しくみる</button>
      </div>
      <div class="shop-container">
        <img class="shop-image" src="../assets/italian.jpg" alt="sushi">
        <p class="shopname2">ルーク</p>
        <p class="hashtag">#東京都#イタリアン</p>
        <button class="shopdetall">詳しくみる</button>
      </div>
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
  width: 100px;
  height: 60px;
}

.shops {
  display: flex;
}

.shop-container {
  padding: 30px;
}
</style>