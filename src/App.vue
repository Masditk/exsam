<template>
  <div class="landing-page">
    <p class="text-wrapper">Discover New Places and Create Unforgettable Memories</p>

    <div class="frame">
      <div class="div">
        <div class="frame-2">
          <div class="text-wrapper-2">Destinasi Wisata</div>

          <p class="p">Destinasi wisata yang ada di Samarinda</p>
        </div>

        <div class="div-wrapper">
          <div class="text-wrapper-3">Lihat Semua</div>
        </div>
      </div>

      <div class="frame-3">
        <div class="frame-4">
          <div class="frame-5" />

          <div class="text-wrapper-4">Croatia</div>
        </div>

        <div class="frame-4">
          <div class="frame-5" />

          <div class="text-wrapper-4">Morocco</div>
        </div>

        <div class="frame-4">
          <div class="image-wrapper">
            <img class="image" alt="Image" :src="image9" />
          </div>

          <div class="text-wrapper-4">Mexico</div>
        </div>
      </div>
    </div>

    <div class="frame-6">
      <div class="frame-7">
        <div class="frame-2">
          <div class="text-wrapper-2">Budaya dan Sejarah</div>

          <p class="p">Budaya yang ada di Samarinda dan sejarahnya</p>
        </div>

        <div class="div-wrapper">
          <div class="text-wrapper-3">Lihat Semua</div>
        </div>
      </div>

      <div class="frame-3">
        <div class="frame-4">
          <div class="frame-5" />

          <div class="text-wrapper-4">Croatia</div>
        </div>

        <div class="frame-4">
          <div class="frame-5" />

          <div class="text-wrapper-4">Morocco</div>
        </div>

        <div class="frame-4">
          <div class="image-wrapper">
            <img class="image" alt="Image" :src="image" />
          </div>

          <div class="text-wrapper-4">Mexico</div>
        </div>
      </div>
    </div>

    <div class="frame-wrapper">
      <div class="frame-8">
        <img class="image-removebg" alt="Image removebg" :src="image15RemovebgPreview2" />

        <p class="text-wrapper-5">© 2023 Travel Pulse. All rights reserved</p>
      </div>
    </div>

    <img
      class="landmark-kota"
      alt="Landmark kota"
      :src="landmarkKotaSamarindaIstock1468649261Ratio16X91"
    />

    <div class="group">
      <img class="img" alt="Image removebg" :src="image15RemovebgPreview1" />

      <div class="navbar">
        <div class="text-wrapper-6">Beranda</div>

        <div class="text-wrapper-7">Destinasi</div>

        <div class="text-wrapper-8">Peta Interaktif</div>

        <div class="text-wrapper-9">Budaya dan Sejarah</div>

        <div class="text-wrapper-10">Tentang</div>
      </div>

      <div class="akar-icons-search">
        <img class="vector" alt="Vector" :src="vector" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import image15RemovebgPreview1 from './image-1-5-removebg-preview-1.png'
import image15RemovebgPreview2 from './image-1-5-removebg-preview-2.png'
import image9 from './image-9.png'
import image from './image.png'
import landmarkKotaSamarindaIstock1468649261Ratio16X91 from './landmark-kota-samarinda-istock-1468649261-ratio-16x9-1.png'
import vector from './vector.svg'

export default defineComponent({
  name: 'LandingPage',
  data() {
    return {
      image15RemovebgPreview1,
      image15RemovebgPreview2,
      image9,
      image,
      landmarkKotaSamarindaIstock1468649261Ratio16X91,
      vector,
    }
  },
})
</script>

<style>
.landing-page {
  background-color: #fbfbfb;
  min-height: 2827px;
  min-width: 1728px;
  position: relative;
  width: 100%;
}

.landing-page .text-wrapper {
  color: #ffffff;
  font-family: 'Urbanist-ExtraBold', Helvetica;
  font-size: 80px;
  font-weight: 800;
  left: 258px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 367px;
  width: 1212px;
}

.landing-page .frame {
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  gap: 25px;
  left: 104px;
  position: absolute;
  top: 1005px;
}

.landing-page .div {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  gap: 888px;
  position: relative;
  width: 1520px;
}

.landing-page .frame-2 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  position: relative;
}

.landing-page .text-wrapper-2 {
  color: #000000;
  font-family: 'Urbanist-Bold', Helvetica;
  font-size: 48px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  width: fit-content;
}

