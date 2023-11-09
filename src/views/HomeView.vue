<template>
  <main>
    <div class="content">
      <div class="content__wrapper center-wrapper">
        <div class="content__inner">
          <div class="content__subtitle">NEW COLLECTION FOR SNEAKERS</div>
          <h1 class="content__title">Sneakers And Athletic Shoes</h1>
          <div class="content__text">Lorem ipsum dolor sit amet consectetur. Felis elit tellus et convallis commodo massa
            est nam mattis. Quisque leo aliquam dui neque semper arcu elit vel malesuada. Non ac met
          </div>
        </div>
        <RouterLink to="/catalog" class="content__btn">SHOP NOW</RouterLink>
      </div>
    </div>
    <div class="center-wrapper">

    </div>
  </main>
</template>

<style scoped lang="scss">
.content {
  width: 100%;
  background-color: #e1c8a9;
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.45;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1350px) {
    font-size: 18px;
  }

  // .content__wrapper

  &__wrapper {
    background-image: url('./../assets/image/main_bg_320.png');
    background-repeat: no-repeat;
    background-size: 125%;
    background-position: -24px 10px;
    min-height: 498px;
    padding-top: 20px;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    row-gap: 35px;

    @media screen and (min-width: 768px) {
      background-image: url('./../assets/image/main_bg.png');
      background-size: cover;
      background-position: left;
      min-height: 480px;
      padding-top: 95px;
      padding-left: 25px;
    }

    @media screen and (min-width: 1024px) {
      min-height: 640px;
      padding-top: 130px;
      padding-left: 40px;
      row-gap: 45px;
    }

    @media screen and (min-width: 1350px) {
      min-height: 845px;
      padding-top: 165px;
      padding-left: 50px;
    }
  }

  // .content__inner

  &__inner {
    max-width: 300px;
    display: flex;
    flex-direction: column;
    row-gap: 12px;

    @media screen and (min-width: 768px) {
      max-width: 400px;
    }

    @media screen and (min-width: 1024px) {
      max-width: 550px;
      row-gap: 15px;
    }

    @media screen and (min-width: 1350px) {
      max-width: 700px;
      row-gap: 20px;
    }
  }

  // .content__subtitle

  &__subtitle {
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.06em;

    @media screen and (min-width: 768px) {
      font-size: 16px;
    }

    @media screen and (min-width: 1350px) {
      font-size: 20px;
    }
  }

  // .content__title

  &__title {
    font-size: 35px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: 0.04em;

    @media screen and (min-width: 768px) {
      font-size: 46px;
      line-height: 1.1;
    }

    @media screen and (min-width: 1024px) {
      font-size: 65px;
      line-height: 1.15;
    }

    @media screen and (min-width: 1350px) {
      font-size: 70px;
      line-height: 1.4;
    }
  }

  // .content__text

  &__text {
    letter-spacing: 0.02em;
    color: rgba(255, 255, 255, 0.6);
  }

  // .content__btn

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 600;
    width: 130px;
    height: 40px;
    text-transform: uppercase;
    text-decoration: none;
    background-color: #ffffff;
    color: #000000;
    border-radius: 5px;
    cursor: pointer;
    margin: auto 0 10px auto;

    @media screen and (min-width: 768px) {
      width: 150px;
      height: 48px;
      margin: 0;
    }

    @media screen and (min-width: 1024px) {
      width: 160px;
      height: 52px;
      font-size: 16px;
    }

    @media screen and (min-width: 1350px) {
      width: 180px;
      font-size: 18px;
    }
  }
}
</style>
