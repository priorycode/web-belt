<script setup>
import {IconBrandFacebook, IconBrandInstagram, IconMapPin, IconBrandWhatsapp, IconMail, IconWorldWww} from '@tabler/icons-vue'

</script>

<template>
  <div class="container-hero md:h-screen pb-3 md:pb-0">
    <div class="container-all flex flex-col md:flex-row gap-6 md:items-center h-full pt-32 md:pt-16">
      <div class="flex-1">
        <h1 class="text-[28px] md:text-[42px] font-bold text-white mb-[20px] md:mb-[80px] text-shadow"
            data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000"
        >Contácto</h1>
        <h2 class="text-[20px] md:text-[28px] font-medium text-[#A2CEFD] mb-[20px] md:mb-[48px] text-shadow"
            data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"
        >Navega hacia el éxito con nosotros</h2>
        <p class="text-white text-shadow max-w-md mb-[12px] md:mb-[20px]"
           data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000"
        >
          Déjanos llevar tu marca a nuevas latitudes. En nuestra agencia, fusionamos la fuerza
          del Báltico y la esencia del Ártico para crear estrategias frías, precísas y poderosas.
        </p>
        <p class="text-white text-shadow max-w-md mb-[32px] md:mb-[68px]"
           data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000"
        >
          Contáctanos hoy y hagamos que tu mensaje conquiste mares inexplorados
        </p>
        <nav class="flex items-center gap-2">
          <a href="https://www.facebook.com/Treizestore2021" target="_blank"
          >
            <IconBrandFacebook class="w-10 h-10 text-white hover:text-[#A2CEFD] hover:scale-125 transition-all duration-300 ease-in-out"
                               data-aos="flip-left" data-aos-delay="600" data-aos-duration="1000"
            />
          </a>
          <a href="https://www.instagram.com/by_nataliagomez/" target="_blank">
            <IconBrandInstagram class="w-10 h-10 text-white hover:text-[#A2CEFD] hover:scale-125 transition-all duration-300 ease-in-out"
                                data-aos="flip-left" data-aos-delay="700" data-aos-duration="1000"
            />
          </a>
        </nav>
      </div>
      <div class=" flex-0.9  container-card  p-[40px] border-2 border-[#868C9A] rounded-[20px] md:rounded-[34px]"
           data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000"
      >
        <div class="flex flex-col gap-6 mb-10 md:mb-20">
          <div class="flex items-center gap-6 text-white" >
            <IconMapPin class="flex-0.1 w-6 h-6 md:w-8 md:h-8"
                        data-aos="flip-left" data-aos-delay="1100" data-aos-duration="1000"
            />
            <span class="flex-1 text-[16px] md:text-[20px]"
                  data-aos="zoom-in" data-aos-delay="1200" data-aos-duration="1000"
            >Aleksandra Fredry 5, 78-100 Kolobrzeg, Polonia</span>
          </div>
          <div class="flex items-center gap-6 text-white">
            <IconBrandWhatsapp class="w-6 h-6 md:w-8 md:h-8"
                               data-aos="flip-left" data-aos-delay="1300" data-aos-duration="1000"
            />
            <a href="https://wa.me/48728873083?text=Estoy%20interesado%20en%20tus%20servicios" target="_blank" class="text-[16px] md:text-[20px]"
               data-aos="zoom-in" data-aos-delay="1400" data-aos-duration="1000"
            >+48 (728) 873 083</a>
          </div>
          <div class="flex items-center gap-6 text-white">
            <IconMail class="w-6 h-6 md:w-8 md:h-8"
                      data-aos="flip-left" data-aos-delay="1500" data-aos-duration="1000"
            />
            <a href="mailto:beltmarketing7@gmail.com?subject=Interesado%20en%20tu%20servicio" target="_blank" class="text-[16px] md:text-[20px]"
               data-aos="zoom-in" data-aos-delay="1600" data-aos-duration="1000"
            >beltmarketing7@gmail.com</a>
          </div>
          <div class="flex items-center gap-6 text-white">
            <IconWorldWww class="w-6 h-6 md:w-8 md:h-8"
                          data-aos="flip-left" data-aos-delay="1700" data-aos-duration="1000"
            />
            <a href="/" class="text-[16px] md:text-[20px]"
               data-aos="zoom-in" data-aos-delay="1800" data-aos-duration="1000"
            >www.beltmarketing.co</a>
          </div>
        </div>
        <div class="flex justify-center md:justify-start">
          <img src="@/assets/qr.svg" alt="Qr Principal" class="w-36"
               data-aos="flip-left" data-aos-delay="1900" data-aos-duration="1100"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-hero{
  background-image: url("@/assets/contact.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
}
.container-card{
  background: rgba(0, 0, 0, 0.52);
}

.text-shadow{
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>