.landing-page .p {
  color: #3f3f3f;
  font-family: 'Urbanist-Medium', Helvetica;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  width: fit-content;
}

.landing-page .div-wrapper {
  align-items: flex-start;
  border: 1px solid;
  border-color: #4169e1;
  border-radius: 40px;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  padding: 20px 32px;
  position: relative;
}

.landing-page .text-wrapper-3 {
  color: #4169e1;
  font-family: 'Urbanist-SemiBold', Helvetica;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: right;
  width: fit-content;
}

.landing-page .frame-3 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 25px;
  position: relative;
}

.landing-page .frame-4 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 28px;
  position: relative;
}

.landing-page .frame-5 {
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%);
  border-radius: 32px;
  height: 452px;
  position: relative;
  width: 490px;
}

.landing-page .text-wrapper-4 {
  color: #000000;
  font-family: 'Urbanist-Bold', Helvetica;
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.landing-page .image-wrapper {
  background-color: #000000;
  border-radius: 32px;
  height: 452px;
  overflow: hidden;
  position: relative;
  width: 490px;
}

.landing-page .image {
  height: 452px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 490px;
}

.landing-page .frame-6 {
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  gap: 17px;
  left: 104px;
  position: absolute;
  top: 1691px;
}

.landing-page .frame-7 {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  gap: 784px;
  position: relative;
  width: 1520px;
}

.landing-page .frame-wrapper {
  background-color: #4169e1;
  display: flex;
  height: 458px;
  left: 0;
  position: absolute;
  top: 2369px;
  width: 1728px;
}

.landing-page .frame-8 {
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  gap: 32px;
  height: 181px;
  margin-left: 655px;
  margin-top: 139px;
  position: relative;
  width: 418px;
}

.landing-page .image-removebg {
  height: 120px;
  object-fit: cover;
  position: relative;
  width: 147px;
}

.landing-page .text-wrapper-5 {
  color: #ffffff;
  font-family: 'Urbanist-SemiBold', Helvetica;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  width: fit-content;
}

.landing-page .landmark-kota {
  aspect-ratio: 1.77;
  height: 974px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 1728px;
}

.landing-page .group {
  display: flex;
  height: 80px;
  left: 104px;
  position: absolute;
  top: 29px;
  width: 1520px;
}

.landing-page .img {
  height: 80px;
  object-fit: cover;
  width: 97px;
}

.landing-page .navbar {
  display: flex;
  gap: 20px;
  margin-left: 193px;
  margin-top: 22px;
  width: 949px;
}

.landing-page .text-wrapper-6 {
  align-items: center;
  color: #ffffff;
  display: flex;
  font-family: 'Urbanist-ExtraBold', Helvetica;
  font-size: 24px;
  font-weight: 800;
  height: 36px;
  justify-content: center;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  text-decoration: underline;
  width: 109px;
}

.landing-page .text-wrapper-7 {
  align-items: center;
  color: #ffffff;
  display: flex;
  font-family: 'Urbanist-ExtraBold', Helvetica;
  font-size: 24px;
  font-weight: 800;
  height: 36px;
  justify-content: center;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  width: 156px;
}

.landing-page .text-wrapper-8 {
  align-items: center;
  color: #ffffff;
  display: flex;
  font-family: 'Urbanist-ExtraBold', Helvetica;
  font-size: 24px;
  font-weight: 800;
  height: 36px;
  justify-content: center;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  width: 198px;
}

.landing-page .text-wrapper-9 {
  align-items: center;
  color: #ffffff;
  display: flex;
  font-family: 'Urbanist-ExtraBold', Helvetica;
  font-size: 24px;
  font-weight: 800;
  height: 36px;
  justify-content: center;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  width: 280px;
}

.landing-page .text-wrapper-10 {
  align-items: center;
  color: #ffffff;
  display: flex;
  font-family: 'Urbanist-ExtraBold', Helvetica;
  font-size: 24px;
  font-weight: 800;
  height: 36px;
  justify-content: center;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  width: 116px;
}

.landing-page .akar-icons-search {
  height: 30px;
  margin-left: 251px;
  margin-top: 28px;
  position: relative;
  width: 30px;
}

.landing-page .vector {
  height: 79.17%;
  left: 5%;
  position: absolute;
  top: 5%;
  width: 79.17%;
}
</style>
