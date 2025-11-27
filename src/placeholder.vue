<template>
  <div class="tentang">
    <div class="text-wrapper-2">Tentang Samarinda</div>
    <div class="group">
      <img class="img" alt="Image removebg" :src="image15RemovebgPreview1" />
      <div class="akar-icons-search">
        <img class="vector" alt="Vector" :src="vector" />
      </div>
    </div>
    <img class="image" alt="Image" :src="image27" />
    <p class="samarinda-merupakan">
      <span class="span">Samarinda merupakan </span>
      <a
        href="https://id.wikipedia.org/wiki/Kota_(Indonesia)"
        rel="noopener noreferrer"
        target="_blank"
      >
        <span class="text-wrapper-8">kota</span>
      </a>
      <span class="span">
        {" "} sekaligus ibu kota provinsi dari Provinsi Kalimantan Timur, Indonesia. Kota ini juga
        merupakan kota dengan penduduk terbesar di Pulau Kalimantan, yaitu dengan jumlah penduduk
        sebanyak 881.225 jiwa (2024). Samarinda memiliki wilayah seluas 783 km² dengan kondisi
        geografi daerah berbukit dengan ketinggian bervariasi dari 10 sampai 200 meter dari
        permukaan laut.
      </span>
    </p>
    <p class="kota-samarinda">
      <span class="span">
        Kota Samarinda dibelah oleh Sungai Mahakam dan menjadi gerbang menuju pedalaman Kalimantan
        Timur melalui jalur sungai, darat maupun udara. Samarinda terkenal dengan perkembangannya
        yang ekspansif seperti Pelabuhan Samarinda dan Pelabuhan Palaran yang keduanya merupakan
        pelabuhan tersibuk se Kalimantan Timur, serta jumlah penduduk terbesar di Kalimantan Timur.
      </span>
    </p>
    <img class="image-2" alt="Image" :src="image28" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import image15RemovebgPreview1 from './image-1-5-removebg-preview-1.png'
import image15RemovebgPreview2 from './image-1-5-removebg-preview-2.png'
import image27 from './image-27.png'
import image28 from './image-28.png'
import vector from './vector.svg'

export default defineComponent({
  name: 'Tentang',
  data() {
    return {
      image15RemovebgPreview1,
      image15RemovebgPreview2,
      image27,
      image28,
      vector,
    }
  },
})
</script>

<style>
.tentang {
  background-color: #fbfbfb;
  min-height: 1717px;
  min-width: 1728px;
  position: relative;
  width: 100%;
}

.tentang .frame {
  background-color: #4169e1;
  display: flex;
  height: 458px;
  left: 0;
  position: absolute;
  top: 1259px;
  width: 1728px;
}

.tentang .div {
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

.tentang .image-removebg {
  height: 120px;
  object-fit: cover;
  position: relative;
  width: 147px;
}

.tentang .text-wrapper {
  color: #ffffff;
  font-family: 'Urbanist-SemiBold', Helvetica;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  width: fit-content;
}

.tentang .text-wrapper-2 {
  color: #4169e1;
  font-family: 'Urbanist-Bold', Helvetica;
  font-size: 72px;
  font-weight: 700;
  left: 104px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 100px;
  white-space: nowrap;
}

.tentang .group {
  background-color: #0f2462;
  display: flex;
  height: 80px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1728px;
}

.tentang .img {
  height: 80px;
  margin-left: 104px;
  object-fit: cover;
  width: 97px;
}

.tentang .navbar {
  display: flex;
  gap: 20px;
  margin-left: 193px;
  margin-top: 22px;
  width: 949px;
}

.tentang .text-wrapper-3 {
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
  width: 109px;
}

.tentang .text-wrapper-4 {
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

.tentang .text-wrapper-5 {
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

.tentang .text-wrapper-6 {
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

.tentang .text-wrapper-7 {
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
  width: 116px;
}

.tentang .akar-icons-search {
  height: 30px;
  margin-left: 251px;
  margin-top: 28px;
  position: relative;
  width: 30px;
}

.tentang .vector {
  height: 79.17%;
  left: 5%;
  position: absolute;
  top: 5%;
  width: 79.17%;
}

.tentang .image {
  aspect-ratio: 1.5;
  height: 486px;
  left: 104px;
  object-fit: cover;
  position: absolute;
  top: 225px;
  width: 729px;
}

.tentang .samarinda-merupakan {
  color: #000000;
  font-family: 'Urbanist-Medium', Helvetica;
  font-size: 36px;
  font-weight: 500;
  left: 864px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 257px;
  width: 774px;
}

.tentang .span {
  color: #000000;
  font-family: 'Urbanist-Medium', Helvetica;
  font-size: 36px;
  font-weight: 500;
  letter-spacing: 0;
}

.tentang .text-wrapper-8 {
  text-decoration: underline;
}

.tentang .kota-samarinda {
  color: #000000;
  font-family: 'Urbanist-Medium', Helvetica;
  font-size: 36px;
  font-weight: 500;
  left: 107px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 762px;
  width: 774px;
}

.tentang .image-2 {
  aspect-ratio: 1.73;
  height: 434px;
  left: 875px;
  object-fit: cover;
  position: absolute;
  top: 751px;
  width: 751px;
}
</style>
